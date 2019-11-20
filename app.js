const express = require("express");

// import 等语法要用到 babel 支持
require("babel-register");
const app = express();

app.use(express.json());
//将路由文件引入
const route = require("./routes/index");

//初始化所有路由
route(app);

const mongodb = require("./core/mongodb");

mongodb.connect();

module.exports = app;
