<template>
  <q-page class="row items-start justify-evenly">
    <div
      style="width: 100%; max-width: 400px"
      class="q-mt-xl q-pa-md bg-white rounded-borders"
    >
      <q-list v-for="message in messages" :key="message.id">
        <q-chat-message
          bg-color="primary"
          text-color="white"
          :name="message.first_name"
          :text="[message.text]"
          :sent="checkSent(message)"
        />
      </q-list>
      <div class="q-mt-md row items-center justify-end no-wrap">
        <q-input
          v-model="message"
          class="full-width"
          outlined
          label="Сообщение"
          @keyup.enter="sendMessage"
        />
        <q-btn
          class="q-ml-md"
          push
          round
          color="primary"
          icon="send"
          @click="sendMessage"
        />
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Stomp } from "@stomp/stompjs";

const messages = ref([]);
const message = ref("");
const url = "ws://localhost:15674/ws";
const client = Stomp.client(url);
const user = window.Clerk?.user;
console.log(user);
console.log(window);
const headers = {
  login: "chat_user",
  passcode: "chat_user",
};

const checkSent = (message) => {
  return message.user_id === user.id;
};

const sendMessage = () => {
  if (message.value.trim()) {
    const messageData = {
      user_id: user.id,
      first_name: user.firstName,
      text: message.value,
    };
    // messages.value.push(messageData);
    client.send("/exchange/chat", {}, JSON.stringify(messageData));
  } else {
    alert("Пустые сообщения лучше не отправлять");
  }
  message.value = "";
};
onMounted(() => {
  const onConnected = function () {
    client.subscribe("/exchange/chat", onMessageReceived);
  };
  const onError = function (error) {
    console.log(error.headers.message);
  };
  const onMessageReceived = function (message) {
    if (message.body) {
      messages.value.push(JSON.parse(message.body));
    }
  };
  client.connect(headers, onConnected, onError);
});
</script>
<style lang="scss"></style>
