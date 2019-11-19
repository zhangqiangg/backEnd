const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, validate: /\S+/ },
  desc: { type: String, default: "" },
  // 创建时间
  create_time: { type: Date, default: Date.now },
  // 更新时间
  update_time: { type: Date, default: Date.now }
});

// 自增id
tagSchema.plugin(autoIncrement.plugin, {
  model: "Tag",
  field: "id",
  startAt: 1,
  incrementBy: 1
});

module.exports = mongoose.model("Tag", tagSchema);
