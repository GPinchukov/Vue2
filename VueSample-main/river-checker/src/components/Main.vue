<template>
  <div>
    <div class="cnt"> </div>
    <Weather
      :clouds="weather.clouds"
      :temp0="Math.ceil(weather.temp0 - 273)"
      :temp1="Math.ceil(weather.temp1 - 273)"
      :temp2="Math.ceil(weather.temp2 - 273)"
      :temp3="Math.ceil(weather.temp3 - 273)"
      :temp4="Math.ceil(weather.temp4 - 273)"
      :temp5="Math.ceil(weather.temp5 - 273)"
      :temp8="Math.ceil(weather.temp8 - 273)"
      :temp16="Math.ceil(weather.temp16 - 273)"
      :temp24="Math.ceil(weather.temp24 - 273)"
      :date0="(weather.date0).substring(10,13)"
      :date1="(weather.date1).substring(10,13)"
      :date2="(weather.date2).substring(10,13)"
      :date3="(weather.date3).substring(10,13)"
      :date4="(weather.date4).substring(10,13)"
      :date5="(weather.date5).substring(10,13)"
      :date8="(weather.date8).substring(5,10)"
      :date16="(weather.date16).substring(5,10)"
      :date24="(weather.date24).substring(5,10)"
      :country="weather.country"
      :icon0="weather.icon0 "
      :icon1="weather.icon1 "
      :icon2="weather.icon2 "
      :icon3="weather.icon3 "
      :icon4="weather.icon4 "
      :icon5="weather.icon5 "
      :icon8="weather.icon8 "
      :icon16="weather.icon16 "
      :icon24="weather.icon24 "
      :name="weather.name">
    </Weather>

    <div id="app">
    </div>
    <b-container class="bv-example-row">
      <b-row alighn-h="center">

        <b-col md="6" offset-md="4">
          <b-input-group>

            <input v-model="city">

            <b-input-group-append>
              <b-button  @click="getData"  > Save </b-button>

            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>
    </b-container>
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
        icon0: null,
        icon1: null,
        icon2: null,
        icon3: null,
        icon4: null,
        icon5: null,
        icon8: null,
        icon16: null,
        icon24: null,
        timezone: null,
        clouds: null,
        temp0: null,
        temp1: null,
        temp2: null,
        temp3: null,
        temp4: null,
        temp5: null,
        temp8: null,
        temp16: null,
        temp24: null,
        date0: null,
        date1: null,
        date2: null,
        date3: null,
        date4: null,
        date5: null,
        date8: null,
        date16: null,
        date24: null,
        daily: null,
        country: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(this.city).then(data => {
        console.log(data)
        console.log(this.weather.name = data.data.city.name)
        this.weather.name = data.data.city.name
        //this.weather.clouds = data.data.clouds.all
        this.weather.temp0 = data.data.list[0].main.temp
        this.weather.temp1 = data.data.list[1].main.temp
        this.weather.temp2 = data.data.list[2].main.temp
        this.weather.temp3 = data.data.list[3].main.temp
        this.weather.temp4 = data.data.list[4].main.temp
        this.weather.temp5 = data.data.list[5].main.temp
        this.weather.temp8 = data.data.list[8].main.temp
        this.weather.temp16 = data.data.list[16].main.temp
        this.weather.temp24 = data.data.list[24].main.temp
        this.weather.icon0 = data.data.list[0].weather[0].icon
        this.weather.icon1 = data.data.list[1].weather[0].icon
        this.weather.icon2 = data.data.list[2].weather[0].icon
        this.weather.icon3 = data.data.list[3].weather[0].icon
        this.weather.icon4 = data.data.list[4].weather[0].icon
        this.weather.icon5 = data.data.list[5].weather[0].icon
        this.weather.icon8 = data.data.list[8].weather[0].icon
        this.weather.icon16 = data.data.list[16].weather[0].icon
        this.weather.icon24 = data.data.list[24].weather[0].icon
        this.weather.date0 = data.data.list[0].dt_txt
        this.weather.date1 = data.data.list[1].dt_txt
        this.weather.date2 = data.data.list[2].dt_txt
        this.weather.date3 = data.data.list[3].dt_txt
        this.weather.date4 = data.data.list[4].dt_txt
        this.weather.date5 = data.data.list[5].dt_txt
        this.weather.date8 = data.data.list[8].dt_txt
        this.weather.date16 = data.data.list[16].dt_txt
        this.weather.date24 = data.data.list[24].dt_txt
        // this.weather.country = data.data.sys.country
        // this.weather.sunrise = data.data.city.sunrise
        // this.weather.sunset = data.data.city.sunset
        // this.weather.temp = data.data.temp
      })
    }
  },
  created () {
    this.city = 'Gomel'
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
