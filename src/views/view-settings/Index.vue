<template>
  <div class="settings">
    <NavbarMobile
      :navigationLevel="1"
    />
    <main class="settings__main">
      <Section
        title="Informação pessoal"
      >
        <PersonalInfo/>
      </Section>
      <Section
        title="Acessibilidade"
      >
        Aqui entrará recursos de acessibilidade
      </Section>
      <Section
        title="Recursos da app"
      >
        Aqui entrará recursos da aplicação
      </Section>
      <Section
        title="Área perigosa"
      >
      </Section>
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
import Section from '@/components/Section.vue';

/* Importação de componentes locais */
import PersonalInfo from './components/PersonalInfo.vue';

export default {
  name: 'Home',
  components: {
    NavbarMobile,
    Section,
    PersonalInfo,
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/breakpoints.scss';
  .settings {
    width: 100%;
    height: 100%;

    &__main {
      padding: 0px 5px 5px 5px;
    }
    .helper {
      height: 120px;
    }
  }
</style>
