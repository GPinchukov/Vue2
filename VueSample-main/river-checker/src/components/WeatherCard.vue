<template>

      <b-container fluid class="bv-example-row">
      <b-row>
        <b-col md="6" offset-md="3">
          <b-card
            border-variant="Weather"
            header="Weather"
            header-bg-variant="primary"
            header-text-variant="white"
          >
        <b-card-text>
      <div> облачность: {{clouds}} %  <img :src= "`http://openweathermap.org/img/wn/${icon}@2x.png`" alt="pict" width="40" height="40"> </div>
      <div> температура: {{temp}} °C </div>
      <div> страна:  <img class="im" :src="`https://www.countryflags.io/${country}/flat/24.png`">  </div>
        </b-card-text>
      </b-card>
        </b-col>
      </b-row>
      </b-container>

</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    country: null,
    timezone: null,
    clouds: null,
    icon:null,
    temp: null,
    daily: null

  }
}
</script>

<style scoped>
  .im{

   }
  .card{
    font-size: 30px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;


  }
  :hover.card {
    transform: scale(1.1, 1.1);
  }
</style>
