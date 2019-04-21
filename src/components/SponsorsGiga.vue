<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Giga
    </h3>
    <div class="row sponsors__giga-items">
      <div class="col-xs-6 sponsors__item">
        <a href="http://www.citipa.org/">
          <img src="../assets/img/citipa_logo.png" class="sponsors__giga-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-6 sponsors__item">
        <a href="http://www.aikaventures.com/">
          <img src="../assets/img/aika.png" class="sponsors__giga-img sponsors__img">
        </a>
      </div>
    </div>
    <div class="row sponsors__giga-items">
      <div class="col-xs-6 sponsors__item">
        <a href="https://www.alisys.net/es/">
          <img src="../assets/img/alisys-logo.jpg" class="sponsors__giga-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-6 sponsors__item">
        <a href="https://www.accenture.com/es-es/new-applied-now">
          <img src="../assets/img/accenture.png" class="sponsors__giga-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-giga'
}
</script>

<style lang="scss" scopped>
@import "../styles/_vars.scss";
.sponsors__giga-items {
  display: flex;
  align-items: center;
}
.sponsors__giga-img {
    padding: 5px;
    max-width: 150px;
    width: 100%;
    @media (min-width: map-get($grid-breakpoints, md)){
      max-width: 240px;
    }
  }

</style>
