<template>
  <div class="row speaker-item" :id="speaker.slug">
    <div class="col-xs-12 col-sm-4 speaker-item__social">
      <img v-lazy="speaker.image" class="speaker-item__picture">
      <div class="speakers-item__rrss">
        <a v-if="speaker.twitter" class="section__rrss-item" :href="speaker.twitter" target="_blank" >
          <span class="icon-twitter"></span>
        </a>
        <a v-if="speaker.linkedin" class="section__rrss-item" :href="speaker.linkedin" target="_blank" >
          <span class="icon-linkedin"></span>
        </a>
      </div>
    </div>
    <div class="col-xs-12 col-sm-8">
      <h3>
        <span class="speaker-item__name">
          {{speaker.name}}
        </span>
        <span class="speaker-item__name--surname">
          {{speaker.surname}}
        </span>
      </h3>
      <h4>
        {{speaker.work}}
      </h4>
      <p class="section__paragraph" v-html="speaker.about">
      </p>
      <p v-if="speaker.talk && speaker.talk.title">
        <span class="speaker-item__speaking-in">
          <template v-if="speaker.talk.workshop">
            Taller:
          </template>
          <template v-else>
            Charla:
          </template>
        </span>
        <ClientOnly>
          <a :href="sluglify(speaker.talk.title)" v-scroll-to="sluglify(speaker.talk.title)">
            {{speaker.talk.title}}
          </a>
        </ClientOnly>
      </p>
      <p v-if="speaker.talk && speaker.talk.titles" v-for="(title,index) in speaker.talk.titles" :key="index">
        <span class="speaker-item__speaking-in">
          <template v-if="speaker.talk.workshop">
            Taller:
          </template>
          <template v-else>
            Charla:
          </template>
        </span>
        <ClientOnly>
          <a :href="sluglify(title)" v-scroll-to="sluglify(title)">
            {{title}}
          </a>
        </ClientOnly>
      </p>
    </div>
  </div>
</template>

<script>
const slug = require('slug')

export default {
  name: 'SpeakersItem',
  props: ['speaker'],
  methods: {
    sluglify (title) {
      if (!title) {
        return ''
      }

      return `#${slug(title)}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";
.speaker-item {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: #4385F5 1px solid;
  &:last-child {
      border: none;
    }
}

.speaker-item__social{
  text-align: center;
}

.speakers-item__rrss{
  text-align: center;
}

.speaker-item__name {
  color: $azul;
  font-size: 30px;
  text-transform: uppercase;
  line-height: 1em;
  margin: 0 0 30px 0;
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 40px;
  }
}

.speaker-item__name--surname {
  @extend .speaker-item__name;
}

.speaker-item__picture {
  border: 1px solid $azul;
  border-radius: 50%;
  width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.speaker-item__speaking-in {
  color: $naranja;
  font-weight: 700;
  text-transform: uppercase;
}

</style>
