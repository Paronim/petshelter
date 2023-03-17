<template>
  <q-page class="flex flex-center">
    <AuthForm />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import AuthForm from "src/components/AuthForm.vue";

export default defineComponent({
  name: "RegisterPage",
  components: { AuthForm },
});
</script>
