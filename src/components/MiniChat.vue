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
      <div class="q-mt-md row items-center justify-end no-wrap">
        <q-input class="full-width" outlined label="Сообщение" />
        <q-btn
          class="q-ml-md"
          push
          round
          color="primary"
          icon="send"
          @click="sendMessage('Ну привет, ВебСокет')"
        />
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      connection: null,
    };
  },
  methods: {
    sendMessage: function (message) {
      console.log(this.connection);
      this.connection.send(message);
    },
  },
  created() {
    console.log("Подключение...");
    this.connection = new WebSocket("ws://127.0.0.1:15674/ws");

    this.connection.onopen = (event) => {
      console.log(event);
      console.log("Подключение успешно");
    };
    this.connection.onerror = (event) => {
      console.log(event);
      console.log("ОШИБКА");
    };
    this.connection.onmessage = (event) => {
      console.log(event);
    };
  },
};
</script>
<style lang="scss">
.my-emoticon {
  vertical-align: middle;
  height: 2em;
  width: 2em;
}
</style>
