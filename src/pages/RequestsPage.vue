<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit.prevent="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="req.name"
        label="Name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div class="age__sex">
        <q-input
          filled
          v-model="req.age"
          label="Age *"
         lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
          style="padding-left: 20px;"
          filled
          v-model="req.sex"
          label="Sex *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
      </div>
      <q-input
        filled
        v-model="req.FIO"
        label="FIO *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="req.phone"
        label="Phone *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="req.email"
        label="Your email *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
        ]"
      />
<!--      <q-toggle v-model="accept" label="I accept the license and terms" />-->
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn @click.prevent="$router.push( `/info` )" label="Next" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

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
.age__sex{
  display: flex;
  justify-content: space-between;
}
</style>
