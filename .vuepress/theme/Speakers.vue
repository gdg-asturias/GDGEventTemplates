<template>
  <div class="container speakers" id="speakers">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          Speakers
        </h2>
      </div>
      <div class="col-xs-12">
        <ClientOnly>
          <SpeakersItem v-for="speaker in speakers" :speaker="speaker" :key="speaker.id"></SpeakersItem>
        </ClientOnly>
      </div>
      <PreviousSpeakers v-if="$page.frontmatter.showPreviousSpeakers"/>
    </div>
  </div>
</template>

<script>
import SpeakersItem from './SpeakersItem'
import PreviousSpeakers from './PreviousSpeakers.vue'

export default {
  name: 'Speakers',
  components: {
    SpeakersItem,
    PreviousSpeakers
  },
  computed: {
    speakers () {
      const shuffle = require('shuffle-array')
      return shuffle(this.$page.frontmatter.speakers)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
  .speakers {
    padding-top: 60px;
  }
</style>
