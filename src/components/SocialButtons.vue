<template lang="pug">
  .buttons
    a.button.is-outlined(
      :class="buttonClasses"
      v-for="item in items"
      :href="item.href"
      target="_blank")
      span.icon
        ion-icon(:name="item.iconName")
      span(v-if="!isIconOnly")
        | {{ item.name }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    buttonClasses: {
      type: String,
      required: false,
      default: ''
    },
    isIconOnly: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      items: [
        {
          name: 'Twitter',
          href: 'https://twitter.com/gorillatio',
          iconName: 'logo-twitter'
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/gorillatio',
          iconName: 'logo-instagram',
        }
      ]
    }
  }
})
</script>
