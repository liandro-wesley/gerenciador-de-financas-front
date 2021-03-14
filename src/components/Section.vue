<template>
  <section class="section">
    <header>
      <h2>{{title}}</h2>
    </header>
    <main class="section__content">
      <slot></slot>
    </main>
    <footer
      v-if="type === 'options'"
      class="section__footer"
    >
      <button>Cancelar</button>
      <button>Salvar</button>
    </footer>
  </section>
</template>
<script>
export default {
  name: 'Section',
  props: {
    title: String,
    type: String,
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss">
  @import '@/assets/scss/colors.scss';
  @import '@/assets/scss/breakpoints.scss';

  body[current-theme="light"]{
    .section {
      margin-top: 15px;
      margin-bottom: 15px;
      background-color: $white;
      border-radius: 8px;
      min-height: 150px;
      max-width: 1140px;
      box-shadow: 0px 1px 4px -2px rgba(75, 15, 211, 0.25);

      header {
        background-color: $pink;
        color: $white;
        border-radius: 8px 8px 0px 0px;
        height: 35px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
          font-family: 'Open Sans', sans-serif;
          font-size: 1rem;
        }

        @media only screen and (min-width: $xl) {
          width: 200px;
          border-radius: 8px 0px 0px 0px;
        }
      }
      &__content {
        padding: 10px 8px 10px 8px;
      }
    }
  }
  body[current-theme="dark"]{
    .section {
      margin-top: 15px;
      margin-bottom: 15px;
      background-color: $card-dark-mode;
      color: $white;
      border-radius: 8px;
      min-height: 150px;
      max-width: 1140px;
      box-shadow: 0px 1px 4px -2px rgba(75, 15, 211, 0.25);

      header {
        background-color: $pink;
        color: $white;
        border-radius: 8px 8px 0px 0px;
        height: 35px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        h2 {
          font-family: 'Open Sans', sans-serif;
          font-size: 1rem;
        }

        @media only screen and (min-width: $xl) {
          width: 200px;
          border-radius: 8px 0px 0px 0px;
        }
      }
      &__content {
        padding: 10px 8px 10px 8px;
      }
    }
  }
</style>
