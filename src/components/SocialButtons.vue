<template lang="pug">
  .buttons
    a.button.is-outlined(
      v-for="item in items"
      v-if="!isContactableOnly || item.isContactable"
      :class="buttonClasses"
      :href="item.href"
      :aria-label="item.name"
      target="_blank"
      rel="noopener noreferrer"
    )
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
    },
    isContactableOnly: {
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
          iconName: 'twitter',
          isContactable: true
        },
        {
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCh4J4PZL9Ra5kTmaja4_Bog',
          iconName: 'youtube',
          isContactable: false
        },
        {
          name: 'Tumblr',
          href: 'https://tumblr.gorillat.io/',
          iconName: 'tumblr',
          isContactable: false
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/gorillatio',
          iconName: 'instagram',
          isContactable: true
        }
      ]
    }
  }
})
</script>
