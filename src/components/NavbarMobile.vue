<template>
  <div>
    <header class="navbar-mobile"
      v-if="navigationLevel === 1"
    >
    <div class="navbar-mobile__profile">
      <div class="navbar-mobile__profile__col">
        <div class="navbar-mobile__profile__col--1">
          foto
        </div>
        <div class="navbar-mobile__profile__col--2">
          <span>Liandro</span>
        </div>
      </div>
    </div>
    <nav
      aria-label="Primary Menu"
      class="navbar-mobile__navigation"
    >
      <ul>
        <li
          v-for="navigationStructure in navigationStructurePrimary"
          :key="navigationStructure.route"
        >
          <a :href="navigationStructure.route"><i :class="navigationStructure.icon"></i></a>
        </li>
      </ul>
    </nav>
  </header>
    <header class="navbar-mobile"
      v-if="navigationLevel === 2"
    >
      <nav
        aria-label="Secondary Menu"
        class="navbar-mobile__navigation"
      >
        asdas
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'NavbarMobile',
  props: {
    navigationLevel: Number,
  },
  data() {
    return {
      navigationStructurePrimary: [
        {
          route: '/about',
          icon: 'fas fa-cog',
        },
        {
          route: '/abouts',
          icon: 'fas fa-power-off',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/colors.scss';
@import '@/assets/scss/breakpoints.scss';

  .navbar-mobile {
    display: flex;
    justify-content:space-between;
    align-content: center;
    background-color: $purple;
    color: $white;
    padding-left: 5px;
    padding-right: 5px;
    height: 60px;
    &__profile, &__navigation {
      display: flex;
      align-items: center;
    }
    &__profile {
      width: 100%;
      height: 100%;
    }
    &__navigation {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      ul {
        display: inherit;
      }
      li {
          display: flex;
          justify-content:center;
          align-items:center;
          margin-right: 10px;
      }
      a {
        color: $purple-icon;
        font-size:24px;
        padding: 8px;
        &:hover {
          background-color: #4B0FD3;
          border-radius: 4px;
          color: $white;
        }
      }
    }
    @media only screen and (min-width: $lg) {
      display: none;
    }
  }
</style>
