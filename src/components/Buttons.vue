<template>
  <div>
    <router-link
      v-if="button.type === 'link'"
      :to="button.action"
      class="btn btn__link btn__link__outlined--white"
    >
      {{button.text}}
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'Buttons',
  props: {
    button: {
      type: Object,
      text: Object,
      action: Object,
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

      }

    }
  }
</style>
