<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Заявки</div>
      </q-card-section>
      <q-markup-table>
        <thead>
        <tr>
          <th class="text-left">ФИО покупателя</th>
          <th class="text-right">Номер тефефона</th>
          <th class="text-right">Электронная почта</th>
          <th class="text-right">Кличка зверюшки</th>
          <th class="text-right">Возраст</th>
          <th class="text-right">Пол</th>
        </tr>
        </thead>
        <tbody  v-for="req in POSTS" :key="req.id">
        <tr>
          <td class="text-left">{{ req.FIO }}</td>
          <td class="text-right">{{ req.phone }}</td>
          <td class="text-right">{{ req.email }}</td>
          <td class="text-right">{{ req.name }}</td>
          <td class="text-right">{{ req.age }}</td>
          <td class="text-right">{{ req.sex }}</td>
        </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    ...mapGetters("auth2_0", ["POSTS"]),
  },
  methods: {
    ...mapActions("auth2_0", ["GET_POSTS"]),
  },
  mounted() {
    this.GET_POSTS();
  },
});
</script>
