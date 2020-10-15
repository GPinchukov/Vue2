<template>
  <div>
    <h1>{{weather.country}}</h1>
    <Weather
            :country="weather.country"
            :name="weather.name"
            :sunrise="weather.sunrise"
            :sunset="weather.sunset"
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
  data () {
    return {
      regApi: new Reg(),
      personMass: [],
      page: 1,
      totalPages: 1,
      weather: {
        country: null,
        name: null,
        sunrise: null,
        sunset: null,
        temp: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(this.page).then(data => {
        console.log(data)
        this.weather.country = data.data.city.country
        this.weather.name = data.data.city.name
        this.weather.sunrise = data.data.city.sunrise
        this.weather.sunset = data.data.city.sunset
        this.weather.temp = data.data.temp
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
  color: #154088;
  border-bottom: .07em solid;
}
a:active {
  color: #2656e5;
  border-bottom: 1px dashed;
}
</style>
