<template>
    <div class="wrapper-animals-list">
        <div class="q-ma-lg q-pa-sm wrapper-sorting">
        <q-btn class="q-mx-lg" :color="sortCat ? 'primary' : 'white'" :text-color="sortCat ? 'white' : 'primary'" label="Кошки" @click="sortCatFunction()"/>
        <q-btn :color="sortDog ? 'primary' : 'white'" :text-color="sortDog ? 'white' : 'primary'" label="Собаки" @click="sortDogFunction()"/>
        </div>

        <q-card class="my-card q-mx-auto q-mt-lg" style="border-radius: 25px; max-width: 1300px;" flat v-for="animal in animals" :key="animal.id">
      <q-card-section horizontal class="card-section-wrapper">

        <q-img
          class="row-for-card"
          style="max-height: 454px; max-width: 800px; object-fit: cover; border-radius: 25px;"
          :src="animal.image" alt="animal-img"
        />

        <q-card-actions vertical class="q-px-md flex column justify-between">
            <div>
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

        <div class="flex justify-around no-wrap">
            <q-btn color="secondary" label="Забрать домой" class="button-animals text-animals"/>
            <q-btn color="secondary" label="Помощь" class="q-ml-md text-animals button-animals"  />
        </div>

        </q-card-actions>
      </q-card-section>
    </q-card>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore()
const ANIMALS = computed(() => store.getters["animals/ANIMALS"])
const animals = ref(ANIMALS.value)


const sortCat = ref(false)
const sortDog = ref(false)
const typeAnimal = ref()

const sortCatFunction = () => {
    sortCat.value = !sortCat.value
    sortingСheck()
    typeAnimal.value = "кот"
    if(sortCat.value){
        sortAnimals()
    }
}

const sortDogFunction = () => {
    sortDog.value = !sortDog.value
    sortingСheck()
    typeAnimal.value = "собака"
    if(sortDog.value){
        sortAnimals()
    }
}

const sortingСheck = () => {
    if(sortCat.value === true && sortDog.value === true){
        sortCat.value = false
        sortDog.value = false
    } else
    if(sortCat.value === false && sortDog.value === false){
        animals.value = ANIMALS.value
    }
}

const sortAnimals = () => {
    animals.value = animals.value.filter(el => el.type === typeAnimal.value)
}

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
@media screen and (max-width: 600px) {
    .card-section-wrapper{
    display: grid;
    grid-template-rows: 1fr 1fr;
    }
}
@media screen and (min-width: 600px) {
    .card-section-wrapper{
    display: grid;
    grid-template-columns: 7fr 5fr;
    }
}
</style>
