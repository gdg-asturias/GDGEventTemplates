<template>
  <div class="col-xs-12" v-if="sponsors && sponsors.length">
    <h3 class="sponsors__subtitle">
      {{ text }}
    </h3>
    <div class="sponsors-container">
      <ClientOnly>
        <div v-for="(colaborador, index) in sponsors" :key="index" class="sponsors__item">
          <a :href="colaborador.url" target="_blank" >
            <img v-lazy="colaborador.image" class="sponsors__sponsors-img sponsors__img">
          </a>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-sponsors',
  computed: {
    text () {
      return this.$page.frontmatter.sponsorsSponsorsText || 'Sponsors'
    },
    sponsors () {
      if(!this.$page.frontmatter.sponsorsSponsors) {
        return []
      }
      const shuffle = require('shuffle-array')
      return shuffle(this.$page.frontmatter.sponsorsSponsors)
    }
  }
}
</script>

<style lang="scss" scopped>

  @import "../styles/_vars.scss";

  .sponsors__sponsors-img {
    vertical-align: center;
    padding: 5px;
    max-height: 100px;
    @media (min-width: map-get($grid-breakpoints, md)){
      max-height: 150px;
    }
  }

</style>
