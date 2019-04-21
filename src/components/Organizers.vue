<template>
  <div class="container speakers" id="team">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          Equipo
        </h2>
      </div>
      <organizer-item v-for="organizer in organizers" :organizer="organizer" :key="organizer.id"></organizer-item>
      <organizer-item v-for="organizer in volunteers" :organizer="organizer" :key="organizer.id"></organizer-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Organizers',
  components: {
    'organizer-item': (resolve) => require(['./OrganizersItem'], resolve)
  },
  created () {
    const shuffle = require('shuffle-array')

    this.$http.get('./static/data/organizers.json').then(response => {
      this.organizers = shuffle(response.body)
    })

    this.$http.get('./static/data/volunteers.json').then(response => {
      this.volunteers = shuffle(response.body)
    })
  },
  data () {
    return {
      'organizers': [],
      'volunteers': []
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
