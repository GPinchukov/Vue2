<template>
  <div>
    <h1> {{weather.timezone}} {{weather.clouds}}  <img src= "../assets/img/russia.svg" alt="pict" width="25" height="25"> </h1>
    <Weather
            :clouds="weather.clouds"
            :temp="weather.temp">
    </Weather>

  </div>
</template>

<script>
import Reg from '../lib/api/River'
import Weather from './WeatherCard'
export default {
  name: 'Main',
  components: {
    Weather
  },
  data: function () {
    return {
      regApi: new Reg(),
      personMass: [],
      page: 1,
      totalPages: 1,
      weather: {
        timezone: null,
        clouds: null,
        temp: null,
        day: null,
        daily: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(this.page).then(data => {
        // console.log(data)
        console.log(data.data.daily[0].clouds)
        this.weather.timezone = data.data.timezone
        this.weather.clouds = data.data.daily[0].clouds
        this.weather.temp = data.data.daily[0].temp.day
        // this.weather.sunrise = data.data.city.sunrise
        // this.weather.sunset = data.data.city.sunset
        // this.weather.temp = data.data.temp
      })
    }
  },
  created () {
    this.getData()
  },
  watch: {
    page () {
      this.getData()
    }
  }
}
</script>

<style scoped>

h1{
  color: #d2511e;
}
h3{
  color: coral;
}
span{
  color: #154088;
  font-weight: bold;
  border-bottom: 1px dashed;
}
a:link {
  color: #497DDD;
  font-weight: bold;
  border-bottom: 1px dashed;
}
a:visited {
  color: #2656e5;
}
a:hover {
  color: #154055;
  border-bottom: .07em solid;
}
a:active {
  color: #2656e5;
  border-bottom: 1px dashed;
}
</style>
