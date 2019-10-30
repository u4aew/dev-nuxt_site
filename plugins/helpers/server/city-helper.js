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
      const city = $req.headers.host.split('.')[0];
      if (city.length > 0) {
        if (typeof CITIES.find(item => item.code === city) !== 'undefined') {
          return CITIES.find(item => item.code === city)
        } else {
          return CITIES[0]
        }
      }
      return CITIES[0]
    }
  }
}

export default CityHelper
