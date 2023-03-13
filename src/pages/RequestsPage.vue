<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        :value="firstInput"
        @change="changeInput"
        v-model="example"
        label="Name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div class="age__sex">
        <q-input
          filled
          v-model="name"
          label="Age *"
         lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
          filled
          v-model="name"
          label="Sex *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
      </div>

      <q-input
        filled
        v-model="name"
        label="FIO *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="name"
        label="Phone *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="Email"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn @click.prevent="$router.push( `/info` )" label="Next" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import {mapMutations, mapState, mapGetters, mapActions} from 'vuex';
import store from 'vuex';
  export default {
  setup () {
  const $q = useQuasar()

  const name = ref(null)
  const age = ref(null)
  const accept = ref(false)

  return {
  name,
  age,
  accept,
    firstInput: 'hey',
    usrInfo:[
      { uName: 1, uAge: '...'},
      { uName: 2, uAge: '...'},
    ],

    methods:{
      changeInput(event){
        this.firstInput = event.target.value;
      }
    },
    computed: {
      ...mapState(["values"]),
      example: {
        set(example) {
          this.$store.commit("setValues", { example });
        },
        get() {
          // Or remove mapState and use this.$store.state.values.example
          return this.values.example;
        }
      }
    },

  onSubmit () {
  if (accept.value !== true) {
  $q.notify({
  color: 'red-5',
  textColor: 'white',
  icon: 'warning',
  message: 'You need to accept the license and terms first'
})
}
  else {
  $q.notify({
  color: 'green-4',
  textColor: 'white',
  icon: 'cloud_done',
  message: 'Submitted'
})
}
},

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
