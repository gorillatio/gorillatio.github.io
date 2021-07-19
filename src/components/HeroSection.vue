<template lang="pug">
  .hero(:class="withNavbar ? 'is-fullheight-with-navbar' : 'is-fullheight'")
    .hero-head(v-if="$slots.head")
      slot(name="head")
    .hero-body(v-if="$slots.body")
      slot(name="body")
    .hero-foot(v-if="$slots.foot")
      slot(name="foot")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    withNavbar: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style lang="stylus" scoped>
  .hero
    padding-top 3.25rem
    padding-bottom 3.25rem
    background-position center center
    background-repeat no-repeat
    background-size cover
    background-attachment fixed

  @media (hover: none)
    .hero
      background-attachment: scroll
</style>
