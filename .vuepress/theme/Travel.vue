<template>
  <div class="container travel" id="travel">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          VIAJES
        </h2>
      </div>
      <div class="col-xs-12 col-sm-6" v-for="(text, index) in data.travelTexts" :key="index">
        <p class="section__paragraph">
          {{text}}
        </p>
      </div>
      <div class="col-xs-12">
        <div class="row">
          <div class="col-xs-6 col-sm-4 travel-item" v-for="(travel, index) in data.travel" :key="index">
            <a :href="travel.url" target="_blank" >
              <img class="travel-item__img" v-lazy="travel.image">
            </a>
            <p class="section__paragraph">
              {{travel.text}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Travel',
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.travel {
  margin-top: 50px;
}
.travel-item {
  text-align: center;
  min-height: 140px;
  margin-top: 30px;

}

.travel-item__img{
  max-width: 80%;

}

img {
  max-width: 200px;
}
</style>
