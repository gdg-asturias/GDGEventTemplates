<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Tera
    </h3>
    <div class="row">
      <div class="col-xs-12 sponsors__item">
        <a href="https://www.capgemini.com/es-es/">
          <img src="../assets/img/capgemini_logo.jpg" class="sponsors__img sponsors__tera-img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-tera'
}
</script>

<style lang="scss" scopped>
@import "../styles/_vars.scss";

.sponsors__tera-img {
  padding: 5px;
  max-height: 140px;
  max-width: 100%;
  @media (min-width: map-get($grid-breakpoints, md)){
    max-width: 450px;
    max-height: 200px;
  }
}

</style>
