<template>
  <q-page class="wrapper-animals-list">
    <q-dialog
      v-model="prompt"
      persistent
      v-for="animal in animals"
      :key="animal.id"
    >
      <q-card style="min-width: 450px; border-radius: 25px">
        <q-card-section>
          <div class="text-h6 text-black" style="color: #fefefe">
            ОСТАВИТЬ ЗАЯВКУ
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none" style="color: #fefefe">
          <q-input
            standout="bg-primary text-white"
            filled
            v-model="req.name"
            label="Кличка питомца"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <div
            style="
              display: flex;
              justify-content: space-between;
              margin: 0 0 10px;
            "
          >
            <q-input
              standout="bg-primary text-white"
              filled
              v-model="req.age"
              label="возраст"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
            <q-input
              standout="bg-primary text-white"
              filled
              v-model="req.sex"
              label="пол"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </div>
          <q-input
            standout="bg-primary text-white"
            filled
            v-model="req.FIO"
            label="ФИО"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            standout="bg-primary text-white"
            filled
            v-model="req.phone"
            label="тел."
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            standout="bg-primary text-white"
            filled
            v-model="req.email"
            label="почта"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
            ]"
          />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn
            style="background: #ef7540; color: white; border-radius: 25px"
            flat
            label="Отмена"
            v-close-popup
          />
          <q-btn
            style="background: #ef7540; color: white; border-radius: 25px"
            flat
            label="Забрать домой"
            @click="onSubmit"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-card
      class="my-card q-mx-auto q-mt-lg"
      style="border-radius: 25px; max-width: 1300px"
      flat
      v-for="(animal, index) in animals"
      :key="index"
    >
      <q-card-section horizontal class="card-section-wrapper">
        <q-img
          class="row-for-card"
          style="
            max-height: 454px;
            max-width: 800px;
            object-fit: cover;
            border-radius: 25px;
          "
          :src="animal.image"
          alt="animal-img"
        />

        <q-card-actions vertical class="q-px-md flex column justify-between">
          <div class="flex justify-around">
            <div class="q-ml-lg" style="flex-grow: 1">
              <q-item-section class="q-ml-sm">
                <q-item-label class="text-h2 text-settings q-mb-md">{{
                  animal.name
                }}</q-item-label>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-settings q-mb-md">{{
                  animal.info
                }}</q-item-label>
              </q-item-section>
              <div>
                <q-item-section class="q-ml-sm">
                  <q-item-label class="text-settings row">
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

            <q-icon
              v-if="checkId()"
              class="cursor-pointer"
              style="width: 50px; height: 50px"
              name="create"
              @click="openFormUpdate(index)"
            />
            <q-icon
              v-if="checkId()"
              class="cursor-pointer"
              style="width: 50px; height: 50px"
              name="clear"
              @click="deleteAnimal(index)"
            />
          </div>
          <div class="flex justify-around">
            <q-btn
              color="primary"
              label="Забрать домой"
              class="button-animals text-animals"
              @click="prompt = true"
            />
            <q-btn
              color="primary"
              label="Помощь"
              class="q-ml-md text-animals button-animals"
            />
          </div>
        </q-card-actions>
      </q-card-section>
    </q-card>

    <q-dialog v-model="activeFormUpdateAnimal" full-width>
      <q-card>
        <q-card-section class="row items-center q-pb-none no-wrap">
          <div class="text-h5">Форма изменения данных</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <form @submit.prevent="submitUpdateAnimal()">
          <!-- <q-card-section>
            <p class="text-h5">Фото:</p>
            <q-input
              @update:model-value="
                (val) => {
                  modelImageUpdate = val[0];
                }
              "
              filled
              type="file"
            />
          </q-card-section> -->
          <q-card-section>
            <p class="text-h5">Имя:</p>
            <q-input
              filled
              standout="bg-primary text-white"
              ref="inputRef"
              v-model="modelUpdateName"
              label="Введите имя"
              :rules="[(val) => !!val || 'Field is required']"
            />
          </q-card-section>
          <q-card-section>
            <p class="text-h5">Информация:</p>
            <q-input
              standout="bg-primary text-white"
              v-model="modelUpdateInfo"
              label="Введите информация"
            />
          </q-card-section>
          <q-card-section>
            <p class="text-h5">Возвраст:</p>
            <div class="flex justify-start no-warp">
              <q-input
                filled
                mask="##"
                style="width: 70%"
                standout="bg-primary text-white"
                ref="inputRef"
                v-model="modelUpdateAgeNum"
                label="Введите возраст"
                :rules="[rulesAge || 'Field is required']"
              />
              <q-select
                style="width: 30%"
                filled
                v-model="modelUpdateAge"
                :options="optionsUpdateAge"
                map-options
              />
            </div>
          </q-card-section>
          <q-card-section>
            <p class="text-h5">Вид:</p>
            <q-select
              filled
              v-model="modelUpdateType"
              :options="optionsUpdateType"
              map-options
            />
          </q-card-section>
          <q-card-section>
            <p class="text-h5">Пол:</p>
            <q-select
              filled
              v-model="modelUpdateSex"
              :options="optionsUpdateSex"
              map-options
            />
          </q-card-section>
          <q-card-section>
            <p class="text-h5">Порода:</p>
            <q-input
              filled
              standout="bg-primary text-white"
              ref="inputRef"
              v-model="modelUpdateBreed"
              label="Введите порода"
              :rules="[(val) => !!val || 'Field is required']"
            />
          </q-card-section>
          <q-card-section>
            <p class="text-h5">Стерилизация:</p>
            <q-select
              filled
              v-model="modelUpdateSterilization"
              :options="optionsUpdateSterilization"
              map-options
            />
          </q-card-section>
          <q-card-section class="flex justify-center">
            <q-btn
              style="max-height: 40px; max-width: 200px; border-radius: 25px"
              color="primary"
              label="Изменить"
              type="submit"
            />
          </q-card-section>
        </form>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import queryStore from "../QueryStore/query.js";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { useQuasar } from "quasar";
