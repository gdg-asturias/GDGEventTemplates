<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Media Partners
    </h3>
    <div class="row">
      <div class="col-xs-12 sponsors__item">
        <a href="http://faseextra.com/">
          <img src="../assets/img/fase-logo.png" class="sponsors__media-partner-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-media-partner'
}
</script>

<style lang="scss" scopped>

  @import "../styles/_vars.scss";

  .sponsors__media-partner-img {
    padding: 5px;
    max-height: 100px;
    @media (min-width: map-get($grid-breakpoints, md)){
      max-height: 180px;
    }
  }

</style>
