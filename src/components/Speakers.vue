<template>
  <div class="container speakers" id="speakers">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          Speakers
        </h2>
      </div>
      <div class="col-xs-12">
        <speaker-item v-for="speaker in speakers" :speaker="speaker" :key="speaker.id"></speaker-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Speakers',
  components: {
    'speaker-item': (resolve) => require(['./SpeakersItem'], resolve)
  },
  created () {
    const shuffle = require('shuffle-array')

    this.$http.get('./static/data/speakers.json').then(response => {
      this.speakers = shuffle(response.body)
    })
  },
  data () {
    return {
      'speakers': []
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
