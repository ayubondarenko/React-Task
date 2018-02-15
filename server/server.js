/**
 * Created by alexander on 23.11.17.
 */
const jsonServer = require('json-server');
// import {jsonServer} from 'json-server';


const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const path = require('path');
const fullPath = path.join(__dirname, 'db.json');

// const router = jsonServer.router(path.join(__dirname, 'db.json'));
const router = jsonServer.router(fullPath);
server.use(middlewares);
server.use(router);

server.listen(3004, () => {
    console.log('JSON Server загружен с данными из:', fullPath);
});