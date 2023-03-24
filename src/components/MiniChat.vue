<template>
  <q-page class="row items-start justify-evenly">
    <div
      style="width: 100%; max-width: 400px"
      class="q-mt-xl q-pa-md bg-white rounded-borders"
    >
      <q-scroll-area style="height: 250px">
        <q-list v-for="message in messages" :key="message.id">
          <q-chat-message
            bg-color="primary"
            text-color="white"
            :name="message.first_name"
            :text="[message.text]"
            :sent="checkSent(message)"
          />
        </q-list>
      </q-scroll-area>
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
const headers = {
  login: "chat_user",
  passcode: "chat_user",
};
const user = ref({});

if (localStorage.user) {
  user.value = JSON.parse(localStorage.user);
}

const checkSent = (message) => {
  return message.user_id === user.value.id;
};

const sendMessage = () => {
  if (message.value.trim()) {
    const messageData = {
      user_id: user.value.id,
      first_name: user.value.firstName,
      text: message.value,
    };
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
