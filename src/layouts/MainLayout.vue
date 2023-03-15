<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Main" />
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/animals/list" label="ANIMALS" />
      </q-tabs>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <q-item clickable v-ripple to="/animals/list" exact>
              <q-item-section avatar>
                <q-icon name="Animals" />
              </q-item-section>

              <q-item-section>
                Animals
              </q-item-section>
            </q-item>

      </q-list>
    </q-drawer> -->

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";


export default defineComponent({
  name: "MainLayout",

  setup() {
    return {}
  },
});


</script>

<style lang="scss">
  .page-container{
    background: black;
  }
</style>
