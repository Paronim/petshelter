<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title> Pet Shelter </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Main" />
        <q-route-tab to="/login" label="Login" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
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
    return {};
  },
});
</script>
