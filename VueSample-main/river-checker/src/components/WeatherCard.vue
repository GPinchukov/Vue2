<template>

  <b-container fluid class="bv-example-row" >
    <b-row  alighn-h="center" >
      <b-col></b-col>
      <b-col cols="8">
        <b-card bg-variant="dark" :header="`${name}`" text-variant="white" class="text-center">
          <b-card-text>
            <b-container class="bv-example-row">
              <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="4">
                <b-col>Now</b-col>
                <b-col>{{date1}}</b-col>
                <b-col>{{date2}}</b-col>
                <b-col>{{date3}}</b-col>
              </b-row>
            </b-container>
            <b-container class="bv-example-row">
              <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="4" alighn-h="center" >
                <b-col><img :src= "`http://openweathermap.org/img/wn/${icon0}@2x.png`" alt="pict" width="40" height="40"></b-col>
                <b-col><img :src= "`http://openweathermap.org/img/wn/${icon1}@2x.png`" alt="pict" width="40" height="40"></b-col>
                <b-col><img :src= "`http://openweathermap.org/img/wn/${icon2}@2x.png`" alt="pict" width="40" height="40"></b-col>
                <b-col><img :src= "`http://openweathermap.org/img/wn/${icon3}@2x.png`" alt="pict" width="40" height="40"></b-col>
              </b-row>
            </b-container>
            <b-container class="bv-example-row">
              <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="4">
                <b-col> {{temp0}}°</b-col>
                <b-col> {{temp1}}°</b-col>
                <b-col> {{temp2}}°</b-col>
                <b-col> {{temp3}}°</b-col>
              </b-row>
              <hr class="hr-warning" />
              <b-row>
                <b-col>{{date8}}</b-col>
                <b-col><img :src= "`http://openweathermap.org/img/wn/${icon8}@2x.png`" alt="pict" width="40" height="40"></b-col>
                <b-col>{{temp8}}°</b-col>
              </b-row>
              <b-row>
                <b-col>{{date16}}</b-col>
                <b-col><img :src= "`http://openweathermap.org/img/wn/${icon16}@2x.png`" alt="pict" width="40" height="40"></b-col>
                <b-col>{{temp16}}°</b-col>
              </b-row>
              <b-row>
                <b-col>{{date24}}</b-col>
                <b-col><img :src= "`http://openweathermap.org/img/wn/${icon24}@2x.png`" alt="pict" width="40" height="40"></b-col>
                <b-col>{{temp24}}°</b-col>
              </b-row>
            </b-container>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>

</template>

<script>
export default {
  name: 'WeatherCard',
  props: {
    name: null,
    country: null,
    timezone: null,
    clouds: null,
    icon0:null,
    icon1: null,
    icon2: null,
    icon3: null,
    icon4: null,
    icon5: null,
    icon8: null,
    icon16: null,
    icon24: null,
    temp0:null,
    temp1:null,
    temp2:null,
    temp3:null,
    temp4:null,
    temp5:null,
    temp8:null,
    temp16:null,
    temp24:null,
    date0: null,
    date1: null,
    date2: null,
    date3: null,
    date4: null,
    date5: null,
    date6: null,
    date8: null,
    date16: null,
    date24: null
  }
}
</script>

<style scoped>
.im{
}
.card{
  font-size: 40px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
