<template>
  <div class="col-xs-12">
    <h3 class="sponsors__subtitle">
      Comunidades
    </h3>
    <div class="row">
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.meetup.com/es-ES/Agile-Asturias/">
          <img src="../assets/img/communities/agileasturias.jpg" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://betabeers.com/community/betabeers-asturias-23/">
          <img src="../assets/img/communities/betabeers.png" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="http://www.impulsotic.org/">
          <img src="../assets/img/communities/impulsotic.jpg" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://gdg.es/">
          <img src="../assets/img/communities/gdgspain.png" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://startupgrindasturias.com/">
          <img src="../assets/img/communities/startupgrind.png" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.womentechmakers.com/">
          <img src="../assets/img/communities/womentechmarkers.png" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-offset-2 col-xs-4 sponsors__item">
        <a href="https://www.drone4students.com/">
          <img src="../assets/img/communities/Drone4Students.jpg" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
      <div class="col-xs-4 sponsors__item">
        <a href="https://www.meetup.com/es-ES/Legal-Hackers-Asturias">
          <img src="../assets/img/communities/legalhackers.png" class="sponsors__comunidades-img sponsors__img">
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'sponsors-comunidades'
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
