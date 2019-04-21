<template>
  <div class="col-xs-12" v-if="sponsors && sponsors.length">
    <h3 class="sponsors__subtitle">
      {{text}}
    </h3>
    <div class="row">
      <div
        v-for="(comunidad, index) in sponsors" 
        :key="index" 
        class="col-xs-4 sponsors__item"
        :class="{[`col-xs-offset-2`]: index % 3 == 0 && (sponsors.length - index) < 3}">
        <a :href="comunidad.url" target="_blank" >
          <img v-lazy="comunidad.image" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-comunidades',
  computed: {
    text () {
      return this.$page.frontmatter.sponsorsComunidadesText || 'Comunidades'
    },
    sponsors () {
      return this.$page.frontmatter.sponsorsComunidades
    }
  }
}
</script>

<style lang="scss" scopped>

  @import "../styles/_vars.scss";

.sponsors__comunidades-img {
    padding: 5px;
    max-height: 70px;
    max-width: 100%;
    @media (min-width: map-get($grid-breakpoints, md)){
      max-height: 100px;
      max-width: 100%;
    }
  }
</style>
