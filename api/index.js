const express = require('express');
const { serveNcmApi } = require('netease-cloud-music-api-alger/server');

const origListen = express.application.listen;
express.application.listen = function() {
  return this;
};

let cached = null;

async function getApp() {
  if (!cached) {
    cached = await serveNcmApi({ port: 3000 });
  }
  return cached;
}

module.exports = async (req, res) => {
  const app = await getApp();
  app(req, res);
};
