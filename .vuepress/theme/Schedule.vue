<template>
<div class="schedule" id="schedule">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h2 class="section__title--white">
          Agenda
        </h2>
      </div>
      <div class="col-xs-12">
        <p class="section__paragraph" v-html="scheduleIntro">
        </p>
      </div>
      <div class="col-xs-12 schedule__table-header">
        <h3>
          track 1
        </h3>
        <h3>
          track 2
        </h3>
      </div>
      <div class="col-xs-12 schedule__table">
        <ul>
          <schedule-item v-for="talk in schedule" :key="talk.hour" :talk="talk"></schedule-item>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Schedule',
  components: {
    'schedule-item': (resolve) => require(['./ScheduleItem'], resolve)
  },
  computed: {
    schedule() {
      return this.$page.frontmatter.schedule
    },
    scheduleIntro() {
      return this.$page.frontmatter.scheduleIntro
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
.schedule__table-header {
    display: none;
   @media (min-width: map-get($grid-breakpoints, sm)){
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 70px;
    color: #fff;
    text-transform: uppercase;
  }
}
ul {
  padding-left: 0;
}
</style>
