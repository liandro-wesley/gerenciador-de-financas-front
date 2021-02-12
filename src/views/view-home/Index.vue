<template>
  <div class="home">
    <NavbarMobile
      :navigationLevel="1"
    />
    <main>
      <section class="resume">
        <Cards
          :cards="{type: 'total', title: 'Saldo em conta', value: 'R$ 3.000,00'}"
        />
        <Cards
          :cards="{
            type: 'saidas',
            title: 'Saídas',
            value: 'R$ 1.000,00',
          }"
        />
        <Cards
          :cards="{
            type: 'agendados',
            title: 'Agendados',
            value: 'R$ 1.000,00',
          }"
        />
        <Cards
          :cards="{
            type: 'entradas',
            title: 'Entradas',
            value: 'R$ 3.000,00',
          }"
        />
      </section>
    </main>
    <div class="helper"></div>
    <NavbarMobile
      :navigationLevel="2"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMobile from '@/components/NavbarMobile.vue';
import Cards from '@/components/Cards.vue';

export default {
  name: 'Home',
  components: {
    NavbarMobile,
    Cards,
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/breakpoints.scss';
  .home {
    width: 100%;
    height: 100%;
    .helper {
      height: 120px;
    }

    .resume {
      padding: 14px 5px 5px 5px;
      display: block;
      @media screen  and (min-width: $sm){
        max-width: 50%;
        margin: 0 auto;
      }
      @media screen  and (min-width: $lg){
        .helper {
          display: none;
        }
        padding: 0 10px;
        display: grid;
        grid-template-columns: 240px 240px 240px 240px;
        gap: 10px;
        margin: 0;
        max-width: none;
        display: none;
      }
    }

  }
</style>
