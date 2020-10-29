import axios from 'axios'
export default class Reg2 {
  constructor () {
    this._http = axios
    this._apiUrl = 'http://api.openweathermap.org'
  }
  getData (page = 2) {
    let route = `${this._apiUrl}/data/2.5/onecall`
    return this._http.get(`${route}`, {
      params: {
        lat: '53.9000000',
        lon: '27.5666700',
        exclude: 'current',
        id: 524901,
        APPID: '5cadf91889e32936b4b05cba97ec53f2'
      }
    })
  }
}
