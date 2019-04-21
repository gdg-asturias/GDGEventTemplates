<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Mega
    </h3>
    <div class="row">
      <div class="col-xs-4 sponsors__item">    
        <a href="https://impulsa.gijon.es/">
          <img src="../assets/img/impulsa.png" class="sponsors__mega-img sponsors__img">
        </a>         
      </div>
      <div class="col-xs-4 sponsors__item">    
        <a href="https://www.codesai.com/">
          <img src="../assets/img/CODESAI.jpg" class="sponsors__mega-img sponsors__img">
        </a>         
      </div>
      <div class="col-xs-4 sponsors__item">    
        <a href="https://www.ruralvia.com/cms/estatico/rvia/grupo/ruralvia/es/particulares/index.html">
          <img src="../assets/img/caja-rural.jpg" class="sponsors__mega-img sponsors__img">
        </a>         
      </div>
    </div>
  </div>   
</template>

<script>

export default {
  name: 'sponsors-mega'
}
</script>

<style lang="scss" scopped>
@import "../styles/_vars.scss";

.sponsors__mega-img {
  padding: 5px;
  max-height: 50px;
  @media (min-width: map-get($grid-breakpoints, md)){
    max-height: 95px;
  }
}

</style>
