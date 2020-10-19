<template>
    <div class="card">
      <div> облачность: {{clouds}} % </div>
      <div> температура: {{temp}} % </div>
    </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    timezone: null,
    clouds: null,
    temp: null,
    daily: null
  }
}
</script>

<style scoped>
  .card{
    border-radius: 15px;
    background: #6284FF;
    color: white;
    font-weight: bold;
    font-size: 30px;
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
