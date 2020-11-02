<template>
    <div class="card">
      <div> облачность: {{clouds}} %  <img :src= "`http://openweathermap.org/img/wn/${icon}@2x.png`" alt="pict" width="40" height="40"> </div>
      <div> температура: {{temp}} °C </div>
      <div> страна:  <img class="im" :src="`https://www.countryflags.io/${country}/flat/24.png`">  </div>
    </div>
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
    border-radius: 15px;
    background: #6284FF;
    color: white;
    font-weight: bold;
    font-size: 25px;
    width: 320px;
    margin: 20px;
    height: 170px;
    padding: 5px;
    display: inline-block;
    transition: .3s;
  }
  :hover.card {
    transform: scale(1.1, 1.1);
  }
</style>
