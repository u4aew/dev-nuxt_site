const CITIES = [
  {
    code: 'barnaul',
    name: 'Барнаул'
  },
  {
    code: 'moscow',
    name: 'Москва'
  }
];
const MASK = 'http://';

class CityHelper {
  static getCity($req, $env) {
    if (process.server) {
      if ($req.headers.host === $env.baseUrl.replace(MASK, '')) {
        return CITIES[0]
      }

      const city = $req.headers.host.split('.')[0];
      if (city.length > 0) {
        return CITIES.find(item => item.code === city)
      } else {
        return null
      }
    }
  }
}

export default CityHelper
