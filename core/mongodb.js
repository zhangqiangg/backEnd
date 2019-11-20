const consola = require("consola");
const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const CONFIG = require("../app.config.js");

mongoose.set("useFindAndModify", false);

mongoose.Promise = global.Promise;

exports.mongoose = mongoose;

exports.connect = () => {
  // 连接数据库
  mongoose.connect(CONFIG.MONGODB.uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    promiseLibrary: global.Promise
  });

  // 连接错误
  mongoose.connection.on("error", error => {
    consola.warn("数据库连接失败");
  });
  // 连接成功
  mongoose.connection.once("open", () => {
    consola.warn("数据库连接成功");
  });

  // 自增id初始化
  autoIncrement.initialize(mongoose.connection);

  // 返回实例
  return mongoose;
};
