<template lang="pug">
  nuxt-link(:to="to" @click.native="scroll")
    slot
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    scroll() {
      let top = 0

      if (this.to.startsWith('#')) {
        const el = document.querySelector(this.to) as HTMLElement
        top = el.offsetTop
      }

      if ('scrollBehavior' in document.documentElement.style) {
        return window.scrollTo({ top: top, behavior: 'smooth' })
      } else {
        return window.scrollTo(0, top)
      }
    }
  }
})
</script>
