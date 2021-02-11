<template>
  <div class="settings">
    <NavbarMobile
      :navigationLevel="1"
    />
    <main>
      <p>Esta será a tela de configurações da aplicação</p>
    </main>
    <NavbarMobile
      :navigationLevel="2"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMobile from '@/components/NavbarMobile.vue';

export default {
  name: 'Home',
  components: {
    NavbarMobile,
  },
};
</script>
<style lang="scss">
  .settings {
    width: 100%;
    height: 100%;

    main {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
    }
  }
</style>
