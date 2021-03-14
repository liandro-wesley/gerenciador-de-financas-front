<template>
  <div class="Buttons">
    <router-link
      v-if="type === 'link'"
      :to="action"
      :class="` ${classe} btn btn--${dimension} btn__link btn__link--${color}`"
    >
      <slot></slot>
    </router-link>
    <button
      v-if="type === 'button' && submit === false"
      @click="action"
      :class="`btn btn--${dimension} btn__button btn__button--${color}`"
    >
      <slot></slot>
    </button>
    <button
      v-if="type === 'button' && submit === true"
      type="submit"
      :class="`btn btn--${dimension} btn__button btn__button--${color}`"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
    type: String,
    submit: Boolean,
    action: Function || String,
    color: String,
    dimension: String,
    className: String,
  },
};
</script>
<style lang="scss">
  @import '@/assets/scss/colors.scss';
  @import '@/assets/scss/breakpoints.scss';

  div.Buttons {
    display: inline-block;
  }

  .btn {
    &--normal {
      max-width: 100%;
      width: 100%;
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.125rem;
    }
    &--small {
      padding: 5px 20px;
      font-size: 0.875rem;
    }
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.3s;
    outline: none !important;
    cursor: pointer;
    border: none;
    background-color: #fff;

    &__link {
      text-decoration: none;
      &--solid-primary{
          background-color: $purple;
          color: $white;
          &:hover {
            filter: brightness(0.9);
          }
      }
      &--solid-secondary{
          background-color: $pink;
          color: $white;
          &:hover {
            filter: brightness(0.9);
          }
      }
      &--solid-white{
        color: $black;
        background-color: $white;
          &:hover {
            filter: brightness(0.9);
          }
      }
      &--outlined-primary{
          color: $purple;
          border: 2px solid $purple;
          &:hover {
            background-color: $purple;
            color: $white;
          }
      }
      &--outlined-secondary{
          color: $pink;
          border: 2px solid $pink;
          &:hover {
            background-color: $pink;
            color: $white;
          }
      }
      &--outlined-white{
          color: $white;
          border: 2px solid $white;
          &:hover {
            background-color: $white;
            color: $black;
          }
      }
    }
    &__button {
      text-decoration: none;
      &--solid-primary{
          background-color: $purple;
          color: $white;
          &:hover {
            filter: brightness(0.9);
          }
      }
      &--solid-secondary{
          background-color: $pink;
          color: $white;
          &:hover {
            filter: brightness(0.9);
          }
      }
      &--solid-white{
        color: $black;
        background-color: $white;
          &:hover {
            filter: brightness(0.9);
          }
      }
      &--outlined-primary{
          color: $purple;
          border: 2px solid $purple;
          &:hover {
            background-color: $purple;
            color: $white;
          }
      }
      &--outlined-secondary{
          color: $pink;
          border: 2px solid $pink;
          &:hover {
            background-color: $pink;
            color: $white;
          }
      }
      &--outlined-white{
          color: $white;
          border: 2px solid $white;
          &:hover {
            background-color: $white;
            color: $black;
          }
      }
    }
  }
</style>
