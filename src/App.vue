<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/colors.scss';

body {
  background-color: $gray-bg;
  color: $black;
}
#app {
  width: 100%;
  height: 100%;
}

</style>
