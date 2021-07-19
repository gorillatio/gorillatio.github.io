<template lang="pug">
  a.scroll-button(v-scroll-to="to" to='#' :style="style")
    p.up(v-if="direction=='up'")
      - for (var i=0; i<3; i++)
        span
    p.label
      slot
    p.down(v-if="direction=='down'")
      - for (var i=0; i<3; i++)
        span

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    color: {
      type: String,
      required: false,
      default: '#fff'
    },
    to: {
      type: String,
      required: false,
      default: '#'
    },
    direction: {
      type: String,
      required: false,
      default: 'down',
      validator(val: string) {
        return ['down', 'up'].includes(val)
      }
    }
  },
  computed: {
    style() {
      return {
        '--color': this.color
      }
    }
  }
})
</script>

<style lang="stylus" scoped>
.scroll-button
  display inline-block
  padding 1rem

  p.label
    color: var(--color)
    font-size .6rem

  p.up > span
    border-right 1px solid var(--color)
    border-top 1px solid var(--color)
    for i in 1..3
      &:nth-of-type({4 - i})
        animation-delay: (i*0.15)s

  p.down > span
    border-left 1px solid var(--color)
    border-bottom 1px solid var(--color)
    for i in 1..3
      &:nth-of-type({i})
        animation-delay: (i*0.15)s

  p.up > span, p.down > span
    display block
    width .8rem
    height .8rem
    margin 0 auto
    transform: rotate(-45deg)

    animation: pulse 2s infinite
    opacity: 0

    &:not(:last-child)
      margin-bottom -.2rem

@keyframes pulse
  for i in 0..2
    {i*50%}
      opacity (i%2)
</style>
