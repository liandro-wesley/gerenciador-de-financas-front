<template>
  <div class="home">
    <NavbarMobile
      :navigationLevel="1"
    />
    <main>
      <p>Calma jovem Padawan...</p>
      <small>Aguarde as cenas dos próximos capítulos</small>
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
  .home {
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
