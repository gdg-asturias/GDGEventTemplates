<template>
  <header class="header">
    <div class="container header__container">
      <div class="row">
        <div class="col-xs-12 col-lg-4">
          <div class="header__logo">
            <img class="header__logo--img" src="img/logos/gdgasturias-blanco.png" alt="Logo GDG Asturias">
          </div>
        </div>
        <ClientOnly>
          <div class="col-xs-12 col-lg-8 header__nav-mobile">
            <div class="row">
              <nav class="col-xs-12">
                <ul>
                  <li class="header__nav-item" v-if="$page.frontmatter.showAbout">
                    <a class="header__nav-item-link" href="#what-is" v-scroll-to="'#what-is'">
                      ¿Qué es?
                    </a>
                  </li>
                  <li class="header__nav-item" v-if="$page.frontmatter.showOrganizers">
                    <a class="header__nav-item-link" href="#team" v-scroll-to="'#team'">
                      Equipo
                    </a>
                  </li>
                  <li class="header__nav-item" v-if="$page.frontmatter.showBuyTickets">
                    <a class="header__nav-item-link" href="#buy" v-scroll-to="'#buy'">
                      Compra tu entrada
                    </a>
                  </li>
                  <li class="header__nav-item" v-if="$page.frontmatter.showSchedule">
                    <a class="header__nav-item-link" href="#schedule" v-scroll-to="'#schedule'">
                      Agenda
                    </a>
                  </li>
                  <li class="header__nav-item" v-if="$page.frontmatter.showSpeakers">
                    <a class="header__nav-item-link" href="#speakers" v-scroll-to="'#speakers'">
                      Speakers
                    </a>
                  </li>
                  <li class="header__nav-item" v-if="$page.frontmatter.showSponsors">
                    <a class="header__nav-item-link" href="#sponsors" v-scroll-to="'#sponsors'">
                      Sponsors
                    </a>
                  </li>
                  <li class="header__nav-item" v-if="$page.frontmatter.showTravel">
                    <a class="header__nav-item-link" href="#travel" v-scroll-to="'#travel'">
                      Viajes
                    </a>
                  </li>
                  <li class="header__nav-item" v-if="$page.frontmatter.showFaq">
                    <a class="header__nav-item-link" href="#faq" v-scroll-to="'#faq'">
                      FAQs
                    </a>
                  </li>
                  <li class="header__nav-item" v-if="$page.frontmatter.showEventLocation">
                    <a class="header__nav-item-link" href="#where-is" v-scroll-to="'#where-is'">
                      ¿Dónde es?
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
    <div class="header__title">
      <h1 class="header__title-title header__title-title-desktop">
        {{data.headerTitle}}
      </h1>
      <h1 class="header__title-title header__title-title-mobile">
        Google Devfest
      </h1>
      <!-- <ClientOnly>
        <h3 class="header__subtitle" v-if="data.people">
          $> sois bienvenidos <vue-typer :text="data.people" :shuffle="true"></vue-typer>
        </h3>
      </ClientOnly> -->
      <h4 class="header__date" v-html="data.tagline">
      </h4>
      <ClientOnly>
        <CountdownEvent/>
      </ClientOnly>
      <div class="container header__topics">
        <div class="row" v-if="data.topics">
          <div class="col-xs-12 header__conference_container">
            <div class="header__conference" v-for="topic in data.topics">
              <img class="header__conference-img" v-lazy="topic.image" :alt="`hablaremos de ${topic.name}`">
              <span class="header__conference-name">
                {{topic.name}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__buttons-bar">
      <ClientOnly>
        <a v-if="$page.frontmatter.showBuyTickets" class="header__button" href="#buy" v-scroll-to="'#buy'">
          {{data.actionText}}
        </a>
        <a v-else class="header__button" :href="data.actionLink">
          {{data.actionText}}
        </a>
      </ClientOnly>
    </div>
    <div class="header__links-bar">
      <p>
        No olvides leer
        <a href="https://github.com/gdg-asturias/comunidad/blob/master/CODE_OF_CONDUCT.md" target="_blank" >
          nuestro código de conducta
        </a>
      </p>
    </div>
  </header>
</template>

<script>
import Vue from 'vue';
import CountdownEvent from './CountdownEvent.vue'

export default {
  name: 'TheHeader',
  components: {
    CountdownEvent,
  },
  computed: {
    data () {
      return this.$page.frontmatter
    }
  },
  async mounted () {
    const VueTyper = await import('vue-typer')
    Vue.use(VueTyper.default)
    this.$forceUpdate()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "styles/_vars.scss";
  .header__title-title-desktop {
    @media (max-width: map-get($grid-breakpoints, sm)){
      display: none
    }
  } 
  .header__title-title-mobile {
    @media (min-width: map-get($grid-breakpoints, sm)){
      display: none
    }
  } 
  .header__conference_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .header__topics{
    @media (min-width: map-get($grid-breakpoints, md)){
      margin-top: 80px;
    }
  } 

  .header {
    min-height: 750px;
    height: 100vh;
    width: 100%;
    color: white;
    position: relative;
    background: url('../public/img/header-bg.png') no-repeat center;
    background-size: cover;
  }

  .header__container {
    padding-top: 20px;
    @media (min-width: map-get($grid-breakpoints, sm)){
      padding-top: 40px;
    }
  }

  .header__logo--img {
    width: 270px;
    @media (min-width: map-get($grid-breakpoints, sm)){
      width: 300px;
    }
  }

  .header__nav {
    white-space: nowrap;
    text-align: center;
    margin-top: 40px;
    position: absolute;
    top: calc(-120% - 40px);
    width:100%;
    transition: all 0.4s;
    background-color: #4385f5;
    height: 100vh;
    @media (min-width: map-get($grid-breakpoints, sm)){
      position: relative;
      text-align: center;
      background-color: transparent;
      margin-top: 40px;
      top: 0%;
      height: auto;
      font-size: 14px;
      display: none;
    }
    @media (min-width: map-get($grid-breakpoints, md)){
      display: inherit;
      width: 750px;
      text-align: right;
      font-size: 16px;
    }
    @media (min-width: map-get($grid-breakpoints, lg)){
      width: 970px;
    }
    @media (min-width: map-get($grid-breakpoints, xl)){
      width: 1170px;
    }
  }

  .header__nav-mobile {
    @media (max-width: map-get($grid-breakpoints, lg)) {
      display:none;
    }
  }
  .header-conferences {
    display:flex;
    align-items: center;
    justify-content: space-around;
  }

  .header__conference-img {
    width: 40px;
    padding: 2px;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      margin: 0 8px;
    }
  }

  ul {
    padding:0;
  }

  .header__nav-item {
    text-decoration: none;
    // display: block;
    // text-align: center;
    text-transform: uppercase;
    // padding-top: 15px;
    // padding-bottom: 15px;
    // border-bottom: 1px solid rgba(255,255,255,0.3);
    &:last-child {
      border: none;
    }
    &:hover {
      background-image: linear-gradient(-270deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.20) 50%, rgba(255,255,255,0.00) 100%);
    }
    // @media (min-width: map-get($grid-breakpoints, sm)){
      display: inline-block;
      margin-left: 10px;
      margin-right: 10px;
      text-align: right;
      padding-top: 0px;
      padding-bottom: 0px;
      border-bottom: none;
      &:hover {
        background-image: none;
      }
    // }
    // @media (min-width: map-get($grid-breakpoints, md)){
    //   margin-left:20px;
    //   margin-right: 0px;
    // }
  }

  .header__nav-item-link {
    color: white;
    &:hover {
      text-decoration: none;
      color: rgb(223, 223, 223);
    }
  }

  .header__title {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
  }

  .google__img {
    width: 100px;
    padding-left: 10px;
    @media (min-width: map-get($grid-breakpoints, sm)){
      width: 140px;
      padding-left: 10px;
    }
  }

  .header__conference-name{
    display: none;
     @media (min-width: map-get($grid-breakpoints, sm)){
      display: inline-block;
    }
  }

 .header__title-title{
    padding-left: 16px;
    padding-right: 16px;
    font-size: 40px;
    line-height: 1em;
    text-transform: initial;
    margin-top: 20px;
    @media (min-width: map-get($grid-breakpoints, sm)){
      font-size: 60px;
    }
  }

  .header__title-subtitle{
      font-size: 30px;
      line-height: 1em;
      margin-top: 20px;
      @media (min-width: map-get($grid-breakpoints, sm)){
        font-size: 40px;
      }
  }

  .header__date {
    font-size: 20px;
    line-height: 1em;
    margin-top: 50px;
    margin-bottom: 50px;
    font-weight: lighter;
    text-transform: initial;
    @media (min-width: map-get($grid-breakpoints, sm)){
      font-size: 20px;
    }
    & span {
      white-space: nowrap;
    }
  }

  .header__title-subtitle-icon {
    margin: 0 8px;
  }

  .header__buttons-bar {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    @media (max-width: map-get($grid-breakpoints, sm)) {
      margin-bottom: 32px;
    }
    @media (min-width: map-get($grid-breakpoints, sm)){
      display: flex;
      justify-content: space-between;
    }
  }

  .header__links-bar {
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    a {
      color: white;
      text-decoration: underline;
    }
  }

  .header__button {
    background-color: rgba(white, 0.8);
    white-space: nowrap;
    border: none;
    color: $azul;
    font-size: 26px;
    font-weight: lighter;
    padding: 8px 20px;
    margin: 10px;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: rgba(white, 1);
      color: $azul;
      text-decoration: none;
    }
  }
  .header__button-icon {
    margin-right: 10px;
    top: 2px;
    position: relative;
  }
  .vue-typer .custom.char.typed {
    color: rgba(240,240,240, 1);
  }
  .header__subtitle {
    margin-top: 50px;
  }
  .header__logo--google {
    margin-left: 16px;
    display: inline-block;
  }

  .header__conference {
    display: inline;
    margin: 5px;
    @media (min-width: map-get($grid-breakpoints, sm)){
      margin: 0;
      width: 200px;
      display: inline-block;
    }
  }
</style>
