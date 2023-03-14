<template>
  <q-page class="flex flex-center">
    <Login />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Login from "src/components/Login.vue";

export default defineComponent({
  name: "LoginPage",
  components: { Login },
});
</script>
