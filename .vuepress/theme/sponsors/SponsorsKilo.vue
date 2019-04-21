<template>
  <div class="col-xs-12" v-if="sponsors && sponsors.length">
    <h3 class="sponsors__subtitle">
      {{text}}
    </h3>
    <div class="sponsors-container">
      <div v-for="(kilo, index) in sponsors" :key="index" class="sponsors__item">
        <a :href="kilo.url" target="_blank" >
          <img v-lazy="kilo.image" class="sponsors__kilo-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-kilo',
  computed: {
    text () {
      return this.$page.frontmatter.sponsorsKiloText || 'Kilo'
    },
    sponsors () {
      return this.$page.frontmatter.sponsorsKilo
    }
  }
}
</script>

<style lang="scss" scopped>
@import "../styles/_vars.scss";

.sponsors__kilo-img {
  padding: 5px;
  width: 100px;
  @media (min-width: map-get($grid-breakpoints, md)){
    width: 150px;
  }
}

</style>
