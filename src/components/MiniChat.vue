<template>
  <q-page class="row items-start justify-evenly">
    <div
      style="width: 100%; max-width: 400px"
      class="q-mt-xl q-pa-md bg-white rounded-borders"
    >
      <div class="q-mb-md row items-start justify-evenly">
        <q-btn @click="connectChat">Вход</q-btn>
        <q-btn @click="disconnectChat">Выход</q-btn>
      </div>
      <q-list v-for="message in messages">
        <q-chat-message sent text-color="white" bg-color="primary">
          <div>{{ message.title }}</div>
        </q-chat-message>
      </q-list>

      <div class="q-mt-md row items-center justify-end no-wrap">
        <q-input
          v-model="newMessage"
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
import { v4 as uuidv4 } from "uuid";
import Clerk from "@clerk/clerk-js";

// const userId = window.Clerk.user.getUser();
// console.log(window.Clerk?.user.id);
const messages = ref([]);
const newMessage = ref("");
const receivedMessage = ref("");
const url = "ws://localhost:15674/ws";
const client = Stomp.client(url);
const headers = {
  login: "guest",
  passcode: "guest",
};

const connectCallback = function () {
  client.subscribe("/queue/chat", messageCallback);
};
const errorCallback = function (error) {
  console.log(error.headers.message);
};
const messageCallback = function (message) {
  // called when the client receives a STOMP message from the server
  if (message.body) {
    // alert("Получил сообщение: " + message.body);
    receivedMessage.value = message.body;
    messages.value.push({ title: receivedMessage.value });
  } else {
    alert("Пришло пустое сообщение");
  }
};
// client.connect(headers, connectCallback, errorCallback);

const connectChat = () => {
  client.connect(headers, connectCallback, errorCallback);
};
const disconnectChat = () => {
  client.disconnect(function () {
    console.log("До свидания");
  });
};
const sendMessage = () => {
  client.send("/queue/chat", {}, newMessage.value);
  messages.value.push({ title: newMessage.value });
  newMessage.value = "";
};
// onMounted(() => {
//   console.log("onMounted success");
// });
</script>
<style lang="scss"></style>
