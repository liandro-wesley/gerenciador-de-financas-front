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
      <section class="transactions">
        <Section
          title="Ganho x Gasto"
        >
          Aqui entrará um gráfico
        </Section>
        <Section
          title="Transações"
        >
          Aqui entrará o histórico de transação
        </Section>
        <Section
          title="Staus das metas"
        >
          Aqui entrará as metas e os percentuais que falta para completá-las
        </Section>
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
import Section from '@/components/Section.vue';

export default {
  name: 'Home',
  components: {
    NavbarMobile,
    Cards,
    Section,
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
      @media screen  and (min-width: $md){
        max-width: 100%;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
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
    .transactions {
      padding: 0px 5px 5px 5px;
      margin-bottom: 10px;
    }

  }
</style>
