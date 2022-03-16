let isDev = false;
if (process.env.NODE_ENV === 'dev') {
  isDev = true;
}

module.exports = api => {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-react',
      {
        development: isDev,
        runtime: 'automatic',
      },
    ],
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ];
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        regenerator: true,
      },
    ],
    ['import', { libraryName: 'antd', libraryDirectory: 'lib' }, 'antd'],
  ];

  if (isDev) {
    plugins.push([
      'react-refresh/babel',
      {
        skipEnvCheck: true,
      },
    ]);
  }

  return {
    // 这个不设置的话，webpack 魔法注释会被删除，魔法注释用于分包
    comments: true,
    presets,
    plugins,
  };
};
