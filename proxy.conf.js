const PROXY_CONFIG = [
  {
    context: [
      '/us/**'
    ],
    target: 'https://itunes.apple.com/',
    secure: false,
    changeOrigin: true
  },
  {
    context: [
      '/lookup/**'
    ],
    target: 'https://allorigins.win',
    secure: false,
    changeOrigin: true
  },
];

module.exports = PROXY_CONFIG;
