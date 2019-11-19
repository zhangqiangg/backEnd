const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, validate: /\S+/ },
  desc: { type: String, default: "" },
  // 创建时间
  create_time: { type: Date, default: Date.now },
  // 更新时间
  update_time: { type: Date, default: Date.now }
});

// 自增id
categorySchema.plugin(autoIncrement.plugin, {
  model: "Category",
  field: "id",
  startAt: 1,
  incrementBy: 1
});

module.exports = mongoose.model("Category", categorySchema);
