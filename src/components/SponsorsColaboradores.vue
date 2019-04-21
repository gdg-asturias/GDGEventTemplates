<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Colaboradores
    </h3>
    <div class="row">
      <div class="col-xs-4 sponsors__item">
        <a href="http://www.epigijon.uniovi.es/">
          <img src="../assets/img/epi_logo.jpg" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://congresos.gijon.es/">
          <img src="../assets/img/gijon_convention_bureau_logo.jpg" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://www.ajeasturias.com/">
          <img src="../assets/img/AJE_logo.png" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://www.uniovi.es/">
          <img src="../assets/img/uniovi.jpg" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://www.clustertic.net/">
          <img src="../assets/img/clusterTIC_logo.png" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://www.innovasturias.org/">
          <img src="../assets/img/innovasturias_logo.png" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-offset-4 col-xs-4 sponsors__item">
        <a href="https://www.pccomponentes.com/">
          <img src="../assets/img/pc_componentes.jpg" class="sponsors__colaboradores-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-colaboradores'
}
</script>

<style lang="scss" scopped>

  @import "../styles/_vars.scss";

  .sponsors__colaboradores-img {
    padding: 5px;
    max-height: 50px;
    @media (min-width: map-get($grid-breakpoints, md)){
      max-height: 100px;
    }
  }

</style>
