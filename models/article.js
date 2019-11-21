const { mongoose } = require("../core/mongodb.js");
const autoIncrement = require("mongoose-auto-increment");

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true, validate: /\S+/ },
  author: { type: String, required: true, validate: /\S+/ },
  keyword: { type: String, default: "" },
  describe: { type: String, default: "" },
  // 封面链接
  cover_link: { type: String, default: "" },
  // 标签
  tags: { type: mongoose.Schema.Types.ObjectId, ref: "Tag", required: false },
  // 分类
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: false
  },
  content: { type: String, required: true, validate: /\S+/ },
  // 文章类型 => 1: 普通文章，2: 简历, 3: 管理员介绍
  type: { type: Number, default: 1 },
  // 文章转载状态 => 1: 原创，2: 转载, 3: 混合
  origin: { type: Number, default: 1 },
  // 文章发布状态 => 0 草稿，1 已发布
  state: { type: Number, default: 1 },
  // 创建时间
  create_time: { type: Date, default: Date.now },
  // 更新时间
  update_time: { type: Date, default: Date.now }
});

// 自增id
articleSchema.plugin(autoIncrement.plugin, {
  model: "Article",
  field: "id",
  startAt: 1,
  incrementBy: 1
});

module.exports = mongoose.model("Article", articleSchema);
