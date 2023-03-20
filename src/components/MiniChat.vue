<template>
  <q-page class="row items-start justify-evenly">
    <div
      style="width: 100%; max-width: 400px"
      class="q-mt-xl q-pa-md bg-white rounded-borders"
    >
      <q-chat-message
        name="Я"
        avatar="https://images.clerk.dev/oauth_google/img_2N5mzvtFLSmqEExvQtKNAchCgMy.png?width=80"
        stamp="7 минут назад"
        sent
        text-color="white"
        bg-color="primary"
      >
        <div>Привет!</div>

        <div>Ты уже поставила RabbitMQ?</div>
      </q-chat-message>

      <q-chat-message
        name="Собеседник"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        bg-color="amber"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
      <q-container class="q-mt-md row items-center justify-end no-wrap">
        <q-input class="full-width" outlined v-model="text" label="Сообщение" />
        <q-btn
          class="q-ml-md"
          push
          round
          color="primary"
          icon="send"
          type="submit"
      /></q-container>
    </div>
  </q-page>
</template>
<script></script>
<style lang="scss">
.my-emoticon {
  vertical-align: middle;
  height: 2em;
  width: 2em;
}
</style>
