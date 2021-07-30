<template lang="pug">
  div
    nav#header.navbar.is-fixed-top.is-black
      .container
        .navbar-brand
          AppLink.navbar-item(:to="localePath('/')" @click.native="isMenuActive=false")
            | Gorillatio
          a.navbar-item.hamburger.is-flex-touch(@click="toggleMenu" :class="{active: isMenuActive}")
            fa-icon(:icon="isMenuActive ? 'times' : 'bars'")
          .navbar-end.is-hidden-touch
            AppLink.navbar-item(to="#about") About
            AppLink.navbar-item(to="#works") Works
            AppLink.navbar-item(to="#contact") Contact

    aside#menu.hero.is-fullheight.is-black(:class="{active: isMenuActive}")
      .hero-body
        .container.has-text-centered
          AppLink.title(:to="localePath('/')" @click.native="toggleMenu") Gorillatio
          p.section
            AppLink.item(to="#about" @click.native="toggleMenu") About
            AppLink.item(to="#works" @click.native="toggleMenu") Works
            AppLink.item(to="#contact" @click.native="toggleMenu") Contact

          LocaleSelect.locale
</template>

<script lang="ts">
import Vue from 'vue'
import AppLink from '~/components/AppLink.vue'
import LocaleSelect from '~/components/LocaleSelect.vue'

export default Vue.extend({
  components: {
    AppLink,
    LocaleSelect
  },
  data() {
    return {
      isMenuActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive
    }
  }
})
</script>

<style lang="stylus" scoped>
.navbar-brand
  width 100%

.hamburger
  margin-left auto
  display none

#header
  z-index 2000

#menu
  position fixed
  background-color rgba(0,0,0,.9)
  color #fff
  width 100%
  padding-top 4.8rem
  z-index 1000

  animation: show 0.3s linear 0s;
  display flex
  opacity 1

  &:not(.active)
    display none
    opacity 0

  a.item
    display block
    width 100%
    padding 1rem
    color #fff
    &:hover
      background-color rgba(0,0,0,.3)
  .locale
    width 100px
    margin-left auto
    margin-right auto

@keyframes show {
  0% {
    opacity 0
  }
  100% {
    opacity 1
  }
}
</style>
