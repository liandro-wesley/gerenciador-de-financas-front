<template>
  <div>
    <header class="navbar-mobile navbar-mobile__primary"
      v-if="navigationLevel === 1"
    >
    <div class="navbar-mobile__primary__profile">
      <div class="navbar-mobile__primary__profile__col">
        <div class="navbar-mobile__primary__profile__col--1">
          foto
        </div>
        <div class="navbar-mobile__primary__profile__col--2">
          <span>Liandro</span>
        </div>
      </div>
    </div>
    <nav
      aria-label="Primary Menu"
      class="navbar-mobile__navigation navbar-mobile__navigation__primary"
    >
      <ul>
        <li
          v-for="navigationStructure in navigationStructurePrimary"
          :key="navigationStructure.route"
        >
          <router-link :to="navigationStructure.route">
            <i :class="navigationStructure.icon"></i>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <header class="navbar-mobile navbar-mobile__secondary"
      v-if="navigationLevel === 2"
  >
      <nav
        aria-label="Secondary Menu"
        class="navbar-mobile__navigation navbar-mobile__navigation__secondary"
      >
        <ul>
          <li
            v-for="navigationStructure in navigationStructureSecondary"
            :key="navigationStructure.route"
          >
            <router-link :to="navigationStructure.route">
              <i :class="navigationStructure.icon"></i>
            </router-link>
          </li>
        </ul>
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
      settingsForProfile: {
        src: '',
      },

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

      navigationStructureSecondary: [
        {
          route: '/',
          icon: 'fas fa-home',
        },
        {
          route: '/entradas',
          icon: 'fas fa-arrow-up',
        },
        {
          route: '/saidas',
          icon: 'fas fa-arrow-down',
        },
        {
          route: '/metas',
          icon: 'fas fa-chart-bar',
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
    align-content: center;
    justify-content:space-between;
    background-color: $purple;
    color: $white;
    height: 60px;

    &__primary {
      padding-left: 5px;
      padding-right: 5px;

      &__profile {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;

        &__col {
          color: $white;
        }

      }

    }
    &__secondary {
      position: fixed;
      z-index: 1;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 0 30px;

      li {
        margin-right: 30px !important;
        &:last-of-type {
          margin-right: 0 !important;
        }
      }
    }

    &__navigation {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;

      &__primary {
        justify-content: flex-end;
      }
      &__secondary {
        justify-content: center;
      }

      ul {
        display: inherit;

        li {
          display: flex;
          justify-content:center;
          align-items:center;
          margin-right: 10px;

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

      }

    }
    @media only screen and (min-width: $lg) {
      display: none;
    }
  }
</style>