import cloneDeep from "lodash/clonedeep";

const store = useStore();

const prompt = ref(false);

onMounted(() => {
  queryStore.provideApolloClientFunction();
  const { result } = useQuery(queryStore.SORT_ANIMALS("", "", "", ""));
  store.dispatch("animals/GET_DATA_ANIMALS", result);
});

const animals = computed(() => store.getters["animals/ANIMALS"]);

const req = ref({
  name: "",
  sex: "",
  FIO: "",
  phone: "",
  email: "",
  age: "",
});
const name = ref(null);
const age = ref(null);
const accept = ref(false);
const { mutate: onSubmit } = useMutation(
  gql`
    mutation MyMutation(
      $name: String
      $sex: String
      $FIO: String
      $phone: String
      $email: String
      $age: String
    ) {
      insert_requests_one(
        object: {
          name: $name
          sex: $sex
          FIO: $FIO
          phone: $phone
          email: $email
          age: $age
        }
      ) {
        FIO
        email
        name
        phone
        sex
        age
      }
    }
  `,
  () => ({
    variables: {
      name: req.value.name,
      sex: req.value.sex,
      FIO: req.value.FIO,
      phone: req.value.phone,
      email: req.value.email,
      age: req.value.age,
    },
  })
);

const activeFormUpdateAnimal = ref(false);
const modelUpdateName = ref("");
const modelUpdateInfo = ref("");
const modelUpdateAgeNum = ref();
const modelUpdateBreed = ref("");
const modelUpdateAge = ref();
const modelUpdateSex = ref();
const modelUpdateSterilization = ref();
const modelUpdateType = ref();
// const modelImageUpdate = ref(null);
const animalId = ref();

const openFormUpdate = (index) => {
  modelUpdateName.value = animals.value[index].name;
  modelUpdateInfo.value = animals.value[index].info;
  if (store.state.animals.animals[index].age <= 12) {
    modelUpdateAgeNum.value = store.state.animals.animals[index].age;
    modelUpdateAge.value = {
      label: "Месяц",
      value: 1,
    };
  } else {
    modelUpdateAgeNum.value = store.state.animals.animals[index].age / 12;
    modelUpdateAge.value = {
      label: "Год",
      value: 2,
    };
  }
  if (store.state.animals.animals[index].sex === true) {
    modelUpdateSex.value = {
      label: "Мальчик",
      value: true,
    };
  } else {
    modelUpdateSex.value = {
      label: "Девочка",
      value: false,
    };
  }
  modelUpdateBreed.value = animals.value[index].breed;
  if (store.state.animals.animals[index].sterilization === true) {
    modelUpdateSterilization.value = {
      label: "Есть",
      value: true,
    };
  } else {
    modelUpdateSterilization.value = {
      label: "Нет",
      value: false,
    };
  }
  if (store.state.animals.animals[index].type === "кот") {
    modelUpdateType.value = {
      label: "Кот",
      value: "кот",
    };
  } else {
    modelUpdateType.value = {
      label: "Собака",
      value: "собака",
    };
  }
  animalId.value = `_eq: "${animals.value[index].id}"`;

  activeFormUpdateAnimal.value = !activeFormUpdateAnimal.value;
};

