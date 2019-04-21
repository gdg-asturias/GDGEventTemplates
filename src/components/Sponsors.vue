<template>
  <div class="container sponsors" id="sponsors">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          Sponsors
        </h2>
      </div>
      <div class="col-xs-12">
        <p class="section__paragraph">
          Women Techmakers Asturias es posible gracias a los patrocinadores y colaboradores que nos ayudan. 
        </p>
        <p class="section__paragraph">
          Si tu empresa también quiere apoyar esta primera edición, solo tienes que escribirnos a <a href="mailto:wtm@gdgasturias.com">wtm@gdgasturias.com</a>.
        </p>
      </div>
      <global-partner></global-partner>
      <sponsors-tera></sponsors-tera>
      <sponsors-giga></sponsors-giga>
      <sponsors-mega></sponsors-mega>
      <sponsors-kilo></sponsors-kilo>
      <sponsors-media></sponsors-media>
      <sponsors-colaboradores></sponsors-colaboradores>
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
import SponsorsColaboradores from './SponsorsColaboradores'
import SponsorsComunidades from './SponsorsComunidades'
import SponsorsMedia from './SponsorsMedia'

export default {
  name: 'Sponsors',
  components: {
    GlobalPartner,
    SponsorsTera,
    SponsorsGiga,
    SponsorsMega,
    SponsorsKilo,
    SponsorsColaboradores,
    SponsorsComunidades,
    SponsorsMedia
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../styles/_vars.scss";

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
