<template>
  <div class="col-xs-12" v-if="sponsors && sponsors.length">
    <h3 class="sponsors__subtitle">
      {{text}}
    </h3>
    <div class="row">
      <div v-for="(media, index) in sponsors" :key="index" class="col-xs-12 sponsors__item">
        <a :href="media.url" target="_blank" >
          <img v-lazy="media.image" class="sponsors__media-partner-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-media-partner',
  computed: {
    text () {
      return this.$page.frontmatter.sponsorsMediaText || 'Media Partners'
    },
    sponsors () {
      return this.$page.frontmatter.sponsorsMedia
    }
  }
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
