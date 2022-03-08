<i18n lang="yaml">
  en:
    name: |
      Hi, I’m Tsunemaru, <i>Heppoko</i> illustrator based in Japan.
    about me: |
      Besides defending the earth as hero of justice, I painting <i>Sanpaku-eyes</i> girl in pursuit of <i>Kawaii</i>.<br>
      Becouse I love <i>Sanpaku-eyes</i> girl the most in the world.<br>
      <i>Sanpaku-eyes</i> girl is salvation, justice, and order of nature.<br>
    contact: |
      Because busy defending the earth, I'm not currently looking for a job, but welcome feedback.
      Please ping me on social media or send me an email and I will try my best to reply to you.
    check my works: Check my works
    get in touch: Get in touch
    instagram: Illustrations I drew are posted on Instagram.
    booth: Original goods are sold at BOOTH.
    youtube: Illustration making videos are uploaded on YouTube channel.
  ja:
    name: |
      どうも、ヘッポコ絵師の つねまる です。
    about me: |
      可愛いを追い求めてお絵描きをしています。<br>
      目つきの悪い娘が好き好きでたまりません。
    contact: |
      特に仕事は募集していませんが、ご意見ご感想は歓迎します。<br>
      SNSかメールにてご連絡ください。返信できるよう頑張ります。
    check my works: 作品を見る
    get in touch: 連絡を取る
    instagram: イラスト置き場。
    booth: オリジナルグッズ販売。
    youtube: メイキング動画。
</i18n>

<template lang="pug">
  div
    HeroSection#introduction.is-dark(
      title="Gorillatio"
      subtitle="Pursuit <i>Kawaii</i> for all mankind."
    )

    HeroSection#about.is-white(title="About me")
      section.container
        .columns.section
          .column.is-flex.is-flex-direction-column.is-justify-content-center.is-align-items-center
            img#avatar(src="https://s.gravatar.com/avatar/3bf3189d11accc41ecff9ac60824cf97?s=300" alt="Tsunemaru" width="300" height="300")
          .column
            section
              h3.title.is-5(v-html="$t('name')")
              p.py-3(v-html="$t('about me')")
              p.py-3
                .buttons.is-flex.is-justify-content-center
                  AppLink.button.is-fullwidth(to="#works")
                    span {{ $t('check my works') }}
                    span.icon
                      fa-icon(icon="running")
                  AppLink.button.is-fullwidth(to="#contact")
                    span {{ $t('get in touch') }}
                    span.icon
                      fa-icon(icon="envelope")
              aside.py-3.has-text-centered
                | Follow me
                SocialButtons.is-flex.is-justify-content-center(icon-only)

    HeroSection#works.is-dark(title="Showcase my works")
      .container
        .columns
          .column
            AppCard(
              title="Instagram"
              :content="$t('instagram')"
              :image="require('~/assets/img/gorillatio_nametag.webp')"
              link="https://www.instagram.com/gorillatio/")
          .column
            AppCard(
              title="BOOTH"
              :content="$t('booth')"
              :image="require('~/assets/img/gorillatio.booth.pm.webp')"
              link="https://gorillatio.booth.pm/")
          .column
            AppCard(
              title="YouTube Channel"
              :content="$t('youtube')"
              youtube="https://www.youtube.com/embed/UN6OjYmpvEw"
              videoid="UN6OjYmpvEw"
              link="https://www.youtube.com/channel/UCh4J4PZL9Ra5kTmaja4_Bog")

    HeroSection#contact(title="Get in touch with me")
      .container
        .columns
          section.column.px-4
            h3.title.is-5.has-text-centered Want to get in touch?
            p.content(v-html="$t('contact')")
          section.column.px-4
            h3.title.is-5.has-text-centered Ping me on
            p.content
              SocialButtons(contactable buttonClasses="is-fullwidth")
          section.column.px-4
            h3.title.is-5.has-text-centered Send me an email
            ContactForm
</template>

<script lang="ts">
import Vue from 'vue'
import HeroSection from '~/components/HeroSection.vue'
import SocialButtons from '~/components/SocialButtons.vue'
import AppCard from '~/components/AppCard.vue'
import AppLink from '~/components/AppLink.vue'
import ContactForm from '~/components/ContactForm.vue'
export default Vue.extend({
  components: {
    HeroSection,
    SocialButtons,
    AppCard,
    AppLink,
    ContactForm
  }
})
</script>

<style lang="stylus" scoped>
  #introduction, #works
    background-color rgba(0,0,0,.5)
    background-blend-mode darken

  #introduction
    background-image url('~assets/img/bg01.webp')

  #works
    background-image url('~assets/img/bg02.webp')

  #avatar
    border-radius 100%
    max-width 300px
    max-height 300px
</style>
