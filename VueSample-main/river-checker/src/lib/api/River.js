import axios from 'axios'
export default class Reg {
  constructor () {
    this._http = axios
    this._apiUrl = 'http://api.openweathermap.org'
  }
  getData (page = 2) {
    let route = `${this._apiUrl}/data/2.5/weather`
    return this._http.get(`${route}`, {
      params: {
        q: 'Minsk',
        APPID: '5cadf91889e32936b4b05cba97ec53f2'
      }
    })
  }
}
