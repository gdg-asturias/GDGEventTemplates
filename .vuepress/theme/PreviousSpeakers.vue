<template>
  <div class="container speakers" id="previous-speakers">
    <div class="row">
      <div class="col-xs-12">
        <h3 class="section__subtitle">
          Ediciones Anteriores
        </h3>
      </div>
      <div class="col-xs-12">
        <div class="previous-speakers-container">
          <ClientOnly>
            <PreviousSpeakersItem v-for="speaker in speakers" :speaker="speaker" :key="speaker.id"></PreviousSpeakersItem>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviousSpeakersItem from './PreviousSpeakersItem'

export default {
  name: 'Speakers',
  components: {
    PreviousSpeakersItem
  },
  computed: {
    speakers () {
      const shuffle = require('shuffle-array')
      return shuffle(this.$page.frontmatter.previousSpeakers)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
  .speakers {
    padding-top: 60px;
  }

  .previous-speakers-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
