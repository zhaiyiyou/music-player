const express = require('express');
const path = require('path');
const { serveNcmApi } = require('netease-cloud-music-api-alger/server');

async function start() {
  const app = await serveNcmApi({ port: process.env.PORT || 8080 });

  app.use(express.static(__dirname));

  console.log('Server ready');
}

start();
