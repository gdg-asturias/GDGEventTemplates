<template>
    <countdown class="countdown-container" :time="time" v-if="time > 0">
      <template slot-scope="props">
        <div>
          <span class="countdown-item">
            <span>
              {{ props.days }}
            </span>
            <span v-if="props.days > 1 || props.days === 0">
              días
            </span>
            <span v-else>
              día
            </span>
          </span>
          <span class="countdown-item">
            <span>
              {{ props.hours }}
            </span>
            <span v-if="props.hours > 1 || props.hours === 0">
              horas
            </span>
            <span v-else>
              hora
            </span>
          </span>
          <span class="countdown-item">
            <span>
              {{ props.minutes }}
            </span>
            <span v-if="props.minutes > 1 || props.minutes === 0">
              mins
            </span>
            <span v-else>
              min
            </span>
          </span>
          <span class="countdown-item">
            <span>
              {{ props.seconds }}
            </span>
            <span v-if="props.seconds > 1 || props.seconds === 0">
              segs
            </span>
            <span v-else>
              seg
            </span>
          </span>
        </div>
      </template>
    </countdown>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'CountdonwEvent',
  computed: {
    time () {
      return new Date('12-01-2018 09:30').getTime() - Date.now()
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";

.countdown-container {
  margin-top: 32px;
  color: white;
}

.countdown {
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-content: center;
}

.countdown-item {
  white-space: nowrap;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
}

.countdown-item > p:first-child {
  font-weight: 600;
}
</style>
