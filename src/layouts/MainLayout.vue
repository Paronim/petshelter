<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-img
        class="header-img absolute-top"
        src="~/assets/cute-dog.png"
        position="50% 35%"
      />
      <q-toolbar>
        <q-toolbar-title class="text-bold text-size">
          Pet Shelter
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab
          exact
          to="/"
          label="Главная"
          class="montserrat-700"
          v-ripple
        />
        <q-route-tab to="/chat" label="Чат" class="montserrat-700" v-ripple />
        <q-route-tab
          to="/info"
          label="Заявки"
          class="montserrat-700"
          v-ripple
        />
        <q-space />
        <q-item id="user-button"></q-item>
        <q-item id="auth-links" class="montserrat-700" dense>
          <q-btn flat @click="SignIn">Вход</q-btn>
        </q-item>
      </q-tabs>
    </q-header>

    <q-page-container class="page-container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
const SignIn = () => {
  window.Clerk.openSignIn();
};
</script>

<style lang="scss">
.page-container {
  background: #282828;
}
.header-img {
  height: 100%;
  z-index: -1;
  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: inset 25em 0 10em rgba(0, 0, 0, 0.5);
  }
}
.text-size {
  font-size: 7vw;
}
</style>
