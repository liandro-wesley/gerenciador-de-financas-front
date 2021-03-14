<template>
  <section class="error-404">
    <h1>Oops!</h1>
    <p>Nós não conseguimos localizar a página que você procura</p>
    <Buttons
      type="link"
      dimension="normal"
      color="outlined-white"
      action="/"
    >
      Ir à home
    </Buttons>
  </section>
</template>

<script>
import Buttons from '@/components/Buttons.vue';

export default {
  name: 'PageNotFound',
  components: {
    Buttons,
  },
};

</script>

<style lang="scss" scoped>
  @import '@/assets/scss/colors.scss';
  @import '@/assets/scss/breakpoints.scss';

  .error-404 {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    background-color: $purple-light;
    color: $white;
    width: 100%;
    height: 100%;

    h1 {
      font-size: 72px;
      font-weight: 600;
      line-height: 6.75rem;
    }

    p {
      font-size: 24px;
      font-weight: 600;
      line-height: 2rem;
      max-width: 431px;
      text-align: center;
      margin-bottom: 52px;
    }
  }
</style>
