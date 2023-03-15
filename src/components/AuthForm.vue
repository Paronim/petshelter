<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="email" label="Your email address" />
      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import userData from "../sdk/users";
const $q = useQuasar();
const email = ref(null);
const password = ref(null);
const onSubmit = async () => {
  try {
    await userData.login({ email, password });
    $q.notify({
      type: "positive",
      message: "Logged In",
    });
  } catch (error) {
    console.log(error);
  }
};
const onReset = () => {
  email.value = null;
  password.value = null;
  accept.value = false;
};
</script>
