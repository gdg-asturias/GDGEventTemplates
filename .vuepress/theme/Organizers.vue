<template>
  <div class="container speakers" id="team">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title">
          Equipo
        </h2>
      </div>
      <ClientOnly>
        <OrganizersItem v-for="(organizer, index) in organizers" :organizer="organizer" :key="index"></OrganizersItem>
        <OrganizersItem v-for="(organizer, index) in volunteers" :organizer="organizer" :key="index"></OrganizersItem>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import OrganizersItem from './OrganizersItem'

export default {
  name: 'Organizers',
  components: {
    OrganizersItem
  },
  computed: {
    organizers () {
      const shuffle = require('shuffle-array')
      return shuffle(this.$page.frontmatter.organizers)
    },
    volunteers () {
      const shuffle = require('shuffle-array')
      return shuffle(this.$page.frontmatter.volunteers)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
  .speakers {
    padding-top: 60px;
  }
</style>
