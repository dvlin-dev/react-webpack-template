/*
 * @Author: Alan
 * @Date: 2022-01-30 16:04:35
 * @LastEditTime: 2022-02-08 21:14:31
 * @LastEditors: Alan
 * @Description: 
 * @FilePath: \cloud-courier-customer-service\src\components\upload\index.tsx
 * 守得云开 见月明
    TODO  img最大10MB限制
 * 
 */
import { Avatar } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import { subjectActions } from '@/store/subject.slice';
import { useDispatch } from 'react-redux';

import { upload } from './utils';

export default function UploadImg() {
  const [state, setState] = useState({
    loading: false,
    imageUrl: null,
  });

  const { loading, imageUrl } = state;
  const inputR = useRef<HTMLInputElement>(null);

  const choiceImg = () => {
    inputR.current?.click();
  };
  const dispatch = useDispatch();
  const imgChange = async (e: any) => {
    const file = e.target.files[0];
    setState({ loading: true, imageUrl: null });
    const url = await upload(file, setState);
    dispatch(subjectActions.setLogo(url));
  };

  const uploadButton = (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="UpButtonContain" onClick={choiceImg} onKeyDown={choiceImg}>
      {loading ? <LoadingOutlined /> : <PlusOutlined style={{ fontSize: '26px' }} />}
      <input
        style={{ display: 'none' }}
        type="file"
        ref={inputR}
        name="file"
        id="file"
        onChange={imgChange}
      />
    </div>
  );
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {imageUrl ? (
        <Avatar src={imageUrl} alt="avatar" style={{ width: '104px', height: '104px' }} />
      ) : (
        uploadButton
      )}
    </>
  );
}
