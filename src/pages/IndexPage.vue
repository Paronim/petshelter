<template>
  <q-page class="row items-center justify-evenly">
    <q-list>
      <q-item-label header> Post List </q-item-label>
      <q-item v-if="loading">Loading...</q-item>
      <q-item v-else-if="error">Error: {{ error.message }}</q-item>
      <q-item v-else v-for="post in posts" :key="post.id">
        <q-item-section class="my-box q-hoverable">
          <q-item-label>
            {{ post.title }}
          </q-item-label>
          <q-item-label caption>ID: {{ post.id }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <router-view>
      <button
        @click.prevent="$router.push( `/requests` )"
      >
        requests
      </button>
    </router-view>
  </q-page>
</template>
<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const { result, loading, error } = useQuery(gql`
      query MyQuery {
        posts {
          id
          title
        }
      }
    `);
    const posts = computed(() => result.value?.posts ?? null);

    return { posts, loading, error };
  },
});
</script>
