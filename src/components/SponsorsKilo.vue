<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Kilo
    </h3>
    <div class="row">
      <div class="col-xs-4 sponsors__item">
        <a href="http://orejasabogados.com/">
          <img src="../assets/img/oa_logo.jpg" class="sponsors__kilo-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://sngular.team/">
          <img src="../assets/img/sngular-logo.png" class="sponsors__kilo-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://simbiosys.es/">
          <img src="../assets/img/logo-simbiosys.png" class="sponsors__kilo-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-offset-4 col-xs-4 sponsors__item">
        <a href="https://the-cocktail.com/">
          <img src="../assets/img/the-cocktail.png" class="sponsors__kilo-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-kilo'
}
</script>

<style lang="scss" scopped>
@import "../styles/_vars.scss";

.sponsors__kilo-img {
  padding: 5px;
  max-width: 150px;
  width: 100%;
  @media (min-width: map-get($grid-breakpoints, md)){
    max-width: 200px;
  }
}

</style>
