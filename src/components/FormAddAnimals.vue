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

        <q-card-section>
          <p class="text-h5">Имя:</p>
          <q-input standout="bg-primary text-white" v-model="text" label="Введите имя"/>
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Информация:</p>
          <q-input standout="bg-primary text-white" v-model="text" label="Введите информация" />
        </q-card-section>
        <q-card-section>
          <p class="text-h5">Возвраст:</p>
          <div  class="flex justify-start no-warp">
            <q-input standout="bg-primary text-white" style="width: 70%;" v-model="text" label="Введите возраст" />
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
          <q-input standout="bg-primary text-white" v-model="text" label="Введите порода" />
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
          <q-btn style="max-height: 40px; max-width: 200px; border-radius: 25px;" color="primary" label="Добавить"/>
        </q-card-section>
      </q-card>
    </q-dialog>
</div>
</template>

<script setup>

import { ref } from "vue"

const activeFormAddAnimal = ref(false)
const adminBlock = ref(false)


  // dialog window

const modelAddAge = ref(1)

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

const modelAddSex = ref(true)

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

const modelAddSterilization = ref(true)

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


</script>
