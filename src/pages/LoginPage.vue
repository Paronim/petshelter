<template>
  <q-page class="flex flex-center">
    <AddLogin />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import AddLogin from "src/components/AddLogin.vue";

export default defineComponent({
  name: "LoginPage",
  components: { AddLogin },
});
</script>
