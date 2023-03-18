<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click me" color="primary" @click="prompt = true" />
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px;">
        <q-card-section>
          <div class="text-h6">ОСТАВИТЬ ЗАЯВКУ</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            filled
            v-model="req.name"
            label="Кличка питомца"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <div style="display: flex; justify-content: space-between;">
            <q-input
              filled
              v-model="req.age"
              label="возраст"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
            <q-input
              style="padding-left: 20px;"
              filled
              v-model="req.sex"
              label="пол"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Please type something']"
            />
          </div>
          <q-input
            filled
            v-model="req.FIO"
            label="ФИО"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            filled
            v-model="req.phone"
            label="тел."
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            v-model="req.email"
            label="почта"
            lazy-rules
            :rules="[
          val => val !== null && val !== '' || 'Please type your age',
        ]"
          />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Отмена" v-close-popup />
          <q-btn flat label="Забрать домой" @click="onSubmit" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import {useMutation} from "@vue/apollo-composable";
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import {mapMutations, mapState, mapGetters, mapActions} from 'vuex';
import store from 'vuex';
  export default {
  setup () {
    const req =ref({
      name:'',
      age:'',
      sex:'',
      FIO:'',
      phone:'',
      email:''
    })
  const $q = useQuasar()
  const name = ref(null)
  const age = ref(null)
  const accept = ref(false)
    const {mutate: onSubmit} = useMutation(gql`
    mutation MyMutation ($name: String, $age: Int, $sex: String, $FIO: String, $phone: Int, $email: String){
    insert_requests_one(object: {name: $name, age: $age, sex: $sex, FIO: $FIO, phone: $phone, email: $email}){
      FIO
      age
      email
      name
      phone
      sex
    }
    }
    `,()=>({
      variables:{
        name: req.value.name,
        age:req.value.age,
        sex:req.value.sex,
        FIO:req.value.FIO,
        phone:req.value.phone,
        email:req.value.email
      }
      })
    )
  return {
    prompt: ref(false),
    req,
    onSubmit,
    name,
    age,
    accept,
    methods:{},
    computed: {},

//   onSubmit () {
//   if (accept.value !== true) {
//   $q.notify({
//   color: 'red-5',
//   textColor: 'white',
//   icon: 'warning',
//   message: 'You need to accept the license and terms first'
// })
// }
//   else {
//   $q.notify({
//   color: 'green-4',
//   textColor: 'white',
//   icon: 'cloud_done',
//   message: 'Submitted'
// })
// }
// },

  onReset () {
  name.value = null
  age.value = null
  accept.value = false
}
}
}
}
</script>
<style sccs>
</style>
