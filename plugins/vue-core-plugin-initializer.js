class TestClass {
  constructor () {
    this.test = 'asdadasd'
  }

  getTestet () {
    return this.test
  }
}
export default ({ app }, inject) => {
  // В данном случае мы добавили плагин в наше приложение и это
  // даст возможность обратится к нему из middleware и на страницах в `asyncData`/`fetch`
  inject('i18n', new TestClass())
}
