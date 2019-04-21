<template>
  <header class="header">
    <div class="container header__container">
      <div class="row">
        <div class="col-xs-12">
          <div class="header__logo">
            <img class="header__logo--img" src="../assets/img/wtm-logo-gdg-asturias.png" alt="Logo WTM Asturias">
            <div class="header__logo--google">
              <span>by</span>
              <img class="google__img" src="../assets/img/google-logo.png"/>
            </div>
          </div>
        </div>
        <nav class="header__nav-mobile col-xs-12">
          <span class="icon-menu"></span>
        </nav>
      </div>
    </div>
    <div class="header__title">
      <h1 class="header__title-title">
        Women techmakers Asturias
      </h1>
      <h3 class="header__subtitle">
        $> sois bienvenidos <vue-typer :text="people" :shuffle="true"></vue-typer>
      </h3>
      <h4 class="header__date">
        el 14 de abril en EPI Gijón
      </h4>
      <div class="container">
        <div class="row">
          <h3>
          hablaremos de:
          </h3>
          <div class="header-conferences col-xs-12">
            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/ionic.png" alt="hablaremos de ionic">
              <span class="header__conference-name">Ionic</span>
            </div>

            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/aureliajs.png" alt="hablaremos de aurelia js">
              <span class="header__conference-name">Aurelia js</span>
            </div>

            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/aungularjs.png" alt="hablaremos de angular js">
              <span class="header__conference-name">Angular js</span>
            </div>

            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/svg.png" alt="hablaremos de svg">
              <span class="header__conference-name">svg</span>
            </div>

            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/r.png" alt="hablaremos de r">
              <span class="header__conference-name">R</span>
            </div>
          </div>
          <div class="header-conferences col-xs-12">

            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/robots.png" alt="hablaremos de robots">
              <span class="header__conference-name">Robots</span>
            </div>

            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/biotech.png" alt="hablaremos de biotech">
              <span class="header__conference-name">Biotech</span>
            </div>

            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/machinelearning.png" alt="hablaremos de machine learning">
              <span class="header__conference-name">Machine learning</span>
            </div>

            <div class="header__conference">
              <img class="header__conference-img" src="../assets/img/conferences/firebase.png" alt="hablaremos de machine firebase">
              <span class="header__conference-name">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__buttons-bar">
      <a class="header__button" href="https://www.youtube.com/watch?list=PLqTABNoqGm_W3QOjs4zmjS7M0kpDB5rWr&v=xfQ2a17vsp0">
        <span class="header__button-icon">
          <svg width="20px" height="20px" viewBox="0 0 586 586" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch -->
              <title>Page 1</title>
              <desc>Created with Sketch.</desc>
              <defs>
                  <polygon id="path-1" points="0 0 586 0 586 586 0 586"></polygon>
              </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g>
                      <mask id="mask-2" fill="white">
                          <use xlink:href="#path-1"></use>
                      </mask>
                      <g id="Clip-2"></g>
                      <path d="M147.408304,272.872477 C147.2858,273.0568 147.163589,273.241416 147.041085,273.426032 C147.523482,273.74193 148.076802,273.986033 148.477139,274.384276 C173.061211,298.840894 197.623888,323.319197 222.236388,347.747097 C223.299361,348.801751 223.450293,349.738017 223.209974,351.087764 C220.970902,363.669774 218.781067,376.260574 216.585662,388.84991 C213.602773,405.956766 210.627797,423.064794 207.649304,440.172529 C206.914278,444.392906 206.178667,448.613283 205.400853,453.078935 C206.066127,452.707652 206.524492,452.457688 206.976996,452.198054 C235.206007,436.010174 263.438829,419.828449 291.647032,403.604233 C292.728469,402.9824 293.463787,403.013169 294.525881,403.622108 L293.914532,168.639836 C293.685349,168.13434 293.428911,167.641152 293.079862,166.926718 C292.714694,167.65639 292.465583,168.115878 292.250468,168.590605 C278.899562,198.033902 265.544553,227.475441 252.23116,256.936027 C251.743488,258.015004 251.101953,258.435811 249.993846,258.58702 C239.986016,259.951419 229.984339,261.358602 219.979732,262.747324 C209.057223,264.263518 198.132955,265.769456 187.210445,267.287115 C176.916576,268.717741 166.623586,270.155694 156.330889,271.595697 C153.355619,272.011816 150.382401,272.446395 147.408304,272.872477 Z M0,223.801292 L22.1729666,220.703849 C32.900583,219.204944 43.6284924,217.704867 54.3564019,216.208599 C64.6007421,214.779731 74.8456685,213.354673 85.0905948,211.928149 C96.6889288,210.313786 108.288142,208.704991 119.885597,207.083595 C130.709048,205.570038 141.529568,204.036554 152.353312,202.524462 C163.178228,201.011785 174.005196,199.516103 184.830699,198.010165 C191.112995,197.13661 197.398516,196.282689 203.669089,195.33177 C204.161451,195.257045 204.717409,194.566933 204.960659,194.034185 C211.580868,179.528947 218.165029,165.007299 224.753586,150.487702 C247.219038,100.9793 269.684198,51.4703118 292.149651,1.96190967 C292.404624,1.39985698 292.663993,0.839562539 293.048797,0 C293.439169,0.80556978 293.716708,1.34681655 293.967578,1.89978497 C322.973524,65.842509 351.979763,129.78494 380.962263,193.738213 C381.445539,194.805469 381.975121,195.337631 383.242951,195.507302 C395.670973,197.172947 408.086392,198.932366 420.504156,200.673029 C431.327607,202.190103 442.147834,203.727103 452.972165,205.238022 C463.845438,206.755975 474.722521,208.243158 485.595501,209.761111 C496.419538,211.27203 507.239179,212.81284 518.063217,214.325225 C528.887254,215.837316 539.715101,217.323913 550.539724,218.833661 C561.944337,220.424287 573.347485,222.027515 584.750926,223.629863 C585.119611,223.681731 585.481848,223.781951 586,223.892428 C582.832768,227.070165 579.783059,230.148561 576.71342,233.20703 C533.46387,276.29168 490.211389,319.374278 446.959201,362.456877 C443.914474,365.489852 440.896123,368.550665 437.802159,371.532944 C437.006761,372.299246 436.777286,373.008991 436.968662,374.08914 C439.188098,386.624849 441.362108,399.168178 443.547841,411.709747 C446.436654,428.287664 449.325467,444.865288 452.214866,461.442912 C455.19629,478.548889 458.179765,495.654573 461.16031,512.760843 C463.9401,528.714289 466.718718,544.667442 469.494698,560.621182 C470.966214,569.080397 472.430696,577.540492 473.897816,586 L473.604744,586 C473.054354,585.620512 472.528289,585.199119 471.950351,584.867689 C412.80339,550.941744 353.650861,517.026348 294.517382,483.077252 C293.444151,482.46128 292.697403,482.458056 291.625638,483.073735 C232.578322,516.976824 173.512249,550.847971 114.45233,584.728788 C113.789694,585.108862 113.176001,585.574211 112.539741,586 L112.246669,586 C112.863879,582.394716 113.470832,578.787674 114.099472,575.184442 C117.670557,554.714354 121.25483,534.246611 124.819468,513.775644 C128.576361,492.199326 132.30805,470.618613 136.066995,449.042588 C140.412084,424.102745 144.768896,399.165247 149.148567,374.231851 C149.352252,373.072874 149.147688,372.283129 148.271695,371.411918 C99.2064194,322.605349 50.1692787,273.770062 1.12305283,224.944445 C0.79334656,224.616239 0.376597831,224.375946 0,224.094333 L0,223.801292 Z" id="Fill-1" fill="#4385F5" mask="url(#mask-2)"></path>
                  </g>
              </g>
          </svg>
        </span>Ver las charlas
      </a>
    </div>
    <div class="header__links-bar">
      <p>
        No olvides leer
        <a href="https://github.com/gdg-asturias/comunidad/blob/master/CODE_OF_CONDUCT.md">
          nuestro código de conducta
        </a>
      </p>
    </div>
    <div class="container header__nav">
      <div class="row">
        <nav class="col-xs-12">
          <ul>
            <li class="header__nav-item">
              <a class="header__nav-item-link" href="#what-is" v-scroll-to="'#what-is'">
                ¿Qué es WTM?
              </a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-item-link" href="#team" v-scroll-to="'#team'">
                Equipo
              </a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-item-link" href="#schedule" v-scroll-to="'#schedule'">
                Agenda
              </a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-item-link" href="#speakers" v-scroll-to="'#speakers'">
                Speakers
              </a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-item-link" href="#sponsors" v-scroll-to="'#sponsors'">
                Sponsors
              </a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-item-link" href="#travel" v-scroll-to="'#travel'">
                Viajes
              </a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-item-link" href="#faq" v-scroll-to="'#faq'">
                FAQs
              </a>
            </li>
            <li class="header__nav-item">
              <a class="header__nav-item-link" href="#where-is" v-scroll-to="'#where-is'">
                ¿Dónde es?
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </header>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: 'Header',
  data () {
    return {
      'tech': ['AngularJS', 'AureliaJS', 'Biotech', 'Firebase', 'Ionic', 'R', 'Machine Learning', 'SVG', 'robots'],
      'people': ['hombres', 'mujeres', 'estudiantes', 'CTOs', 'developers', 'principiantes']
    }
  },
  components: {
    VueTyper
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "../styles/_vars.scss";
  .header {
    background-image: url(../assets/img/wtm-asturias-bg-header.png);
    background-size: cover;
    min-height: 750px;
    height: 100vh;
    max-height: 1200px;
    width: 100%;
    color: white;
    position: relative;
  }

  .header__container {
    padding-top: 20px;
    @media (min-width: map-get($grid-breakpoints, sm)){
      padding-top: 40px;
    }
  }

  .header__logo--img {
    width: 290px;
    @media (min-width: map-get($grid-breakpoints, sm)){
      width: 400px;
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
      display:none;
  }
  .header-conferences {
    display:flex;
    align-items: center;
    justify-content: space-around;
  }

  .header__conference-img {
    width: 40px;
  }

  ul {
    padding:0;
  }

  .header__nav-item {
    text-decoration: none;
    display: block;
    text-align: center;
    text-transform: uppercase;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    &:last-child {
      border: none;
    }
    &:hover {
      background-image: linear-gradient(-270deg, rgba(255,255,255,0.00) 0%, rgba(255,255,255,0.20) 50%, rgba(255,255,255,0.00) 100%);
    }
    @media (min-width: map-get($grid-breakpoints, sm)){
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
    }
    @media (min-width: map-get($grid-breakpoints, md)){
      margin-left:20px;
      margin-right: 0px;
    }
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
      top: 50%;
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
      @media (min-width: map-get($grid-breakpoints, sm)){
        font-size: 20px;
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
    background-color: white
    ;
    white-space: nowrap;
    border: none;
    border-radius: 8px;
    color: #4385F5;
    font-size: 18px;
    font-weight: lighter;
    padding: 8px 20px;
    margin: 10px;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: rgba(240,240,240, 1);
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
</style>
