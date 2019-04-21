<template>
  <div class="speaker-item__social speaker-item" :id="speaker.id">
    <div class="row">
      <div class="col-xs-12">
        <img :src="speaker.image" class="speaker-item__picture">
      </div>
      <div class="speakers-item_info col-xs-12">
        <h3>
          <span class="speaker-item__name">
            {{speaker.name}}
          </span>
          <br>
          <span class="speaker-item__name--surname">
            {{speaker.surname}}
          </span>
        </h3>
        <h4>
          <span class="speaker-item__work">
            {{speaker.work}}
          </span>
        </h4>
      </div>
      <div class="speakers-item__rrss col-xs-12">
        <a v-if="speaker.twitter" class="section__rrss-item" :href="speaker.twitter" target="_blank" >
          <span class="icon-twitter"></span>
        </a>
        <a v-if="speaker.linkedin" class="section__rrss-item" :href="speaker.linkedin" target="_blank" >
          <span class="icon-linkedin"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviousSpeakersItem',
  props: ['speaker']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";
.speaker-item {
  width: 190px;
  padding-top: 40px;
  padding-bottom: 40px;
}

.speakers-item_info {
  min-height: 125px;
  @media (max-width: map-get($grid-breakpoints, sm)) {
    min-height: auto;
  }
}

.speaker-item__social {
  text-align: center;
}

.speakers-item__rrss {
  text-align: center;
}

.speaker-item__work {
  font-size: 15px;
}

.speaker-item__name {
  color: $azul;
  font-size: 15px;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0 0 30px 0;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 20px;
  }
}

.speaker-item__name--surname {
  @extend .speaker-item__name;
}

.speaker-item__picture {
  border-radius: 50%;
  width: 120px;
  height: auto;
  margin-bottom: 20px;
}

.speaker-item__speaking-in {
  color: $naranja;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
