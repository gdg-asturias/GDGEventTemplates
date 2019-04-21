<template>
  <div class="container">
    <div id="what-is" class="row what-is">
      <div class="col-xs-12">
        <h2 class="section__title">
          {{data.aboutTitle}}
        </h2>
      </div>
      <div class="col-xs-12 col-sm-6 what-is__video">
        <iframe class="what-is__video-item" width="100%" height="auto" src="https://www.youtube.com/embed/CKvi3sT3gU8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p class="section__paragraph margin-paragraph" v-html="data.aboutDescription[0]">
        </p>
      </div>
    </div>
    <div class="row what-is-bottom">
      <div class="col-xs-12 col-sm-6">
        <p class="section__paragraph">
          {{data.aboutDescription[1]}}
        </p>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p class="section__paragraph">
          {{data.aboutDescription[2]}}
        </p>
      </div>
    </div>
    <div class="row organizers">
      <div class="col-xs-12 col-sm-6 col-md-offset-1">
        <div class="col-sm-12 organizers__title">
          Organizan:
        </div>
        <div class="organizers__organizer col-xs-12 col-sm-6" v-for="organizer in data.aboutOrganizers">
          <a :href="organizer.web" class="organizers__item" target="_blank" >
            <img class="organizers__item-img" v-lazy="organizer.image" :alt="organizer.name">
          </a>
          <div class="organizers__rrss">
            <a v-if="organizer.twitter" class="section__rrss-item" :href="organizer.twitter" target="_blank" >
              <span class="icon-twitter"></span>
            </a>
            <a v-if="organizer.linkedin" class="section__rrss-item" :href="organizer.linkedin" target="_blank" >
              <span class="icon-linkedin"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-4 margin-top-supporter">
        <div class="col-sm-12 organizers__title">
          Apoya:
        </div>
        <div class="organizers__organizer col-xs-12" v-for="supporter in data.aboutSupporters">
          <a :href="supporter.web" class="organizers__item" target="_blank" >
            <img class="organizers__item-img" v-lazy="supporter.image" :alt="supporter.name">
          </a>
          <div class="organizers__rrss">
            <a v-if="supporter.twitter" class="section__rrss-item" :href="supporter.twitter" target="_blank" >
              <span class="icon-twitter"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutEvent',
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
.margin-top-supporter {
  margin-top: 40px;
  @media (min-width: map-get($grid-breakpoints, md)){
    margin-top: 0;
  }
}

.number-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.number {
  font-size: 50px;
  font-weight: 600;
}

.number-title {
  font-size: 20px;
}  

.what-is {
  padding-top: 60px;
}

.what-is-bottom {
  @media (min-width: map-get($grid-breakpoints, md)){
    padding-bottom: 50px;
  }
}

.what-is__video {
  position: relative;
	padding-bottom: 50.6%;
	padding-top: 25px;
  height: 0;
  margin-bottom: 30px;
  @media (min-width: map-get($grid-breakpoints, md)){
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
  color: $rojo;
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

.margin-paragraph{
  margin-left: 16px;
}
</style>
