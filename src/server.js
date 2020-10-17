const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();

server
  .use(express.static('public'))
  .use(express.urlencoded({ extended: true }))

  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/create-orphanage', pages.createOrphanage)
  .get('/orphanages', pages.orphanages)
  .post('/save-orphanage', pages.saveOrphanage)
  .post('/delete-orphanage', pages.deleteOrphanage);

server.listen(3000);
