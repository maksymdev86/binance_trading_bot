const Binance = require('node-binance-api');
const binance = new Binance().options({
  APIKEY: process.env.API_KEY_TEST,
  APISECRET: process.env.API_SECRET_TEST,
  verbose: true,
  urls: {
    base: 'https://testnet.binance.vision/api/',
    combineStream: 'wss://testnet.binance.vision/stream?streams=',
    stream: 'wss://testnet.binance.vision/ws/',
  },
  //   APIKEY: process.env.API_KEY_MAIN,
  //   APISECRET: process.env.API_SECRET_MAIN,
});

module.exports = binance;