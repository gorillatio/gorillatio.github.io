<i18n lang="yaml">
  en:
    from: From
    name: Name
    email: Email
    subject: Subject
    message: Message
    send: Send
    success: Success to send message
    failed: Failed to send message
    thanks: Thanks for your message!
    error: Error occurred.
    close: Close
  ja:
    from: 差出人
    name: お名前
    email: Eメール
    subject: 件名
    message: メッセージ
    send: 送信
    success: 送信が完了しました
    failed: 送信に失敗しました
    thanks: メッセージありがとうございます！
    error: エラーが発生しました。
    close: 閉じる
</i18n>

<template lang="pug">
  div
    .modal(:class="{ 'is-active': isActive }")
      .modal-background(@click="closeModal")
      .modal-content
        .box
          section.content
            template(v-if="error")
              h3.icon-text
                span.icon
                  fa-icon(icon="skull-crossbones")
                span {{ $t('failed') }}
              p {{ $t('error') }}
              p {{ error }}
            template(v-else)
              h3.icon-text
                span.icon
                  fa-icon(icon="thumbs-up")
                span {{ $t('success') }}
              p {{ $t('thanks') }}
            button.button(@click="closeModal") {{ $t('close') }}
    form(@submit.prevent="submit")
      .field.is-horizontal
        .field-label.is-normal
          label.label {{ $t('from') }}
        .field-body
          .field
            .control.is-expanded.has-icons-left
              input.input(v-model="name" type="text" :placeholder="$t('name')" required="required")
              span.icon.is-small.is-left
                fa-icon(icon="user")
          .field
            .control.is-expanded.has-icons-left
              input.input(v-model="email" type="email" :placeholder="$t('email')" required="required")
              span.icon.is-small.is-left
                fa-icon(icon="envelope")

      .field.is-horizontal
        .field-label.is-normal
          label.label {{ $t('subject') }}
        .field-body
          .field
            .control
              input.input(v-model="subject" type="text" required="required")

      .field.is-horizontal
        .field-label.is-normal
          label.label {{ $t('message') }}
        .field-body
          .field
            .control
              textarea.textarea(v-model="message" required="required")

      .field.is-horizontal
        .field-label
        .field-body
          .field
            .control
              button.button.is-primary
                span.icon
                  fa-icon(icon="paper-plane")
                span {{ $t('send') }}
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      isActive: false,
      hasError: false,
      error: '',
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  },
  methods: {
    async submit() {
      const params = new FormData()
      try {
        params.append('entry.2146405557', this.name)
        params.append('entry.179233191', this.email)
        params.append('entry.529215357', this.subject)
        params.append('entry.1843708200', this.message)

        await axios.post('/contact/', params)

        this.name = ''
        this.email = ''
        this.subject = ''
        this.message = ''
        this.error = ''
      } catch (error) {
        this.error = JSON.stringify(error)
      } finally {
        this.isActive = true
      }
    },
    closeModal() {
      this.isActive = false
    }
  }
})
</script>
