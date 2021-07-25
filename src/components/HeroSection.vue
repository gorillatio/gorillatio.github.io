<template lang="pug">
  .hero.is-fullheight
    aside.hero-head(v-if="previousSectionId")
      nav.has-text-centered
        ScrollButton(:to="previousSectionId" :color="color") {{ previousSectionTitle }}
    .hero-body
      .container.is-fluid
        section
          h2.title.has-text-centered(v-html="title")
          p.subtitle.has-text-centered(v-if="subtitle" v-html="subtitle")
          slot
    aside.hero-foot(v-if="nextSectionId")
      nav.has-text-centered
        ScrollButton(:to="nextSectionId" :color="color") {{ nextSectionTitle }}
</template>

<script lang="ts">
import Vue from 'vue'
import ScrollButton from '~/components/ScrollButton.vue'

export default Vue.extend({
  components: {
    ScrollButton
  },
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
    },
    nextSectionId: {
      type: String,
      required: false,
      default: ''
    },
    nextSectionTitle: {
      type: String,
      required: false,
      default: ''
    },
    previousSectionId: {
      type: String,
      required: false,
      default: ''
    },
    previousSectionTitle: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: '#000'
    },
  }
})
</script>

<style lang="stylus" scoped>
  .hero
    padding-top 3.25rem
    background-position center center
    background-repeat no-repeat
    background-size cover
    background-attachment fixed

  @media (hover: none)
    .hero
      background-attachment: scroll
    .hero-head, .hero-foot
      display none
</style>
