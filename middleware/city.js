export default function ({ store, redirect,app }) {
  if (!app.$cookies.get('init')) {
    app.$cookies.set('init', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    });
    return redirect(`${store.state.cityInfo.city.toLowerCase()}.${process.env.BASE_URL.replace('http://', '')}`)
  }
}
