<template>
  <footer class="footer" >
    <div class="container">
      <div class="row">
        <div class="col-xs-12 footer__main">
          <div class="row footer__main-line">
            <div class="col-xs-4">
              <img class="footer__img" v-lazy="data.footerLogo"/>
            </div>
            <div class="col-xs-8 footer__main-rrss">
              <a :href="`mailto:${data.footerEmail}`">
                <span class="icon-mail section__rrss-item--white"></span>
              </a>
              <a :href="data.footerFacebook" target="_blank" >
                <span class="icon-facebook section__rrss-item--white"></span>
              </a>
              <a :href="data.footerTwitter" target="_blank" >
                <span class="icon-twitter section__rrss-item--white"></span>
              </a>
              <a :href="data.footerInstagram" target="_blank" >
                <span class="icon-instagram section__rrss-item--white"></span>
              </a>
            </div>
          </div>
          <div class="row footer__main-line">
            <div class="col-xs-12 col-sm-6">
              <img class="footer__img" v-lazy="'img/logos/gdgasturias-blanco.png'"/>
            </div>
            <div class="col-xs-12 col-sm-6 footer__main--right">
              <p class="footer__paragraph">
                {{data.footerText[0]}}
              </p>
              <p class="footer__paragraph">
                {{data.footerText[1]}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__sub">
      <p class="footer__paragraph">
        Made with <span class="icon-heart"></span> by GDG Asturias and hosted by <a href="https://gigas.com/">Gigas</a>
      </p>
    </div>
  </footer>
</template>

<script>
// const Elevator = require('elevator.js')

export default {
  name: 'TheFooter',
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";
.footer {
  background-color: $gris-1;
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
  background-color: $gris-3;
}

.footer__paragraph {
  margin: 0;
  font-weight: lighter;
  font-size: 12;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 14;
  }

}

a {
  color: white;
}

</style>
