<template>
  <div class="col-xs-12" v-if="globalPartners && globalPartners.length">
    <h3 class="sponsors__subtitle">
      {{text}}
    </h3>
    <div class="row">
      <div v-for="(partner, index) in globalPartners" :key="index" class="col-xs-12 sponsors__item-global" >    
        <a :href="partner.url" target="_blank" >
          <img v-lazy="partner.image" class="sponsors-global__img sponsors__img">
        </a>            
      </div>
    </div>
  </div>   
</template>

<script>

export default {
  name: 'global-partner',
  computed: {
    text () {
      return this.$page.frontmatter.globalPartnersText || 'Global partner'
    },
    globalPartners () {
      return this.$page.frontmatter.globalPartners
    }
  }
}
</script>

<style lang="scss" scopped>
.sponsors__item-global {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
.sponsors-global__img {
  max-width: 35%
}
</style>
