<template lang="pug">
  .hero.is-fullheight
    .hero-body
      .container.is-fluid
        section
          h2.title.has-text-centered(v-html="title")
          p.subtitle.has-text-centered(v-if="subtitle" v-html="subtitle")
          slot
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    subtitle: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>

<style lang="stylus" scoped>
  .hero
    background-attachment fixed
    background-position center center
    background-repeat no-repeat
    background-size cover
    padding-top 3.25rem

  @media (hover: none)
    .hero
      background-attachment: scroll
</style>
