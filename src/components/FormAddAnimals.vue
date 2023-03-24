<template>
  <div>
    <div class="q-ma-lg q-pa-sm wrapper-sorting">
      <div
        @click="adminBlock = !adminBlock"
        class="cursor-pointer flex justify-center items-center"
      >
        <p class="q-ma-sm text-h5 text-center">Панель админа</p>
        <q-icon
          :name="adminBlock ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        />
      </div>

      <div v-if="adminBlock">
        <div class="sort-animals-wrapper">
          <q-btn
            style="max-height: 40px; max-width: 200px; border-radius: 25px"
            color="primary"
            label="Добавить животное"
            @click="activeFormAddAnimal = true"
          />
        </div>
      </div>
    </div>

    <q-dialog v-model="activeFormAddAnimal" full-width>
      <q-card>
        <q-card-section class="row items-center q-pb-none no-wrap">
          <div class="text-h5">Форма добавления животных</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <form @submit.prevent="submitAddAnimal()">
          <q-card-section>
            <p class="text-h5">Фото:</p>

            <input type="file" @change="handleFileUpload" />
          </q-card-section>
          <q-card-section>
            <p class="text-h5">Имя:</p>
            <q-input
              filled
              standout="bg-primary text-white"
              ref="inputRef"
              v-model="modelAddName"
              label="Введите имя"
              :rules="[(val) => !!val || 'Field is required']"
            />
          </q-card-section>
          <q-card-section>
            <p class="text-h5">Информация:</p>
            <q-input
              standout="bg-primary text-white"
              v-model="modelAddInfo"
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
                v-model="modelAddAgeNum"
                label="Введите возраст"
                :rules="[rulesAge || 'Field is required']"
              />
              <q-select
                style="width: 30%"
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
              :rules="[(val) => !!val || 'Field is required']"
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
            <q-btn
              style="max-height: 40px; max-width: 200px; border-radius: 25px"
              color="primary"
              label="Добавить"
              type="submit"
            />
          </q-card-section>
        </form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import queryStore from "../QueryStore/query.js";
import { useQuasar } from "quasar";
import { useQuery, useMutation } from "@vue/apollo-composable";
import cloneDeep from "lodash/clonedeep";
import { mapGetters, useStore } from "vuex";
import { ref, reactive } from "vue";
import { createClient } from "@supabase/supabase-js";

const avatar = ref(null);
const handleFileUpload = (event) => {
  console.log(event);
  avatar.value = event.target.files[0];
  console.log("avatar после: ", avatar.value);
};
const avatarUrl = ref("");
const supabase = createClient(
  "https://sjmzojbuschuhwujqawh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqbXpvamJ1c2NodWh3dWpxYXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk0Mjk4MTMsImV4cCI6MTk5NTAwNTgxM30.6Qw4zPeaT-hKxYNugsyaAkMcw02Bg4nAglpk-GMEhGg"
);
const activeFormAddAnimal = ref(false);
const adminBlock = ref(false);
const modelAddName = ref("");
const avatarInput = ref("");
const modelAddInfo = ref("");
const modelAddAgeNum = ref();
const modelAddBreed = ref("");
const modelAddAge = ref({
  label: "Месяц",
  value: 1,
});
const modelAddSex = ref({
  label: "Мальчик",
  value: true,
});
const modelAddSterilization = ref({
  label: "Есть",
  value: true,
});
const modelAddType = ref({
  label: "Кот",
  value: "кот",
});
const modelImageAdd = ref(null);

const store = useStore();

const $q = useQuasar();

const optionsAddAge = [
  {
    label: "Месяц",
    value: 1,
  },
  {
    label: "Год",
    value: 2,
  },
];

const optionsAddSex = [
  {
    label: "Мальчик",
    value: true,
  },
  {
    label: "Девочка",
    value: false,
  },
];

const optionsAddSterilization = [
  {
    label: "Есть",
    value: true,
  },
  {
    label: "Нет",
    value: false,
  },
];

const optionsAddType = [
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
  if (modelAddAgeNum.value === "") {
    return false;
  } else if (modelAddAge.value === 1 && modelAddAgeNum.value > 12) {
    return false;
  } else {
    return true;
  }
};

async function addAnimal() {
  queryStore.provideApolloClientFunction();

  const date = new Date(new Date());

  if (avatar.value) {
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(avatar.value.name, avatar.value, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      console.log(error);
    } else {
      // this.$store.commit('shareAvatarName', avatar.value);
      console.log(data);
      avatarInput.value = `https://sjmzojbuschuhwujqawh.supabase.co/storage/v1/object/public/avatars/${avatar.value.name}`;
    }
  }

  const { result } = useQuery(queryStore.SORT_ANIMALS("", "", "", ""));

  const { mutate: addAnimalMutation } = useMutation(queryStore.ADD_ANIMAL, {
    variables: {
      age: modelAddAgeNum.value,
      breed: modelAddBreed.value,
      image: avatarInput.value,
      info: modelAddInfo.value,
      name: modelAddName.value,
      sex: modelAddSex.value.value,
      sterilization: modelAddSterilization.value.value,
      type: modelAddType.value.value,
      date: date.toISOString(),
    },
    update: (cache, { data: { insert_animals_one } }) => {
      const data = cloneDeep(
        cache.readQuery({ query: queryStore.SORT_ANIMALS("", "", "", "") })
      );
      console.log(data.animals);
      data.animals.unshift(insert_animals_one);
      cache.writeQuery({
        query: queryStore.SORT_ANIMALS("", "", "", ""),
        data,
      });
    },
    onCompleted: store.dispatch("animals/GET_DATA_ANIMALS", result),
  });
  addAnimalMutation();
  modelAddName.value = "";
  modelAddInfo.value = "";
  modelAddAgeNum.value === null;
  modelAddBreed.value = "";
  modelAddAge.value = {
    label: "Месяц",
    value: 1,
  };
  modelAddSex.value = {
    label: "Мальчик",
    value: true,
  };
  modelAddSterilization.value = {
    label: "Есть",
    value: true,
  };
  modelAddType.value = {
    label: "Кот",
    value: "кот",
  };
  modelImageAdd.value = null;
}

const submitAddAnimal = async () => {
  if (
    modelAddName.value === "" ||
    modelAddAgeNum.value === null ||
    modelAddAgeNum.value > 13 ||
    modelAddBreed.value === ""
  ) {
    $q.notify({
      message: `Вы заполнили не все поля верно`,
      color: "primary",
    });
  } else {
    if (modelAddAge.value.value === 2) {
      modelAddAgeNum.value = modelAddAgeNum.value * 12;
    }

    addAnimal();
    console.log(store.state.animals.animals);
  }
};
console.log("avatar до: ", avatar.value);
</script>
