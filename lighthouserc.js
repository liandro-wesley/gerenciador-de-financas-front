module.exports = {
  ci: {
    collect: {
      disableStorageReset: true,
      // headful: true, // descomente para ver o chrome aberto (util para debug)
      settings: {
        chromeFlags: '--no-sandbox',
      },
      url: [
        'https://www.contabilizei.com.br/',
      ],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
