<template>
  <div>
    <h1> {{weather.name}}  </h1>
    <div class="cnt"> </div>
    <Weather
            :clouds="weather.clouds"
            :temp="Math.ceil(weather.temp - 273)"
            :country="weather.country"
            :icon="weather.icon ">
    </Weather>

    <div id="app">

        <div>

        </div>
      <b-col md="6" offset-md="3">
        <div class="mt-3">
            <b-card bg-variant="warning" text-variant="white" header="Weather" class="text-center">
              <b-card-text>
                <Weather
                :clouds="weather.clouds"
                :temp="Math.ceil(weather.temp - 273)"
                :country="weather.country"
                :icon="weather.icon ">
                </Weather>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </b-col>
      </div>
      <p>
        Город <input v-model="city">
      <p/>
      <b-button @click="getData" pill variant="info"> Сохранить </b-button>
    </div>

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
      name: null,
      city: null,
      regApi: new Reg(),
      personMass: [],
      page: 1,
      totalPages: 1,
      weather: {
        icon: null,
        timezone: null,
        clouds: null,
        temp: null,
        day: null,
        daily: null,
        country: null
      }
    }
  },

  methods: {
    getData: function () {

      this.regApi.getData(this.city).then(data => {
        console.log(data)
        //console.log(data.data.daily[0].clouds)
        this.weather.name = data.data.name
        this.weather.clouds = data.data.clouds.all
        this.weather.temp = data.data.main.temp
        this.weather.icon = data.data.weather[0].icon
        this.weather.timezone = data.data.timezone
        this.weather.country = data.data.sys.country
        // this.weather.sunrise = data.data.city.sunrise
        // this.weather.sunset = data.data.city.sunset
        // this.weather.temp = data.data.temp
      })
    }
  },
  created () {
    this.getData(this.city)
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    page () {
      this.getData()
    }
  }
}

</script>

<style scoped>

h1{
  tab-size: 60px;
  text-align: center;
  padding-bottom: 5px;
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
