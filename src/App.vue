<template>
  <div id="app">
    <div v-if="discount" class="easter-egg">
      🎉🎉  Código de descuento: HUEVODEPASCUA  🎉🎉
    </div>
    <web-header></web-header>
    <main>
      <what-is></what-is>
      <organizers></organizers>
      <schedule></schedule>
      <speakers></speakers>
      <sponsors></sponsors>
      <travel></travel>
      <faq></faq>
      <!-- <buy-tickets></buy-tickets> -->
      <where-is></where-is>
    </main>
    <web-footer v-on:show-discount="showDiscount()"></web-footer>
  </div>
</template>

<script>
import './assets/css/bootstrap.min.css'
import './assets/css/icons.css'

export default {
  name: 'app',
  components: {
    'what-is': (resolve) => require(['./components/WhatIsWTM'], resolve),
    'travel': (resolve) => require(['./components/Travel'], resolve),
    'speakers': (resolve) => require(['./components/Speakers'], resolve),
    'organizers': (resolve) => require(['./components/Organizers'], resolve),
    'schedule': (resolve) => require(['./components/Schedule'], resolve),
    'sponsors': (resolve) => require(['./components/Sponsors'], resolve),
    'faq': (resolve) => require(['./components/Faq'], resolve),
    'buy-tickets': (resolve) => require(['./components/BuyTickets'], resolve),
    'where-is': (resolve) => require(['./components/WhereIs'], resolve),
    'web-header': (resolve) => require(['./components/Header'], resolve),
    'web-footer': (resolve) => require(['./components/Footer'], resolve)
  },
  data () {
    return {
      discount: false
    }
  },
  methods: {
    showDiscount () {
      this.discount = true
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');
@import "./styles/_vars.scss";
#app{
  font-family: 'Montserrat', sans-serif;
  color: #002D63;
}

.easter-egg {
  background-color: #002D63;
  text-align: center;
  color: white;
  font-size: 30px;
}

.section__title {
  font-size: 40px;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0 0 30px 0;
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 50px;
  }
  @media (min-width: map-get($grid-breakpoints, md)){
    font-size: 60px;
  }
}

.section__title--white {
  @extend .section__title;
  color: white;
}

.section__paragraph {
  font-size: 16px;
  line-height: 25px;
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 18px;
    line-height: 30px;
  }
}

.section__rrss-item {
  color: #4D4D4D;
  margin: 10px;
  font-size: 20px;
  &:hover {
    color: #4385F5;
    text-decoration: none;
  }
}

.section__rrss-item--white {
  @extend .section__rrss-item;
    color: white;
}

</style>
