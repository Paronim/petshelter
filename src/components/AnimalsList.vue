<template>
    <div class="wrapper-animals-list">
        <div class="q-ma-lg q-pa-sm wrapper-sorting">
        <div @click="sortBlock = !sortBlock" class="cursor-pointer flex justify-center items-center">
          <p class="q-ma-sm text-h5 text-center" >Сортировка животных</p>
          <q-icon :name="sortBlock ?  'keyboard_arrow_up' : 'keyboard_arrow_down'" />
        </div>

        <div v-if="sortBlock" >

        <div class="sort-animals-wrapper" >
        <div>
        <p class="text-h6">Возраст:</p>
        <q-range
        style="max-width: 500px; min-width: 300px"
        v-model="modelSortAge"
        :marker-labels="arrayMarkerLabel"
        :min="0"
        :max="6"
        />
        </div>
        </div>
        <div class="sort-animals-wrapper">
          <div class="q-pa-md" style="width: 300px">
        <div class="q-gutter-md">
        <q-select
          filled
          v-model="modelSortType"
          :options="optionsType"
          label="Вид:"
          map-options
        />
        </div>
        </div>
        <div class="q-pa-md" style="width: 300px">
        <div class="q-gutter-md">
        <q-select
          filled
          v-model="modelSortSex"
          :options="optionsSex"
          label="Пол:"
          map-options
        />
        </div>
        </div>
        <div class="q-pa-md" style="width: 300px">
        <div class="q-gutter-md">
        <q-select
          filled
          v-model="modelSortSterilization"
          :options="optionsSterilization"
          label="Стерилизация:"
          map-options
        />
        </div>
        </div>
        <q-btn style="max-height: 40px; max-width: 200px; border-radius: 25px;" color="primary" label="Сортировать" @click="activeSort()"/>
        </div>
        </div>

      </div>

      <div class="q-ma-lg q-pa-sm wrapper-sorting">
        <div @click="adminBlock = !adminBlock" class="cursor-pointer flex justify-center items-center">
          <p class="q-ma-sm text-h5 text-center" >Панель админа</p>
          <q-icon :name="adminBlock ?  'keyboard_arrow_up' : 'keyboard_arrow_down'" />
        </div>

        <div v-if="adminBlock" >

        <div class="sort-animals-wrapper" >
          <FormAddAnimals/>
        </div>
        </div>

      </div>


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
import { computed, onMounted, ref } from "vue";
import queryStore from '../QueryStore/query.js';
import FormAddAnimals from "./FormAddAnimals.vue";

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

const sortBlock = ref(false)
const adminBlock = ref(false)
const typeSortVariable = ref('')
const ageSortVariable = ref('')
const sexSortVariable = ref('')
const sterilizationSortVariable = ref('')


const typeSort = () => {
  switch (modelSortType.value.value) {
    case 'cat':
    typeSortVariable.value = '_like: "кот"'
      break;
    case 'dog':
    typeSortVariable.value = '_like: "собака"'
      break;
    case 'all':
    typeSortVariable.value = ''
      break;
  }
}

const ageSort = () => {
  ageSortVariable.value = `_gte: ${minPriceLabel.value}, _lte: ${maxPriceLabel.value}`
}

const sexSort = () => {
  switch(modelSortSex.value.value){
    case true:
      sexSortVariable.value = '_eq: true'
      break;
    case false:
      sexSortVariable.value = '_eq: false'
      break;
    case 'all':
      sexSortVariable.value = ''
      break;
  }

}

const sterilizationSort = () => {
  switch(modelSortSterilization.value.value){
    case true:
      sterilizationSortVariable.value = '_eq: true'
      break;
    case false:
      sterilizationSortVariable.value = '_eq: false'
      break;
    case 'all':
      sterilizationSortVariable.value = ''
      break;
  }

}

const activeSort = () => {
  typeSort()
  ageSort()
  sexSort()
  sterilizationSort()
  store.dispatch('animals/GET_DATA_ANIMALS', queryStore.SORT_ANIMALS(typeSortVariable.value, ageSortVariable.value, sexSortVariable.value, sterilizationSortVariable.value))
}

// q-select
const modelSortType = ref('all')

const optionsType = [
        {
          label: 'Котики',
          value: 'cat'
        },
        {
          label: 'Собачки',
          value: 'dog'
        },
        {
          label: 'Все',
          value: 'all'
        }
      ]

const modelSortSex = ref('all')

const optionsSex = [
        {
          label: 'Мальчик',
          value: true
        },
        {
          label: 'Девочка',
          value: false
        },
        {
          label: 'Все',
          value: 'all'
        }
      ]

const modelSortSterilization = ref('all')

const optionsSterilization = [
        {
          label: 'Есть',
          value: true
        },
        {
          label: 'Нет',
          value: false
        },
        {
          label: 'Все',
          value: 'all'
        }
      ]

// q-range
const modelSortAge = ref({
      min: 0,
      max: 6
    })

  const minPriceLabel = computed(() => modelSortAge.value.min * 12)
  const maxPriceLabel = computed(() => modelSortAge.value.max * 12)
  const arrayMarkerLabel = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '>6' }
      ]


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
    .sort-animals-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
}
@media screen and (min-width: 800px) {
    .card-section-wrapper{
    display: grid;
    grid-template-columns: 7fr 5fr;
    }
    .sort-animals-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    }

}
</style>


