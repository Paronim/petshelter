<template>

  <q-btn style="max-height: 40px; max-width: 200px; border-radius: 25px;" color="primary" label="Добавить животное" @click="activeFormAddAnimal = true"/>

  <q-dialog v-model="activeFormAddAnimal">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h5">Форма добавления животных</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>

        <q-card-section>
          <q-input standout="bg-teal text-white" v-model="text" label="Имя" />
        </q-card-section>
        <q-card-section>
          <q-input standout="bg-teal text-white" v-model="text" label="Информация" />
        </q-card-section>
        <q-card-section class="flex justify-start">
          <q-input standout="bg-teal text-white" v-model="text" label="Возраст" />
          <q-select
          filled
          v-model="modelAddAge"
          :options="optionsAddAge"
          map-options
        />
        </q-card-section>
        <q-card-section>
          <q-select
          filled
          v-model="modelAddSex"
          :options="optionsAddSex"
          map-options
        />
        </q-card-section>
        <q-card-section>
          <q-input standout="bg-teal text-white" v-model="text" label="Порода" />
        </q-card-section>
        <q-card-section>
          <q-select
          filled
          v-model="modelAddSterilization"
          :options="optionsAddSterilization"
          map-options
        />
        </q-card-section>
      </q-card>
    </q-dialog>

</template>

<script setup>

import { ref } from "vue"

const activeFormAddAnimal = ref(false)


  // dialog window
const formAnimals = ref({})

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

const modelAddSex = ref(1)

const optionsAddSex = [
        {
          label: 'Месяц',
          value: 1
        },
        {
          label: 'Год',
          value: 2
        }
      ]

const modelAddSterilization = ref(1)

const optionsAddSterilization = [
        {
          label: 'Месяц',
          value: 1
        },
        {
          label: 'Год',
          value: 2
        }
      ]


</script>
