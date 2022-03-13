/* eslint-disable global-require */
module.exports = {
  plugins: [
    require('postcss-import'), // css导入
    require('postcss-preset-env'), // 浏览器兼容
    require('postcss-pxtorem')({
      // px 转换rem
      rootValue: 75, // 配置75px为1rem
      unitPrecision: 5,
      minPixelValue: 2, // 设置要替换的最小像素值
      propWhiteList: ['*'], // Enables converting of all properties – default is just font sizes.
      selectorBlackList: ['.ig-'], // 忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
    }),
  ],
};
