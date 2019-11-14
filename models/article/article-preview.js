class ArticlePreview {
 constructor ({date, title, desc, slug}) {
    this.date = date;
    this.title = title;
    this.desc = desc;
    this.slug = slug;
 }
 getDate () {
   return this.date
 }
 getTitle () {
   return this.title
 }
 getDesc () {
   return this.desc
 }
 getSlug () {
   return this.slug
 }
}

export default ArticlePreview
