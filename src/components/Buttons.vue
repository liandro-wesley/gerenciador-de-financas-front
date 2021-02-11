<template>
  <div>
    <router-link
      v-if="settings.type === 'link'"
      :to="settings.action"
      :class="'btn btn__link btn__link__' + settings.color"
    >
      {{settings.text}}
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Buttons',
  props: {
    settings: {
      type: Object,
      text: Object,
      action: Object,
      color: Object,
    },
  },
};
</script>
<style lang="scss">
  @import '@/assets/scss/colors.scss';
  @import '@/assets/scss/breakpoints.scss';
  .btn {
    padding: 10px 55px;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s;

    &__link {
      text-decoration: none;

      &__outlined {

        &--white {
          color: $white;
          border: 2px solid $white;
          &:hover {
            background-color: $white;
            color: $black;
          }
        }
        &--purple {
          color: $purple;
          border: 2px solid $purple;
          &:hover {
            background-color: $purple;
            color: $white;
          }
        }
        &--purple-light {
          color: purple-light;
          border: 2px solid purple-light;
          &:hover {
            background-color: purple-light;
            color: $white;
          }
        }

      }

    }
  }
</style>
