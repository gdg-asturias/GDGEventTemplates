<template>
    <div class="col-xs-6 col-sm-4 organizer-item">
      <img v-lazy="organizer.image" class="organizer-item__picture">
      <h3>
        <span class="organizer-item__name">
          {{organizer.name}}
        </span>
        <span class="organizer-item__name--surname">
          {{organizer.surname}}
        </span>
      </h3>
      <h3>
        <span class="organizer-item__name--subtitle">
          {{organizer.subtitle}}
        </span>
      </h3>
      <div class="organizers-item__rrss">
        <a v-if="organizer.twitter" class="section__rrss-item" :href="organizer.twitter" target="_blank" >
          <span class="icon-twitter"></span>
        </a>
        <a v-if="organizer.linkedin" class="section__rrss-item" :href="organizer.linkedin" target="_blank" >
          <span class="icon-linkedin"></span>
        </a>
        <a v-if="organizer.facebook" class="section__rrss-item" :href="organizer.facebook" target="_blank" >
          <span class="icon-facebook"></span>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'organizersItem',
  props: ['organizer']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";
.organizer-item {
  padding-top: 20px;
  padding-bottom: 40px;
  min-height: 267px;
  text-align: center;
  &:last-child {
      border: none;
    }
}
.organizer-item__social{
  text-align: center;
  padding-bottom: 30px;
}

.organizers-item__rrss{
  text-align: center;
}

h3 {
  min-height: 50px;
  @media (min-width: map-get($grid-breakpoints, sm)){
    min-height: auto;
  }
}

.organizer-item__name {
  font-size: 14px;
  text-transform: uppercase;
  color: $azul;
  @media (min-width: map-get($grid-breakpoints, sm)){
    font-size: 16px;
  }
}

.organizer-item__name--surname {
  @extend .organizer-item__name;
}
.organizer-item__name--subtitle {
  @extend .organizer-item__name;
  color: black;
}

.organizer-item__picture {
  border-radius: 50%;
  width: 100px;
  height: 100px;

}

</style>
