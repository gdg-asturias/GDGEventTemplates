<template>
  <li class="schedule__table-item" @click="show = !show">
    <div class="schedule__table-item-line">
      <div class="schedule__table-item-hour">
        {{talk.hour}}
      </div>
      <div class="schedule__table-item-track" :id="talk.track1 ? sluglify(talk.track1.slug) : ''">
        <template v-if="existsTrack1">
          <h3 class="schedule__table-item-track-title">
            <template v-if="!talk.hideTrack">
              track 1
            </template>
          </h3>
          <div class="schedule__table-item-conference" v-html="talk.track1.title">
          </div>
          <div class="schedule__table-item-speaker" @click.stop>
            <ClientOnly>
              <a v-show="talk.track1.picture" :href="`#${talk.track1.speaker}`" v-scroll-to="`#${talk.track1.speaker}`">
                <img class="schedule__table-item-speaker-img" :src="talk.track1.picture" :alt="talk.track1.alt">
              </a>
              <a v-show="talk.track1.picture2" :href="`#${talk.track1.speaker2}`" v-scroll-to="`#${talk.track1.speaker2}`">
                <img v-show="talk.track1.picture2" class="schedule__table-item-speaker-img" :src="talk.track1.picture2" :alt="talk.track1.alt">
              </a>
            </ClientOnly>
          </div>
        </template>
      </div>
      <div class="schedule__table-item-track" :id="talk.track2 ? sluglify(talk.track2.slug) : ''">
        <template v-if="existsTrack2">
          <h3 class="schedule__table-item-track-title">
            track 2
          </h3>
          <div class="schedule__table-item-conference" v-html="talk.track2.title">
          </div>
          <div class="schedule__table-item-speaker" @click.stop>
            <ClientOnly>
              <a v-show="talk.track2.picture" :href="`#${talk.track2.speaker}`" v-scroll-to="`#${talk.track2.speaker}`">
                <img class="schedule__table-item-speaker-img" :src="talk.track2.picture" :alt="talk.track2.alt">
              </a>
              <a v-show="talk.track2.picture2" :href="`#${talk.track2.speaker2}`" v-scroll-to="`#${talk.track2.speaker2}`">
                <img v-show="talk.track2.picture2" class="schedule__table-item-speaker-img" :src="talk.track2.picture2" :alt="talk.track2.alt">
              </a>
            </ClientOnly>
          </div>
        </template>
      </div>
      <span v-show="hasAnyDescripcion" class="schedule__table-item-speaker-icon icon-arrow-down"></span>
    </div>
    <collapse-transition>
      <div v-show="show && hasAnyDescripcion" class="schedule__table-item-collapsable row">
        <div v-if="talk.track1" class="schedule__table-item-collapsable-track col-xs-12 col-md-6">
          <h3 class="schedule__table-item-collapsable-title" v-html="talk.track1.title">
          </h3>
          <p class="section__paragraph" v-html="talk.track1.description">
          </p>
        </div>
        <div v-if="talk.track2" class="schedule__table-item-collapsable-track col-xs-12 col-md-6">
          <h3 class="schedule__table-item-collapsable-title" v-html="talk.track2.title">
          </h3>
          <p class="section__paragraph" v-html="talk.track2.description">
          </p>
        </div>
      </div>
    </collapse-transition>
  </li>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'
const slug = require('slug')

export default {
  name: 'ScheduleItem',
  props: ['talk'],
  components: {
    CollapseTransition
  },
  data: function () {
    return {
      'show': false
    }
  },
  computed: {
    existsTrack1 () {
      return !!this.talk.track1
    },
    existsTrack2 () {
      return !!this.talk.track2
    },
    hasAnyDescripcion () {
      return (this.existsTrack1 && !!this.talk.track1.description) || (this.existsTrack2 && !!this.talk.track2.description)
    }
  },
  methods: {
    sluglify (title) {
      if (!title) {
        return ''
      }
      
      return `${slug(title)}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";
.schedule {
  padding-top: 60px;
  padding-bottom: 60px;
  background-image: url(../public/img/bg-color-1.png);
  background-position: center center;
  background-size: cover;
}

ul {
  padding-left: 0;
}
li {
  list-style-type: none;
}
.schedule__table-item {
  font-size: 18px;
  padding: 0 25px;
  &:nth-child(even) {
    color: white;
  }
  &:nth-child(odd) {
    background-color: white;
  }
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 14px;
  }
  @media (min-width: map-get($grid-breakpoints, md)){
    font-size: 16px;
  }
}

.schedule__table-item-line {
  padding: 16px 0;
  @media (min-width: map-get($grid-breakpoints, sm)){
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 0;
  }
}
.schedule__table-item-track-title{
  display: block;
  white-space: nowrap;
   @media (min-width: map-get($grid-breakpoints, sm)){
    display: none;
  }
}
.schedule__table-item-track {
  position: relative;
   @media (min-width: map-get($grid-breakpoints, sm)){
    padding-left: 15px;
    padding-right: 15px;
    width: 46%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

}

.schedule__table-item-hour {
  width: 100%;
  @media (min-width: map-get($grid-breakpoints, sm)){
    width: 70px;
  }
}
.schedule__table-item-conference {
  padding-bottom: 16px;
  @media (min-width: map-get($grid-breakpoints, sm)){
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: 0 20px;
  }
}

.schedule__table-item-speaker {
  position: absolute;
  top: -10px;
  right: 0;
  @media (min-width: map-get($grid-breakpoints, sm)){
  position: static;
  display: flex;
  align-items: center;
  }
}

.schedule__table-item-speaker-img {
  margin-left: 8px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: solid 3px white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
}

.schedule__table-item-speaker-icon {
  font-size: 12px;
  margin-left: 10px;
}
.schedule__table-item-collapsable {
  padding-bottom: 20px;
  @media (min-width: map-get($grid-breakpoints, sm)){
    display: flex;
    justify-content: space-between;
    padding-left: 70px;
  }
}
.schedule__table-item-collapsable-track {
  padding-left: 15px;
  padding-right: 15px;
}
.schedule__table-item-collapsable-title{
  font-size: 18px;
  line-height: 1em;
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 24px;
  }
}
</style>
