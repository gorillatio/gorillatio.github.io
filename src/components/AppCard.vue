<template lang="pug">
  section.card
    header.card-header(v-if="$slots.head")
      h4.card-header-title
        slot(name="head")
    a(:href="link" target="_blank").card-image
      figure.image.is-16by9
        img(:src="image")
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
      required: true
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
</style>
