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
      Fill out the form below and I will try my best to reply to you.
    tumblr: Illustrations I drew are posted on Tumblr.
    booth: Original goods are sold at BOOTH.
    youtube: Illustration making videos are uploaded on YouTube channel.
  ja:
    name: |
      つねまる
    about: |
      可愛いを求めてお絵描きをしています。<br>
      目つきの悪い娘が好きです。
    contact: |
      特に仕事は募集していませんが、ご意見ご感想は歓迎します。<br>
      以下のフォームにご記入ください。できる限り返信させていただきます。
    tumblr: イラスト置き場。
    booth: オリジナルグッズ販売。
    youtube: メイキング動画。
</i18n>

<template lang="pug">
  div
    HeroSection#introduction.is-dark(
      title="Gorillatio"
      subtitle="Pursuit <i>Kawaii</i> for all mankind."
      nextSectionId="#about-me"
      nextSectionTitle="About me"
      color="#fff"
    )

    HeroSection#about-me.is-white(
      title="About me"
      nextSectionId="#works"
      nextSectionTitle="Showcase my works"
    )
      section.container
        .columns
          .column.is-flex.is-flex-direction-column.is-justify-content-center.is-align-items-center
            img#avatar(src="~assets/img/avatar.jpg" alt="Tsunemaru" width="300" height="300")
          .column
            section.section
              h3.title(v-html="$t('name')")
              p.content(v-html="$t('about')")
              SocialButtons.is-flex.is-justify-content-center(isIconOnly)

    HeroSection#works.is-dark(
      title="Works"
      nextSectionId="#get-in-touch"
      nextSectionTitle="Get in touch with me"
      color="#fff"
    )
      .columns
        .column
          AppCard(
            title="Tumblr"
            :content="$t('tumblr')"
            :image="require('~/assets/img/tumblr.gorillat.io.jpg')"
            link="https://tumblr.gorillat.io/")
        .column
          AppCard(
            title="BOOTH"
            :content="$t('booth')"
            :image="require('~/assets/img/gorillatio.booth.pm.jpg')"
            link="https://gorillatio.booth.pm/")
        .column
          AppCard(
            title="YouTube Channel"
            :content="$t('youtube')"
            youtube="https://www.youtube.com/embed/UN6OjYmpvEw"
            videoid="UN6OjYmpvEw"
            link="https://www.youtube.com/channel/UCh4J4PZL9Ra5kTmaja4_Bog")

    HeroSection#get-in-touch(
      title="Get in touch"
      :subtitle="$t('contact')"
    )
      .container
        ContactForm
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/HeroSection.vue'
import ScrollButton from '~/components/ScrollButton.vue'
import SocialButtons from '~/components/SocialButtons.vue'
import AppCard from '~/components/AppCard.vue'
import ContactForm from '~/components/ContactForm.vue'
export default Vue.extend({
  components: {
    HeroSection,
    ScrollButton,
    SocialButtons,
    AppCard,
    ContactForm
  }
})
</script>

<style lang="stylus" scoped>
  #introduction, #works
    background-color rgba(0,0,0,.5)
    background-blend-mode darken

  #introduction
    background-image url('~assets/img/bg01.jpg')

  #works
    background-image url('~assets/img/bg02.jpg')

  #avatar
    border-radius 100%
    max-width 300px
    max-height 300px
</style>
