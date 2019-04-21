<template>
  <div class="container buy-tickets" id="buy">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          Hazte con tu entrada
        </h2>
      </div>
      <div class="col-xs-12">
        <iframe class="buy-tickets--iframe" src='https://entradium.com/es/entradas/google-devfest-asturias.widget' style='border:none;'></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyTickets'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "styles/_vars.scss";

.buy-tickets {
  padding-top: 60px;
}

.buy-tickets--iframe {
  width: 100%;
  height: 650px;
  @media (min-width: map-get($grid-breakpoints, sm)){
    height: 550px;
  }
}

</style>
