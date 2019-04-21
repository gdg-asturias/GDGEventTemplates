<template>
  <section class="newsletter">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <h4>¡Apúntate a nuestra newsletter!</h4>
        </div>
        <div class="col-md-6 col-xs-12 newsletter-form-container ">
          <form action="https://asturvalley.us1.list-manage.com/subscribe/post?u=f10809b78bdc8e15b8261a06d&amp;id=349bf4b4c1" method="post">
            <input type="email" name="EMAIL" placeholder="Introduce tu email">
            <button class="button" type="submit">Apúntate</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter',
  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "./styles/_vars.scss";

.newsletter {
  background-color: $gris-2;
  color: white;
}

.newsletter-form-container {
  display: flex;
  justify-content: center;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
}

form {
  color: black;
}

input[type="email"] {
  border: none;
  font-size: 18px;
  padding: 7px;
  @media (max-width: map-get($grid-breakpoints, sm)) {
    width: 50%;
  }
}

.button {
   background-color: rgba($naranja, 0.8);
   white-space: nowrap;
   border: none;
   color: white;
   font-size: 18px;
   font-weight: lighter;
   padding: 8px 20px;
   margin: 10px;
   &:focus {
     outline: none;
   }
   &:hover {
     background-color: rgba($naranja, 1);
     color: white;
     text-decoration: none;
   }
}

h4 {
  font-size: 24px;
}

</style>
