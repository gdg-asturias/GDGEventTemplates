<template>
  <div class="container">
    <div id="what-is" class="row what-is">
      <div class="col-sm-12">
        <h2 class="section__title">¿Qué es WTM?</h2>
      </div>
      <div class="col-sm-6 col-xs-12 what-is__video">
        <iframe class="what-is__video-item" width="100%" height="auto" src="https://www.youtube.com/embed/videoseries?list=PLqTABNoqGm_W3QOjs4zmjS7M0kpDB5rWr" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="col-sm-6 col-xs-12">
        <p class="section__paragraph">
          WTM Asturias es una evento en el que 10 profesionales del mundo de la tecnología compartirán sus conocimientos sobre software, hardware y frikadas varias.
        </p>
        <p class="section__paragraph">
          Se trata de una iniciativa internacional promovida a nivel global por Google para dar visibilidad a mujeres que trabajan en el ámbito de la tecnología. A nivel local, está organizado por GDG Asturias (Google Developers Group) y Astur Valley (Asociación Asturiana de Startups).
        </p>
        <p class="section__paragraph">
          Un evento de día completo, de 9h a 18h, en el que disfrutaremos de charlas y talleres. La comida y el café del descanso están incluidos. El fin de jornada lo haremos a la asturiana, con una cena espicha en un céntrico restaurante (la cena es opcional).
        </p>
      </div>
    </div>
    <div class="row what-is-bottom">
      <div class="col-xs-12">
        
      </div>
    </div>
    <div class="row organizers">
      <div class="col-sm-12 organizers__title">
        Organizado con <span class="icon-heart organizers__title-icon"></span>:
      </div>
      <div class="organizers__organizer col-xs-6">
        <a href="http://www.asturvalley.com/" class="organizers__item">
          <img class="organizers__item-img" src="../assets/img/asturvalley_logo.png">
        </a>
        <div class="organizers__rrss">
          <a class="section__rrss-item" href="https://twitter.com/Asturvalley"><span class="icon-twitter"></span></a>
          <a class="section__rrss-item" href="https://www.linkedin.com/company/astur-valley-asociaci%C3%B3n-asturiana-de-startups/"><span class="icon-linkedin"></span></a>
        </div>
      </div>
      <div class="organizers__organizer col-xs-6">
        <a href="http://gdgasturias.com" class="organizers__item">
          <img class="organizers__item-img" src="../assets/img/gdg_logo.png">
        </a>
        <div class="organizers__rrss">
          <a class="section__rrss-item" href="https://twitter.com/GDGAsturias"><span class="icon-twitter"></span></a>
          <!-- <a class="section__rrss-item" href=""><span class="icon-linkedin"></span></a> -->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatIsWTM'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_vars.scss";

.section__paragraph:first-child {
  margin-top: 0px;
}

.what-is {
  padding-top: 20px;
  @media (min-width: map-get($grid-breakpoints, md)){
    padding-top: 60px;
  }
}

.what-is-bottom {
  padding-bottom: 50px;
}

.what-is__video {
  position: relative;
	padding-bottom: 50.6%;
	padding-top: 25px;
  height: 0;
  margin-top: 0;
  margin-bottom: 30px;
  @media (min-width: map-get($grid-breakpoints, md)){
    margin-top: 40px;
    padding-bottom: 26.25%;
  }
}

.what-is__video-item {
  position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
}

.organizers__title{
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.organizers__title-icon {
  color: #1CE9B6;
}

.organizers__item{
  text-align: center;
  display: block;
  height: 150px;
  padding: 20px 0;
}

.organizers__item-img{
  filter: grayscale(100%);
  width: 100%;
  max-width: 185px;
  height: auto;
  max-height: 110px;
  transition: all 0.4s;
  &:hover{
    filter: grayscale(0%);
  }

}

.organizers__rrss {
  text-align: center;
}
</style>
