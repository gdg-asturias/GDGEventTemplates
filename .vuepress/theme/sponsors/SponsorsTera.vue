<template>
  <div class="col-xs-12" v-if="sponsors && sponsors.length">
    <h3 class="sponsors__subtitle">
      Tera
    </h3>
    <div class="row">
      <div v-for="(tera, index) in sponsors" class="col-xs-12 sponsors__item">
        <a :href="tera.url" target="_blank" >
          <img v-lazy="tera.image" class="sponsors__img sponsors__tera-img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-tera',
  computed: {
    text () {
      return this.$page.frontmatter.sponsorsTeraText || 'Tera'
    },
    sponsors () {
      return this.$page.frontmatter.sponsorsTera
    }
  }
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
