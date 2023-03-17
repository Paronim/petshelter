<template>
  <q-layout>
    <q-page-container>
  <q-page class="row items-center justify-evenly">
    <q-list>
      <q-item-label header> Requests List </q-item-label>
      <q-item v-for="req in POSTS" :key="req.id">
        <q-item-section class="my-box q-hoverable">
          <q-item-label>
           <p>{{ req.FIO }} {{ req.phone }} {{ req.email }} requests on getting {{ req.name }} {{ req.age }} {{ req.sex }}</p>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import { defineComponent} from "vue";
export default defineComponent({
      computed:{
        ...mapGetters('auth2_0', ['POSTS']),
      },
      methods:{
        ...mapActions('auth2_0',['GET_POSTS']),
        },
      mounted(){
        this.GET_POSTS();
      },
})
</script>


<style lang="scss" scoped>
.post{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

</style>
