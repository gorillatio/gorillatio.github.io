<template lang="pug">
  .buttons
    a.button.is-outlined(
      v-for="item in items"
      v-if="!contactable || item.contactable"
      :class="buttonClasses"
      :href="item.href"
      :aria-label="item.name"
      target="_blank"
      rel="noopener noreferrer"
    )
      span.icon
        fa-icon(:icon="['fab', item.iconName]")
      span(v-if="!iconOnly")
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
    iconOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    contactable: {
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
          contactable: true
        },
        {
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCh4J4PZL9Ra5kTmaja4_Bog',
          iconName: 'youtube',
          contactable: false
        },
        {
          name: 'Tumblr',
          href: 'https://tumblr.gorillat.io/',
          iconName: 'tumblr',
          contactable: true
        },
        {
          name: 'Instagram',
          href: 'https://www.instagram.com/gorillatio',
          iconName: 'instagram',
          contactable: true
        }
      ]
    }
  }
})
</script>
