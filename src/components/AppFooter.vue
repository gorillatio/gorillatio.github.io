<template lang="pug">
  section#footer.hero.is-black
    .hero-body
      .container
        .columns
          .column
            p.title
              AppLink(:to="localePath('/')")
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
import AppLink from '~/components/AppLink.vue'
import LocaleSelect from '~/components/LocaleSelect.vue'
import SocialButtons from '~/components/SocialButtons.vue'

export default Vue.extend({
  components: {
    AppLink,
    LocaleSelect,
    SocialButtons
  }
})
</script>
