<template>
  <form class="personal-info">
    <main class="personal-info__main">
      <div class="personal-info__main personal-info__main__text-field">
        <Inputs
          type="text"
          placeholder="Insira um novo nome"
          name="new-name"
          id="new-name"
          label="Insira um novo nome"
        />
        <Inputs
          type="text"
          placeholder="Insira um novo sobrenome"
          name="new-surname"
          id="new-surname"
          label="Insira um novo sobrenome"
        />
      </div>
    </main>
    <footer class="personal-info__footer">
      <Buttons
        type="button"
        dimension="normal"
        color="outlined-secondary"
        :action="submit"
      >
        Cancelar
      </Buttons>
      <Buttons
        type="button"
        :submit="false"
        dimension="normal"
        color="solid-primary"
        :action="submit"
      >
        Salvar
      </Buttons>
    </footer>
  </form>
</template>
<script>
import Buttons from '@/components/Buttons.vue';
import Inputs from '@/components/Inputs.vue';

export default {
  name: 'AreaPerigosa',
  components: {
    Buttons,
    Inputs,
  },
  data() {
    return {
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      console.log('Enviado');
    },
  },
};
</script>
<style lang="scss">
  @import '@/assets/scss/breakpoints.scss';

  .personal-info {
    &__main {
      #new-name, #new-surname {margin-bottom: 10px;}
      /* &__text-field {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 45px;
        margin-top: 34px;
      } */
      @media only screen and (min-width: $lg) {
        &__text-field {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 45px;
          margin-top: 34px;
        }
      }
    }
    &__footer {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      width: 100%;
      margin-top: 50px;
      @media only screen and (min-width: $lg) {
        display: flex;
        justify-content: flex-end;
        margin-top: 77px;
        .Buttons {
          width: 200px;
        }
      }
    }
  }

</style>