const $q = useQuasar();

const optionsUpdateAge = [
  {
    label: "Месяц",
    value: 1,
  },
  {
    label: "Год",
    value: 2,
  },
];

const optionsUpdateSex = [
  {
    label: "Мальчик",
    value: true,
  },
  {
    label: "Девочка",
    value: false,
  },
];

const optionsUpdateSterilization = [
  {
    label: "Есть",
    value: true,
  },
  {
    label: "Нет",
    value: false,
  },
];

const optionsUpdateType = [
  {
    label: "Кот",
    value: "кот",
  },
  {
    label: "Собака",
    value: "собака",
  },
];

const rulesAge = () => {
  if (modelUpdateAgeNum.value === "") {
    return false;
  } else if (modelUpdateAge.value === 1 && modelUpdateAgeNum.value > 12) {
    return false;
  } else {
    return true;
  }
};

function UpdateAnimal() {
  queryStore.provideApolloClientFunction();

  const { result } = useQuery(queryStore.SORT_ANIMALS("", "", "", ""));

  const { mutate: UpdateAnimalMutation } = useMutation(
    queryStore.UPDATE_ANIMAL(animalId.value),
    {
      variables: {
        age: modelUpdateAgeNum.value,
        breed: modelUpdateBreed.value,
        // image: modelImageUpdate.value,
        info: modelUpdateInfo.value,
        name: modelUpdateName.value,
        sex: modelUpdateSex.value.value,
        sterilization: modelUpdateSterilization.value.value,
        type: modelUpdateType.value.value,
      },
      update: (cache, { data: { update_animals } }) => {
        const data = cloneDeep(
          cache.readQuery({ query: queryStore.SORT_ANIMALS("", "", "", "") })
        );
        let indexData = data.animals.indexOf(
          (el) => el.id === update_animals.returning[0].id
        );
        data.animals[indexData] = update_animals.returning[0];
        cache.writeQuery({
          query: queryStore.SORT_ANIMALS("", "", "", ""),
          data,
        });
      },
      onCompleted: store.dispatch("animals/GET_DATA_ANIMALS", result),
    }
  );
  UpdateAnimalMutation();
  activeFormUpdateAnimal.value = false;
}

const submitUpdateAnimal = () => {
  if (
    modelUpdateName.value === "" ||
    modelUpdateAgeNum.value === null ||
    modelUpdateAgeNum.value > 13 ||
    modelUpdateBreed.value === ""
  ) {
    $q.notify({
      message: `Вы заполнили не все поля верно`,
      color: "primary",
    });
  } else {
    if (modelUpdateAge.value.value === 2) {
      modelUpdateAgeNum.value = modelUpdateAgeNum.value * 12;
    }
  }

  UpdateAnimal();
};

const deleteAnimalId = ref();

const deleteAnimal = (index) => {
  queryStore.provideApolloClientFunction();

  const { result } = useQuery(queryStore.SORT_ANIMALS("", "", "", ""));

  deleteAnimalId.value = `_eq: "${animals.value[index].id}"`;

  const { mutate: DeleteAnimalMutation } = useMutation(
    queryStore.DELETE_ANIMAL(deleteAnimalId.value),
    {
      update: (cache, { data: { delete_animals } }) => {
        const data = cloneDeep(
          cache.readQuery({ query: queryStore.SORT_ANIMALS("", "", "", "") })
        );
        data.animals = data.animals.filter(
          (el) => el.id !== delete_animals.returning[0].id
        );

        cache.writeQuery({
          query: queryStore.SORT_ANIMALS("", "", "", ""),
          data,
        });
      },
      onCompleted: store.dispatch("animals/GET_DATA_ANIMALS", result),
    }
  );
  DeleteAnimalMutation();
};
const checkId = () => {
  return store.state.roles.users.includes(JSON.parse(localStorage.user).id);
};
</script>

<style lang="scss">
.button-animals {
  width: 40%;
  border-radius: 25px;
}
.text-settings {
  width: 100%;
  height: 100%;
}
.wrapper-sorting {
  border-radius: 25px;
  max-width: 1300px;
  background: white;
  margin: 0 auto;
  margin-top: 15px;
}
.wrapper-animals-list {
  background: rgba(255, 0, 0, 0);
}
.wrapper-type {
  border-right: 1px solid rgba(0, 0, 0, 0.295);
}
@media screen and (max-width: 800px) {
  .card-section-wrapper {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
}
@media screen and (min-width: 800px) {
  .card-section-wrapper {
    display: grid;
    grid-template-columns: 7fr 5fr;
  }
}
</style>
