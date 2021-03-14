<template>
    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :id="id"
      :aria-label="label"
    />
</template>
<script>
export default {
  props: {
    type: String,
    placeholder: String,
    label: String,
    name: String,
    id: String,
  },
};
</script>
<style lang="scss">
  @import '@/assets/scss/colors.scss';
  @import '@/assets/scss/breakpoints.scss';

  .input {
    border: 1px solid $gray;
    outline: none;
    border-radius: 4px;
    max-width: 525px;
    width: 100%;
    padding: 8px 15px;
    box-sizing: border-box;
    color: $black;
  }
  .input[placeholder] {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }
</style>
