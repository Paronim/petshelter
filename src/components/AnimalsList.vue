<template>
    <div class="wrapper-animals-list">

        <q-card class="my-card q-mx-auto q-mt-lg" style="border-radius: 25px; max-width: 1300px;" flat v-for="animal in animals" :key="animal.id">
      <q-card-section horizontal class="card-section-wrapper">

        <q-img
          class="row-for-card"
          style="max-height: 454px; max-width: 800px; object-fit: cover; border-radius: 25px;"
          :src="animal.image ? animal.image : 'https://img.freepik.com/free-photo/selective-focus-of-a-black-and-white-adorable-cat-with-its-tongue-out_181624-35744.jpg?w=1380&t=st=1678898647~exp=1678899247~hmac=a0536ffb66c97276e09ad444414201209742f9b0b0e232ff1ae53e27ed07f0e4'" alt="animal-img"
        />

        <q-card-actions vertical class="q-px-md flex column justify-between">

          <div class="flex justify-around" >
            <div class="q-ml-lg" style="flex-grow: 1;">
        <q-item-section class="q-ml-sm">
            <q-item-label class="text-h2 text-settings q-mb-md" >{{ animal.name }}</q-item-label>
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-settings q-mb-md">{{ animal.info }}</q-item-label>
        </q-item-section>
        <div>
        <q-item-section class="q-ml-sm">
            <q-item-label class="text-settings row ">
                <p class="col-6">Возраст:</p>
                <p class="col-6">{{ animal.age }}</p>
            </q-item-label>
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-settings row">
                <p class="col-6">Пол:</p>
                <p class="col-6">{{ animal.sex }}</p>
            </q-item-label>
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-settings row">
                <p class="col-6">Порода:</p>
                <p class="col-6">{{ animal.breed }}</p>
            </q-item-label>
        </q-item-section>
        <q-item-section>
            <q-item-label class="text-settings row">
                <p class="col-6">Стерилизация:</p>
                <p class="col-6">{{ animal.sterilization }}</p>
            </q-item-label>
        </q-item-section>
        </div>
        </div>

          <q-icon class="cursor-pointer" style="width: 50px; height: 50px;" name="create" />

        </div>
        <div class="flex justify-around">
            <q-btn color="primary" label="Забрать домой" class="button-animals text-animals"/>
            <q-btn color="primary" label="Помощь" class="q-ml-md text-animals button-animals"  />
        </div>
        </q-card-actions>
      </q-card-section>
    </q-card>
    </div>


</template>

<script setup>
import { useStore } from "vuex"
import { computed, onMounted } from "vue";
import queryStore from '../QueryStore/query.js';

const store = useStore()
const GET_DATA_ANIMALS = () => store.dispatch('animals/GET_DATA_ANIMALS', queryStore.SORT_ANIMALS('', '', '', ''))
onMounted(() => {
  GET_DATA_ANIMALS().then((response) => {
      if (response) {
        console.log('Данные пришли')
      }
})
})
const animals = computed(() => store.getters['animals/ANIMALS'])

</script>

<style lang="scss">
.button-animals{
    width: 40%;
    border-radius: 25px;
}
.text-settings{
    width: 100%;
    height: 100%;
}
.wrapper-sorting{
    border-radius: 25px;
    max-width: 1300px;
    background: white;
    margin: 0 auto;
    margin-top: 15px;
}
.wrapper-animals-list{
    background: rgba(255, 0, 0, 0);
}
.wrapper-type{
  border-right: 1px solid rgba(0, 0, 0, 0.295);
}
@media screen and (max-width: 800px) {
    .card-section-wrapper{
    display: grid;
    grid-template-rows: 1fr 1fr;
    }
}
@media screen and (min-width: 800px) {
    .card-section-wrapper{
    display: grid;
    grid-template-columns: 7fr 5fr;
    }

}
</style>


