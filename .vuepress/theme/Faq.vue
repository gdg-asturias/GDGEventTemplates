<template>
  <div class="faq" id="faq">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title">
            FAQ
          </h2>
        </div>
        <div class="col-xs-12 faq__table">
          <ul>
            <FaqItem v-for="(faq, index) in faqs" :key="index" :faq="faq"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FaqItem from './FaqItem'

export default {
  name: 'Faq',
  components: {
    FaqItem
  },
  computed: {
    faqs () {
      return this.$page.frontmatter.faqs
    },
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";
.faq {
  padding-top: 60px;
  padding-bottom: 50px;
  background-position: center center;
  background-size: cover;
  background-image: url('../public/img/bg-color-2.png');
  color: white;
}

ul {
  padding-left: 0;
}

</style>
