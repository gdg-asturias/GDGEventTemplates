<template>
  <li class="faq__table-item" @click="show = !show">
    <div v-show="!show" class="faq__table-item-line">
      <div class="faq__table-item-conference">
        {{faq.question}}
      </div>
      <div class="faq__table-item-speaker">
        <span class="faq__table-item-speaker-icon icon-arrow-down"></span>
      </div>
    </div>
    <collapse-transition>
      <div v-show="show" class="faq__table-item-collapsable">
        <h3 v-show="show" class="faq__table-item-collapsable-title">
          {{faq.question}}
        </h3>
        <p class="section__paragraph" v-html="faq.answer"></p>
      </div>
    </collapse-transition>
  </li>
</template>

<script>
import { CollapseTransition } from 'vue2-transitions'

export default {
  name: 'FaqItem',
  props: ['faq'],
  components: {
    CollapseTransition
  },
  data: function () {
    return {
      'show': false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";

li {
  list-style-type: none;
}
.faq__table-item {
  font-size: 18px;
  color:white;
  border-bottom: 1px solid rgba(255,255,255,0.5);
  &:last-child {
    border: none;
  }
}

.faq__table-item-line {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}

.faq__table-item-conference {
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  width: 100%;
  padding: 0 20px 0 0;
}

.faq__table-item-speaker-icon {
  font-size: 12px;
  margin-left: 10px;
}
.faq__table-item-collapsable {
  padding-bottom: 20px;
  cursor: pointer;
}

.faq__table-item-collapsable-title{
    margin-top: 10;
    font-size: 30px;
    line-height: 1em;
      @media (min-width: map-get($grid-breakpoints, sm)){
        font-size: 40px;
      }
  }
</style>
