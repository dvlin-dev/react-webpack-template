// /**
//  * 获取地址参数
//  * @param {string} url 指定地址，默认取当前页地址
//  * @return {string} { a: 1, b: 2, c: 3 }
//  */
//  function getQueryObject (url: string) {
//   url = url || window.location.href
//   const search = url.substring(url.lastIndexOf('?') + 1)
//   const obj = {}
//   const reg = /([^?&=]+)=([^?&=]*)/g
//   search.replace(reg, (rs, $1, $2) => {
//     const name = decodeURIComponent($1)
//     let val = decodeURIComponent($2)
//     val = String(val)
//     obj[name] = val
//     return rs
//   })
//   return obj
// }

// export{
//   // eslint-disable-next-line import/prefer-default-export
//   getQueryObject
// }
