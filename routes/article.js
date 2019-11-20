const Article = require("../models/article");

import { responseClient } from "../util/util";

exports.addArticle = (req, res) => {
  const {
    title,
    author,
    keyword,
    content,
    describe,
    cover_link,
    tags,
    category,
    state,
    type,
    origin
  } = req.body;
  let tempArticle = null;
  tempArticle = new Article({
    title,
    author,
    keyword,
    content,
    describe,
    tags,
    category,
    state,
    type,
    origin,
    cover_link: cover_link || ""
  });
  tempArticle
    .save()
    .then(data => {
      responseClient(res, 200, 0, "保存成功", data);
    })
    .catch(err => {
      responseClient(err);
    });
};

// 文章列表
exports.getArticleList = (req, res) => {
  let pageNum = parseInt(req.query.pageNum) || 1;
  let pageSize = parseInt(req.query.pageSize) || 10;
  let fields = {
    title: 1,
    author: 1,
    keyword: 1,
    describe: 1,
    link_url: 1,
    tags: 1,
    category: 1,
    state: 1,
    type: 1,
    origin: 1,
    create_time: 1,
    update_time: 1
  };
  let skip = pageNum - 1 < 0 ? 0 : (pageNum - 1) * pageSize;
  let options = {
    skip,
    limit: pageSize
  };
  Article.countDocuments({}, (err, count) => {
    let responseData = {
      count: 0,
      list: []
    };
    Article.find({}, fields, options)
      .then(data => {
        responseData.count = count;
        responseData.list = data;
        responseClient(res, 200, 0, "成功", responseData);
      })
      .catch(err => {
        responseClient(err);
      });
  }).exec((err, doc) => {});
};
