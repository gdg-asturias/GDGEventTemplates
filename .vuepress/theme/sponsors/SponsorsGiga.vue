<template>
  <div class="col-xs-12" v-if="sponsors && sponsors.length">
    <h3 class="sponsors__subtitle">
      {{text}}
    </h3>
    <div class="sponsors-container">
      <div v-for="(giga, index) in sponsors" :key="index" class="sponsors__item">
        <a :href="giga.url" target="_blank" >
          <img v-lazy="giga.image" class="sponsors__giga-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-giga',
  computed: {
    text () {
      return this.$page.frontmatter.sponsorsGigaText || 'Giga'
    },
    sponsors () {
      return this.$page.frontmatter.sponsorsGiga
    }
  }
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
    width: 150px;
    @media (min-width: map-get($grid-breakpoints, md)){
      width: 260px;
    }
  }

</style>
