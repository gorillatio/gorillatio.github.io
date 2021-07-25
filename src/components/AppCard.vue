<template lang="pug">
  section.card
    header.card-header
      h3.card-header-title(v-html="title")
    a.card-image(
      v-if="image"
      :href="link"
      :aria-label="'Link to ' + link"
      target="_blank"
      rel="noopener noreferrer"
    )
      figure.image.is-16by9
        img(:src="image" :alt="'Image for '+link")
    .card-image(v-if="youtube")
      figure.image.is-16by9
        iframe.has-ratio(title="YouTube" width="640" height="360" :src="youtube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.card-content.has-text-left(v-html="content")
    footer.card-footer
      a.card-footer-item(
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
      )
        | View on {{ title }}

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title:  {
      type: String,
      required: false,
      default: ''
    },
    content:  {
      type: String,
      required: false,
      default: ''
    },
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
