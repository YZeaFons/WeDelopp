const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes");
const session = require('express-session')
const MongoStore = require("connect-mongo");
require("dotenv").config();

const { URLMONGODB, SESSION_SECRET } = process.env;

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type'); 
   res.header('Access-Control-Allow-Credentials', true); // Habilitar credenciales
   next();
});

server.use(session({
    store: MongoStore.create({
        mongoUrl: URLMONGODB,
        ttl: 120
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: false
}))

server.use(router);



module.exports = server; 