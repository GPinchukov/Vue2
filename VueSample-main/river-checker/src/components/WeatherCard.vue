<template>
    <div class="card">
      <div>{{country}}{{name}}{{temp}}</div>
      <div>{{sunrise}} {{sunset}}</div>
    </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    country: null,
    name: null,
    sunrise: null,
    sunset: null,
    temp: null
  }
}
</script>

<style scoped>
  .card{
    border-radius: 15px;
    background: rgba(200,200,200,0.5);
    color: #060d98;
    font-weight: bold;
    width: 250px;
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
