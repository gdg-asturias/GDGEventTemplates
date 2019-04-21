<template>
  <div class="faq" id="faq">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="section__title--white">
            FAQ
          </h2>
        </div>
        <div class="col-xs-12 faq__table">
          <ul>
            <faq-item v-for="(faq, index) in faqs" :key="index" :faq="faq" ></faq-item>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  created () {
    this.$http.get('./static/data/faq.json').then(response => {
      this.faqs = response.body
    })
  },
  data: function () {
    return {
      'faqs': []
    }
  },
  components: {
    'faq-item': (resolve) => require(['./FaqItem'], resolve)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_vars.scss";
.faq {
  padding-top: 60px;
  padding-bottom: 50px;
  background-image: url(../assets/img/wtm-asturias-bg-color-2.png);
  background-position: center center;
  background-size: cover;
}

ul {
  padding-left: 0;
}

</style>
