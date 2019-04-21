<template>
  <div class="container sponsors" id="sponsors">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          Sponsors
        </h2>
      </div>
      <div class="col-xs-12">
        <p v-for="(text, index) in data.sponsorsTexts" :key="index" v-html="text" class="section__paragraph">
        </p>
      </div>
      <GlobalPartner/>
      <sponsors-tera></sponsors-tera>
      <sponsors-giga></sponsors-giga>
      <sponsors-mega></sponsors-mega>
      <sponsors-kilo></sponsors-kilo>
      <SponsorsSponsors/>
      <sponsors-colaboradores></sponsors-colaboradores>
      <sponsors-media></sponsors-media>
      <sponsors-comunidades></sponsors-comunidades>
    </div>
  </div>
</template>

<script>
import GlobalPartner from './GlobalPartner'
import SponsorsTera from './SponsorsTera'
import SponsorsGiga from './SponsorsGiga'
import SponsorsMega from './SponsorsMega'
import SponsorsKilo from './SponsorsKilo'
import SponsorsMedia from './SponsorsMedia'
import SponsorsColaboradores from './SponsorsColaboradores'
import SponsorsSponsors from './SponsorsSponsors'
import SponsorsComunidades from './SponsorsComunidades'

export default {
  name: 'Sponsors',
  components: {
    GlobalPartner,
    SponsorsTera,
    SponsorsGiga,
    SponsorsMega,
    SponsorsKilo,
    SponsorsMedia,
    SponsorsColaboradores,
    SponsorsSponsors,
    SponsorsComunidades,
  },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../styles/_vars.scss";

  .sponsors-container {
    display: flex;
    align-items: center;

    flex-wrap: wrap;
    justify-content: center;
  }

  .sponsors {
    padding-top: 60px;
    padding-bottom: 60px;
  }


  .sponsors__img {
    filter: grayscale(100%);
    &:hover{
      filter: grayscale(0%);
    }
  }

  .sponsors__subtitle {
    font-size: 30px;
    color: $azul;
      line-height: 1em;
      margin-top: 20px;
      @media (min-width: map-get($grid-breakpoints, sm)){
        font-size: 40px;
      }
  }

  .sponsors__item {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    @media (min-width: map-get($grid-breakpoints, sm)){
      width: 380px;
    }
  }

  .sponsors__media-img {
    filter: grayscale(100%);
    padding: 5px;
    max-height: 50px;
    &:hover{
      filter: grayscale(0%);
    }
    @media (min-width: map-get($grid-breakpoints, md)){
      max-height: 100px;
    }
  }
</style>
