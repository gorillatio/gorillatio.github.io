<template lang="pug">
  .buttons
    a.button.is-outlined(
      :class="buttonClasses"
      v-for="item in items"
      :href="item.href"
      target="_blank")
      span.icon
        fa-icon(:icon="['fab', item.iconName]")
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
          iconName: 'twitter'
        },
        {
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCh4J4PZL9Ra5kTmaja4_Bog',
          iconName: 'youtube',
        },
        {
          name: 'Tumblr',
          href: 'https://tumblr.gorillat.io/',
          iconName: 'tumblr'
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/gorillatio',
          iconName: 'instagram',
        }
      ]
    }
  }
})
</script>
