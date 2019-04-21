<template>
  <div class="col-xs-12" v-if="sponsors && sponsors.length">
    <h3 class="sponsors__subtitle">
      {{ text }}
    </h3>
    <div class="sponsors-container">
      <ClientOnly>
        <div v-for="(colaborador, index) in sponsors" :key="index" class="sponsors__item-colaboradores">
          <a :href="colaborador.url" target="_blank" >
            <img v-lazy="colaborador.image" class="sponsors__colaboradores-img sponsors__img" :class="colaborador.class">
          </a>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-colaboradores',
  computed: {
    text () {
      return this.$page.frontmatter.sponsorsColaboradoresText || 'Colaboradores'
    },
    sponsors () {
      const shuffle = require('shuffle-array')
      return shuffle(this.$page.frontmatter.sponsorsColaboradores)
    }
  }
}
</script>

<style lang="scss" scopped>

  @import "../styles/_vars.scss";

  .sponsors__item-colaboradores {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    @media (min-width: map-get($grid-breakpoints, sm)){
      width: 380px;
    }
  }

  .gnome {
    max-height: 95px;
  }

  .sponsors__colaboradores-img {
    vertical-align: center;
    padding: 5px;
    max-width: 100px;
    @media (min-width: map-get($grid-breakpoints, md)){
      max-width: 190px;
    }
  }

</style>
