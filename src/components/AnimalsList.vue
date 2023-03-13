<template>
        <q-card class="my-card q-mx-auto q-mt-lg" style="border-radius: 25px; max-width: 1300px;" flat bordered v-for="animal in animals" :key="animal.id">
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
</template>

<script setup>
    import { ref } from 'Vue'
    
    const animals = ref([
        {
            id: 1,
            image: "https://img.freepik.com/free-photo/closeup-shot-of-a-fluffy-sleepy-cat-looking-at-front_181624-52708.jpg?w=1380&t=st=1678724999~exp=1678725599~hmac=ad7be5cde312081c20ea763cc9ca036eb9b24dee6bb666b5eae9b841b119e29a",
            name: "Вася",
            age: "1,5 месяца",
            sex: "Мальчик",
            breed: "неизвестно",
            sterilization: "нет",
            info: "Нашли на трассе"
        },
        {
            id: 1,
            image: "https://img.freepik.com/free-photo/closeup-shot-of-a-fluffy-sleepy-cat-looking-at-front_181624-52708.jpg?w=1380&t=st=1678724999~exp=1678725599~hmac=ad7be5cde312081c20ea763cc9ca036eb9b24dee6bb666b5eae9b841b119e29a",
            name: "Вася",
            age: "1,5 месяца",
            sex: "Мальчик",
            breed: "неизвестно",
            sterilization: "нет",
            info: "Нашли на трассе"
        }
    ])


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