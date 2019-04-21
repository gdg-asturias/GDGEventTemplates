<template>
  <footer class="footer" >
    <div class="container">
      <div class="row">
        <div class="col-xs-12 footer__main">
          <div class="row footer__main-line">
            <div class="col-xs-6">
              <img class="footer__img" src="../assets/img/google-logo.png"/>
            </div>
            <div class="col-xs-6 footer__main-rrss">
              <a href="mailto:wtm@gdgasturias.com">
                <span class="icon-mail section__rrss-item--white"></span>
              </a>
              <a href="https://www.facebook.com/wtmasturias/">
                <span class="icon-facebook section__rrss-item--white"></span>
              </a>
              <a href="https://twitter.com/WTMASturias">
                <span class="icon-twitter section__rrss-item--white"></span>
              </a>
              <a href="https://instagram.com/WTMASturias">
                <span class="icon-instagram section__rrss-item--white"></span>
              </a>
              <a href="https://www.youtube.com/channel/UCo0T45oWvAQJ6iamPFJy1cg">
                <span class="icon-youtube section__rrss-item--white"></span>
              </a>
            </div>
          </div>
          <div class="row footer__main-line">
            <div class="col-xs-12 col-sm-6">
              <img class="footer__img" src="../assets/img/wtm-logo-gdg-asturias.png"/>
            </div>
            <div class="col-xs-12 col-sm-6 footer__main--right">
              <p class="footer__paragraph">
                ESCUELA POLITÉCNICA DE INGENIERÍA - UNIOVI
              </p>
              <p class="footer__paragraph">
                Gijón, Asturias
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__sub">
      <p class="footer__paragraph">
        Made with <span @click="elevator" class="icon-asturias"></span> by volunteers
      </p>
    </div>
  </footer>
</template>

<script>
const Elevator = require('elevator.js')

export default {
  name: 'Footer',
  methods: {
    elevator () {
      let elevator = new Elevator({
        mainAudio: './static/music/elevator.mp3',
        endAudio: './static/music/ding.mp3'
      })

      elevator.elevate()
      this.$emit('show-discount')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_vars.scss";
.footer {
background-color: #002045;
}
.footer__main {
  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: map-get($grid-breakpoints, sm)){
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.footer__main-line {
  margin: 10px 0;
}

.footer__main--right {
  text-align: left;
  @media (min-width: map-get($grid-breakpoints, sm)){
    text-align: right;
  }
}

.footer__main-rrss {
  text-align: right;
  white-space: nowrap;
}

.footer__img {
  max-height: 30px;
  max-width: 300px;
  padding-bottom: 10px;
  display: block;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    max-height: 40px;
  }
}

.footer__sub {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  color: white;
  background-color: #4385f5;
}

.footer__paragraph {
  margin: 0;
  font-weight: lighter;
  font-size: 12;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 14;
  }

}

</style>
