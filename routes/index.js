const article = require('./article');

module.exports = app => {
  app.post('/addArticle', article.addArticle);
  app.post('/updateArticle', article.updateArticle);
  app.get('/getArticleList', article.getArticleList);
  app.get('/deleteArticle', article.deleteArticle);
}