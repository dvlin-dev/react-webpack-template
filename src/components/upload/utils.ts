import SparkMD5 from 'spark-md5';
import http from '@/utils/http';

export function getBase64(img: Blob, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
/**
 * database64文件格式转换为2进制
 *
 * @param  {[String]} data dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
 * @param  {[String]} mime [description]
 * @return {[blob]}      [description]
 */
// TODO Blob(,type)
export function data2blob(data: string) {
  // eslint-disable-next-line prefer-destructuring
  let cdata = data.split(',')[1];
  cdata = window.atob(cdata);
  const ia = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    ia[i] = cdata.charCodeAt(i);
  }
  // canvas.toDataURL 返回的默认格式就是 image/png
  return new Blob([ia]);
}
/**
 * 计算文件 md5
 * @param file 浏览器文件 (File|Blob) 对象
 * @returns {Promise<string>} 异步返回 md5
 */
export function Md5File(file: { size: number }): Promise<string> {
  return new Promise((resolve, reject) => {
    const blobSlice = File.prototype.slice;
    const chunkSize = 2097152; // 分为 2MB 的块
    const chunks = Math.ceil(file.size / chunkSize);
    let currentChunk = 0;
    const spark = new SparkMD5.ArrayBuffer();
    const fileReader = new FileReader();

    function loadNext() {
      const start = currentChunk * chunkSize;
      let end;
      if (start + chunkSize >= file.size) {
        end = file.size;
      } else {
        end = start + chunkSize;
      }
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }
    fileReader.onload = (e: any) => {
      spark.append(e.target.result);
      currentChunk++;

      if (currentChunk < chunks) {
        loadNext();
      } else {
        resolve(spark.end());
      }
    };

    fileReader.onerror = e => {
      reject(e);
    };

    loadNext();
  });
}

export async function getFormData(md5: any) {
  if (!md5 || !/[0-9a-f]{32}/gi.test(md5)) {
    alert('md5 未计算正确');
    return undefined;
  }
  const url = `files/${md5}/params`;
  try {
    const code = (await http.get(url)).data;
    // eslint-disable-next-line no-eval
    return eval(code);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
const endpoint = 'https://oss.sunxinao.cn';
const prefix = '/cloud-courier/upload/';

export async function DoUpload(url: string, md5Code: any, ImgFile: any) {
  const exist =
    (
      await http.head(`${url}?random=${Math.random()}`, {
        validateStatus() {
          return true; // 把所有响应码视为正常防止抛异常
        },
      })
    ).status /
      100 ===
    2;
  if (exist) {
    console.log('已存在', url);
    return url;
    // eslint-disable-next-line no-else-return
  } else {
    // 第一次上传
    console.log(md5Code, ImgFile);
    const form = await getFormData(md5Code);
    if (form === undefined) {
      // 上传失败
    }
    form.append('file', ImgFile);
    return new Promise((resolve, reject) => {
      http({
        url: endpoint,
        method: 'POST',
        data: form,
      })
        .then(() => {
          resolve(url);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}

export function upload(file: any, setState: any) {
  return new Promise((resolve, reject) => {
    getBase64(file, async (imageUrl: any) => {
      const ImgFile = data2blob(imageUrl);
      Md5File(ImgFile)
        .then(async (result: any) => {
          const md5Code = result.toString();
          const imgUrl = endpoint + prefix + md5Code;
          const uploadUrl = DoUpload(imgUrl, md5Code, ImgFile);
          setState({
            loading: false,
            imageUrl: await uploadUrl,
          });
          resolve(uploadUrl);
        })
        .catch(error => {
          reject(error);
        });
    });
  });

  // console.log(file)
}
