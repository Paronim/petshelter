<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-img
        class="header-img absolute-top"
        src="~/assets/cute-dog.png"
        position="50% 35%"
      />
      <q-toolbar>
        <q-toolbar-title class="text-h1 text-bold">
          Pet Shelter
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="left">
        <q-route-tab exact to="/" label="Main" v-ripple />
        <q-route-tab to="/animals/list" label="ANIMALS" />
        <q-space />
        <q-item id="user-button"></q-item>
        <q-item id="auth-links" dense>
          <q-btn flat @click="SignIn">Login</q-btn>
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

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title> </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";


export default defineComponent({
  name: "MainLayout",

  setup() {
    const SignIn = () => {
      window.Clerk.openSignIn();
    };
    return { SignIn };
  },
});


</script>

<style lang="scss">
  .page-container{
    background: black;
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
</style>

