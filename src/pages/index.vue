<i18n lang="yaml">
  en:
    name: |
      Hi, I’m Tsunemaru, coke drinking illustrator based in Japan.
    about: |
      Besides defending the earth as hero of justice, I painting <i>Sanpaku-eyes</i> girl in pursuit of <i>Kawaii</i>.<br>
      Becouse I love <i>Sanpaku-eyes</i> girl the most in the world.<br>
      <i>Sanpaku-eyes</i> girl is salvation, justice, and order of nature.<br>
    contact: |
      Want to get in touch?<br>
      Because busy defending the earth, I'm not currently looking for a job, but welcome feedback.<br>
      Get in touch me by Twitter and I will try my best to reply to you.
  ja:
    name: |
      つねまる
    about: |
      可愛いを求めてお絵描きをしています。<br>
      目つきの悪い娘が好きです。
    contact: |
      特に仕事は募集していませんが、ご意見ご感想は歓迎します。<br>
      何かございましたらTwitterまでどうぞ。
</i18n>

<template lang="pug">
  div
    HeroSection#introduction.is-dark
      template(v-slot:body)
        section.container.is-fluid.has-text-centered
          h1.title Gorillatio
          p.subtitle Pursuit <i>Kawaii</i> for all mankind.
      template(v-slot:foot)
        nav.container.is-fluid.has-text-centered
          ScrollButton(to="#about-me")
            | About me

    HeroSection#about-me.is-white
      template(v-slot:head)
        nav.container.is-fluid.has-text-centered
          ScrollButton(to="#introduction" color="#123" direction="up")
            | Introduction
      template(v-slot:body)
        .container
          .columns
            .column.is-flex.is-flex-direction-column.is-justify-content-center.is-align-items-center
              img#avatar(src="~assets/img/avatar.png")
            .column
              section.section
                h2.title(v-html="$t('name')")
                p.content(v-html="$t('about')")
                p.content(v-html="$t('contact')")
                SocialButtons.is-flex.is-justify-content-center(isIconOnly)
      template(v-slot:foot)
        nav.container.is-fluid.has-text-centered
          ScrollButton(to="#works" color="#123")
            | Showcase my works

    HeroSection#works.is-dark
      template(v-slot:head)
        nav.container.is-fluid.has-text-centered
          ScrollButton(to="#about-me" direction="up")
            | About me
      template(v-slot:body)
        .container.is-fluid.has-text-centered
          h2.title
            | Works
          p.subtitle
            | Coming Soon
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/HeroSection.vue'
import ScrollButton from '~/components/ScrollButton.vue'
import SocialButtons from '~/components/SocialButtons.vue'
export default Vue.extend({
  components: {
    HeroSection,
    ScrollButton,
    SocialButtons
  }
})
</script>

<style lang="stylus" scoped>
  #introduction
    background-image url('~assets/img/bg01.png')
    background-color: rgba(0,0,0,.5);
    background-blend-mode: darken;

  #works
    background-image url('~assets/img/bg02.png')
    background-color: rgba(0,0,0,.5);
    background-blend-mode: darken;

  #avatar
    border-radius 100%
    max-width 300px
    max-height 300px
</style>
