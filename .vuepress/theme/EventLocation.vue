<template>
  <div id="where-is" class="where-is">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2 class="section__title">
            ¿Dónde es?
          </h2>
        </div>
        <div class="col-sm-12">
          <p class="section__paragraph">
            {{data.eventLocation.text}}
          </p>
          <p class="section__paragraph" v-if="data.eventLocation.url">
            <a :href="data.eventLocation.url" target="_blank" >
              Información de cómo llegar
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="map-container">
      <googlemaps-map
        ref="map"
        class="map-container__map"
        :center="data.eventLocation"
        :zoom="data.zoom">
        <googlemaps-marker
          :title="data.eventLocation.marker"
          :label="data.eventLocation.marker"
          :position="data.eventLocation" />
      </googlemaps-map>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EventLocation',
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.vue-google-map {
	position: relative;
}
.vue-google-map .map-view {
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
  position: absolute;  
}
.vue-google-map .hidden-content {
	display: none;
}

.map-view {
  height: 100% !important;
}

.where-is{
  padding-top: 60px;
}
.map-container {
  margin: 0;
  padding: 0;
	height: 50vh;
	display: flex;
	flex-direction: column;
}

.map-container__map {
	flex: 100% 1 1;
}

</style>
