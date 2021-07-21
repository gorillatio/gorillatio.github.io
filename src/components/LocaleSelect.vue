<template lang="pug">
  div
    .control.has-icons-left
      .select.is-small
        select(v-model="$i18n.locale" @change="onChange($i18n.locale)")
          option(v-for="(locale, i) in $i18n.locales" :key="i" :value="locale.code")
            | {{ locale.name }}
      span.icon.is-small.is-left
        ion-icon(name="globe-outline")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    onChange(locale: string) {
      this.$router.replace(this.switchLocalePath(locale));
    }
  }
})
</script>
