import ArticlePreview from "@/models/article/article-preview";

class ArticlePreviewList {
  constructor(articles) {
    this.articles = [];
    articles.forEach((article) => {
      this.articles.push(new ArticlePreview(article))
    })
  }
  getArticles () {
    return this.articles
  }
}

export default ArticlePreviewList
