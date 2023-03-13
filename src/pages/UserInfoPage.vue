<template>
  <div>
    <div>{{ usrInfo.name }}</div>
    <div>{{ usrInfo.age }}</div>
    {{$store.state.auth.test}}
    {{ $store.commit('someMutation') }}
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">User 'ID'</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      usrInfo:[],
    }
  }
}
</script>

<style lang="scss" scoped>
.post{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

</style>
