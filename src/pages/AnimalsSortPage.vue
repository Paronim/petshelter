<template>
  <SortAnimalsList />
  <FormAddAnimals v-if="checkId()" />
  <AnimalsList />
</template>

<script setup>
import AnimalsList from "../components/AnimalsList.vue";
import SortAnimalsList from "src/components/SortAnimalsList.vue";
import FormAddAnimals from "src/components/FormAddAnimals.vue";
import { useStore } from "vuex";

const store = useStore();

const checkId = () => {
  return store.state.roles.users.includes(JSON.parse(localStorage.user).id);
};
</script>
