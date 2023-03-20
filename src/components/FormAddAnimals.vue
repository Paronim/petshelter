<template>
  <div >

    <div class="q-ma-lg q-pa-sm wrapper-sorting">
        <div @click="adminBlock = !adminBlock" class="cursor-pointer flex justify-center items-center">
          <p class="q-ma-sm text-h5 text-center" >Панель админа</p>
          <q-icon :name="adminBlock ?  'keyboard_arrow_up' : 'keyboard_arrow_down'" />
        </div>

        <div v-if="adminBlock" >

        <div class="sort-animals-wrapper" >
          <q-btn style="max-height: 40px; max-width: 200px; border-radius: 25px;" color="primary" label="Добавить животное" @click="activeFormAddAnimal = true"/>
        </div>
        </div>

      </div>

  <q-dialog
  v-model="activeFormAddAnimal"
  full-width
  >
      <q-card>
        <q-card-section class="row items-center q-pb-none no-wrap">
          <div class="text-h5">Форма добавления животных</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>

        <form @submit.prevent="submitAddAnimal()">
        <q-card-section>
          <p class="text-h5">Фото:</p>
        <q-input
        @update:model-value="val => { file = val[0] }"
        filled
        type="file"
        />
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Имя:</p>
          <q-input
            filled
            standout="bg-primary text-white"
            ref="inputRef"
            v-model="modelAddName"
            label="Введите имя"
            :rules="[val => !!val || 'Field is required']"
          />
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Информация:</p>
          <q-input standout="bg-primary text-white" v-model="modelAddInfo" label="Введите информация" />
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Возвраст:</p>
          <div  class="flex justify-start no-warp">
            <q-input
            filled
            mask="##"
            style="width: 70%;"
            standout="bg-primary text-white"
            ref="inputRef"
            v-model="modelAddAgeNum"
            label="Введите возраст"
            :rules="[rulesAge || 'Field is required']"
          />
          <q-select
          style="width: 30%;"
          filled
          v-model="modelAddAge"
          :options="optionsAddAge"
          map-options
        />
          </div>
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Вид:</p>
          <q-select
          filled
          v-model="modelAddType"
          :options="optionsAddType"
          map-options
        />
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Пол:</p>
          <q-select
          filled
          v-model="modelAddSex"
          :options="optionsAddSex"
          map-options
        />
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Порода:</p>
          <q-input
            filled
            standout="bg-primary text-white"
            ref="inputRef"
            v-model="modelAddBreed"
            label="Введите порода"
            :rules="[val => !!val || 'Field is required']"
          />
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Стерилизация:</p>
          <q-select
          filled
          v-model="modelAddSterilization"
          :options="optionsAddSterilization"
          map-options
        />
        </q-card-section>
        <q-card-section class="flex justify-center">
          <q-btn style="max-height: 40px; max-width: 200px; border-radius: 25px;" color="primary" label="Добавить" type="submit"/>
        </q-card-section>
      </form>
      </q-card>
    </q-dialog>
</div>
</template>

<script setup>
import { ADD_ANIMALS_ADMIN_PANEL } from 'src/QueryStore/query.js'
import queryStore from '../QueryStore/query.js';
import { useQuasar } from 'quasar';
import { ref } from "vue"
import { useStore } from 'vuex';

const activeFormAddAnimal = ref(false)
const adminBlock = ref(false)
const modelAddName = ref('')
const modelAddInfo = ref('')
const modelAddAgeNum = ref()
const modelAddBreed = ref('')
const modelAddAge = ref({
          label: 'Месяц',
          value: 1
        })
const modelAddSex = ref({
          label: 'Мальчик',
          value: true
        })
const modelAddSterilization = ref({
          label: 'Есть',
          value: true
        })
const modelAddType = ref({
          label: 'Кот',
          value: 'кот'
        })

const store = useStore()

const $q = useQuasar()

const optionsAddAge = [
        {
          label: 'Месяц',
          value: 1
        },
        {
          label: 'Год',
          value: 2
        }
      ]

const optionsAddSex = [
        {
          label: 'Мальчик',
          value: true
        },
        {
          label: 'Девочка',
          value: false
        }
      ]

const optionsAddSterilization = [
        {
          label: 'Есть',
          value: true
        },
        {
          label: 'Нет',
          value: false
        }
      ]

const optionsAddType = [
        {
          label: 'Кот',
          value: 'кот'
        },
        {
          label: 'Собака',
          value: 'собака'
        }
      ]


const rulesAge = () => {
  if(modelAddAgeNum.value === ''){
    return false
  } else if(modelAddAge.value === 1 && modelAddAgeNum.value > 12){
    return false
  } else {
    return true
  }
}

const submitAddAnimal = () => {

if(modelAddName.value === '' || modelAddAgeNum.value === null || modelAddAgeNum.value > 13 || modelAddBreed.value === ''){
  $q.notify({
        message: `Вы заполнили не все поля верно`,
        color: 'primary'
      })
} else {
  if(modelAddAge.value.value === 2){
    modelAddAgeNum.value = modelAddAgeNum.value * 12
  }
    ADD_ANIMALS_ADMIN_PANEL(modelAddAgeNum.value, modelAddBreed.value, modelAddInfo.value, modelAddName.value, modelAddSex.value.value, modelAddSterilization.value.value, modelAddType.value.value )
    setTimeout(store.dispatch('animals/GET_DATA_ANIMALS', queryStore.SORT_ANIMALS('', '', '', '')), 2000)
}
}

</script>
