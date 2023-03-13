<!-- <template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script> -->

<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="result && result.posts">
      <div>id: {{ result.posts.id }}</div>
      <div>title: {{ result.posts.title }}</div>
    </div>
  </q-page>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { result, loading, error } = useQuery(gql`
      query MyQuery {
        posts {
          id
          title
        }
      }
    `);
    console.log(result);
    console.log(result.posts);

    return { /* your other items, */ result, loading, error };
  },
});
</script>
