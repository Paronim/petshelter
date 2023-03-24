<template>
  <q-page class="row items-center justify-evenly">
    <!-- <q-item
      v-if="$store.state.roles.users[0].user_id === localStorage.user.id"
      class="bg-white"
      >БОЛЬШАЯ КОНПКА</q-item
    > -->
    <q-list class="q-pa-xl text-h5 bg-white rounded-borders">
      <q-item-label header> Доступно: </q-item-label>
      <q-item>{{ store.state.roles.users }}</q-item>
      <!-- <q-item>{{ $store.state.roles.users.value[0].user_id }}</q-item> -->
      <!-- <q-item v-if="loading">Loading...</q-item> -->
      <!-- <q-item v-else-if="error">Error: {{ error.message }}</q-item> -->
      <!-- <q-item v-for="user in users" :key="user.id">
        <q-item-section class="my-box q-hoverable">
          <q-item-label>
            {{ user.user_id }}
          </q-item-label>
          <q-item-label caption>ID: {{ user.id }}</q-item-label>
        </q-item-section>
      </q-item> -->
    </q-list>
  </q-page>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useStore } from "vuex";

const store = useStore();

const userStore = ref("");

// if (store.state.roles.users) {
//   userStore.value = store.state.roles.users[0].user_id;
// }

// const { result, loading, error } = useQuery(gql`
//   query {
//     users {
//       user_id
//       id
//     }
//   }
// `);
// const users = computed(() => result.value?.users);
// console.log(users);

// onMounted(() => {
//   store.dispatch("roles/GET_USERS", result);
// });
</script>
