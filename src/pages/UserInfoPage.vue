<template>
  <q-page class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Заявки</div>
      </q-card-section>
      <q-markup-table>
        <thead>
          <tr class="text-left">
            <th>ФИО покупателя</th>
            <th>Номер тефефона</th>
            <th>Электронная почта</th>
            <th>Кличка зверюшки</th>
            <th>Возраст</th>
            <th>Пол</th>
          </tr>
        </thead>
        <tbody v-for="req in POSTS" :key="req.id">
          <tr class="text-left">
            <td>{{ req.FIO }}</td>
            <td>{{ req.phone }}</td>
            <td>{{ req.email }}</td>
            <td>{{ req.name }}</td>
            <td>{{ req.age }}</td>
            <td>{{ req.sex }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </q-page>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    ...mapGetters("requests", ["POSTS"]),
  },
  methods: {
    ...mapActions("requests", ["GET_POSTS"]),
  },
  mounted() {
    this.GET_POSTS();
  },
});
</script>
