<template>
  <q-page to="/requests" exact class="flex flex-center">
    <router-view>
      <button
        @click.prevent="$router.push( `/requests` )"
      >
        requests
      </button>
  </router-view>
  </q-page>
</template>

<script setup>

</script>
