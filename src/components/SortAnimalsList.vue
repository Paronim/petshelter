<template>
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
</template>

<script setup>
import queryStore from '../QueryStore/query.js';
import { ref, computed } from 'vue';
import { useStore } from "vuex"

const sortBlock = ref(false)
const typeSortVariable = ref('')
const ageSortVariable = ref('')
const sexSortVariable = ref('')
const sterilizationSortVariable = ref('')

const store = useStore()

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
@media screen and (max-width: 800px) {
    .sort-animals-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
}
@media screen and (min-width: 800px) {
    .sort-animals-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    }

}
</style>
