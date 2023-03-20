<template>
  <q-page class="column items-center justify-evenly">
    <div
      style="width: 100%; max-width: 400px"
      class="q-pa-md bg-white rounded-borders"
    >
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        stamp="7 minutes ago"
        sent
        text-color="white"
        bg-color="primary"
      >
        <div>Hey there!</div>

        <div>
          Have you seen Quasar?
          <img
            src="https://cdn.quasar.dev/img/discord-omq.png"
            class="my-emoticon"
          />
        </div>
      </q-chat-message>

      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        bg-color="amber"
      >
        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
  </q-page>
</template>
<script></script>
<style lang="scss">
.my-emoticon {
  vertical-align: middle;
  height: 2em;
  width: 2em;
}
</style>
