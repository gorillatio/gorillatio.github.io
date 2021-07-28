<template lang="pug">
  section#footer.hero.is-black
    .hero-body
      .container
        .columns
          .column
            p.title
              nuxt-link(v-scroll-to="'#introduction'" :to="localePath('/')")
                | Gorillatio
            p.content.icon-text
              span Handcrafted with
              span.icon
                fa-icon(icon="heart")
              span by Tsunemaru
            p.content
              LocaleSelect
          .column
            SocialButtons(buttonClasses="is-white")
</template>

<script lang="ts">
import Vue from 'vue'
import SocialButtons from '~/components/SocialButtons.vue'
import LocaleSelect from '~/components/LocaleSelect.vue'

export default Vue.extend({
  components: {
    SocialButtons,
    LocaleSelect
  }
})
</script>
