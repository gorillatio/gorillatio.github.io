<template lang="pug">
  div
    header
      AppHeader
    main
      nuxt
    footer
      AppFooter
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
export default Vue.extend({
  components: {
    AppHeader,
    AppFooter
  },
  head () {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  }
})
</script>
