module.exports = {
  lintOnSave: true,

  pwa: {
    name: 'Finanças Pessoais',
    workboxPluginMode: 'GenerateSW',
    manifestPath: 'manifest.json',
    iconPaths: {
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      favicon16: 'img/icons/favicon-16x16.png',
      favicon32: 'img/icons/favicon-32x32.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
  },
};
