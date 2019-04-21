<template>
  <div class="col-xs-12" v-if="sponsors && sponsors.length">
    <h3 class="sponsors__subtitle">
      {{ text }}
    </h3>
    <div class="sponsors-container">
      <div v-for="(mega, index) in sponsors" :key="index" class="sponsors__mega-item">    
        <a :href="mega.url" target="_blank" >
          <img v-lazy="mega.image" class="sponsors__mega-img sponsors__img" :class="mega.class">
        </a>         
      </div>
    </div>
  </div>   
</template>

<script>

export default {
  name: 'sponsors-mega',
  computed: {
    text () {
      return this.$page.frontmatter.sponsorsMegaText || 'Mega'
    },
    sponsors () {
      return this.$page.frontmatter.sponsorsMega
    }
  }
}
</script>

<style lang="scss" scopped>
@import "../styles/_vars.scss";

.sponsors__mega-cocktail {
  width: 145px !important;
  @media (min-width: map-get($grid-breakpoints, md)){
    width: 240px !important;
  }
}

.sponsors__mega-img {
  padding: 5px;
  width: 125px;
  @media (min-width: map-get($grid-breakpoints, md)){
    width: 200px;
  }
}

.sponsors__mega-item {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: map-get($grid-breakpoints, sm)){
    width: 380px;
  }
}

</style>
