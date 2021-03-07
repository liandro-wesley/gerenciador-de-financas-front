<template>
  <div>
    <header class="navbar-mobile navbar-mobile__primary"
      v-if="navigationLevel === 1"
    >
    <div class="navbar-mobile__primary__profile">
      <div class="navbar-mobile__primary__profile__col">
        <div class="navbar-mobile__primary__profile__col--1">
          <img src="https://www.github.com/liandro-wesley.png" alt="Foto de perfil">
        </div>
        <div class="navbar-mobile__primary__profile__col--2">
          <span>
            {{settingsForProfile.name.firstName}}
          </span>
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
            <span class="sr-only">Icon for menu</span>
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
              <span class="sr-only">Icon for menu</span>
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
        name: {
          firstName: 'Liandro',
          surName: 'Wesley',
        },
      },

      navigationStructurePrimary: [
        {
          route: '/settings',
          icon: 'fas fa-cog',
        },
        {
          route: '/logout',
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
          display: flex;
          align-items: center;
          color: $white;
          &--1{
            border-radius: 100%;
            background-color: $white;
            width: 47px;
            height: 47px;
            display: flex;
            justify-content: center;
            border: 2px solid $white;
            img {
              width: 100;
              object-fit: cover;
              border-radius: 100%;

            }
          }
          &--2 {
            padding-left: 8px;
            display: flex;
            align-items: center;
            span{
              font-family: 'Open Sans', sans-serif;
              font-weight: 600;
              font-size: 1.125rem;
            }
          }
        }

      }

    }
    &__secondary {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 0 30px;
      margin-top: 60px;

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
            &.router-link-exact-active {
              background-color: #4B0FD3;
              border-radius: 4px;
              color: $white;
            }
            &:hover {
              background-color: #4B0FD3;
              border-radius: 4px;
              color: $white;
            }
          }

        }

      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }

    }
    @media only screen and (min-width: $lg) {
      display: none;
    }
  }
</style>
