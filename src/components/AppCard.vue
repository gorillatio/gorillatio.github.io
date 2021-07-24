<template lang="pug">
  section.card
    header.card-header(v-if="$slots.head")
      h4.card-header-title
        slot(name="head")
    a(:href="link" target="_blank" v-if="image").card-image
      figure.image.is-16by9
        img(:src="image")
    .card-image(v-if="youtube")
      figure.image.is-16by9
        iframe.has-ratio(width="640" height="360" :src="youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.card-content.has-text-left(v-if="$slots.content")
      slot(name="content")
    footer.card-footer(v-if="$slots.footer")
      a(:href="link" target="_blank" class="card-footer-item")
        slot(name="footer")

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    image: {
      type: String,
      required: false,
      default: ''
    },
    youtube: {
      type: String,
      required: false,
      default: ''
    },
    link: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
  .card
    .card-content
      .title, .subtitle
        color: #000
  .image
    background-color #000
    img
      opacity .95

</style>
