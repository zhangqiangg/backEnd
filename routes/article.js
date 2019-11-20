const Article = require("../models/article");

import { responseClient } from '../util/util';

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
    cover_link: cover_link || ''
  });
  tempArticle.save().then(data => {
    console.log(data)
    responseClient(res, 200, 0, '保存成功', data)
  }).catch(err => {
    console.log(err)
    responseClient(res);
  })
};
