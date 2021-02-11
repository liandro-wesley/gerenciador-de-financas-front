<template>
  <div class="logout">
    <NavbarMobile
      :navigationLevel="1"
    />
    <main>
      <p>Em desenvolvimento</p>
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
  .logout {
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
