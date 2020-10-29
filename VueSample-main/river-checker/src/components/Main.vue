<template>
  <div>
    <h1> {{weather.timezone}} {{weather.clouds}}  <img src= "../assets/img/russia.svg" alt="pict" width="25" height="25"> </h1>
    <Weather
            :clouds="weather.clouds"
            :temp="weather.temp">
    </Weather>

    <div id="app">
      <h2>Коты</h2>
      <div v-for="(cat, n) in cats">
        <p>
          <span class="cat">{{ cat }}</span>
          <button @click="removeCat(n)">Удалить</button>
        </p>
      </div>

      <p>
        <input v-model="newCat">
        <button @click="addCat">Добавить кота</button>
      </p>
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
      cats: [],
      newCat: null,
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
  mounted() {
    if (localStorage.getItem('cats')) {
      try {
        this.cats = JSON.parse(localStorage.getItem('cats'));
      } catch(e) {
        localStorage.removeItem('cats');
      }
    }
  },


  methods: {
    addCat() {
      // убедиться, что было что-либо введено
      if (!this.newCat) {
        return;
      }
    this.cats.push(this.newCat);
    this.newCat = '';
    this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x, 1);
      this.saveCats();
    },
    saveCats() {
      const parsed = JSON.stringify(this.cats);
      localStorage.setItem('cats', parsed);
    },
    
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
