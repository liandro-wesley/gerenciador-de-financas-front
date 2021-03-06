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
body[current-theme="dark"]{
  background-color: $body-dark-mode;
  color: $white;
}
#app {
  width: 100%;
  height: 100%;
}

</style>
