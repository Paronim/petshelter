<template>
  <router-view />
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// const store = useStore();

// const { result } = useQuery(gql`
//   query {
//     users {
//       user_id
//       id
//     }
//   }
// `);
// store.dispatch("roles/GET_USERS", result);

onMounted(() => {
  const publishableKey =
    "pk_test_YWN0aXZlLWtvYWxhLTk4LmNsZXJrLmFjY291bnRzLmRldiQ"; // <- Add Publishable Key here
  const userUuid = uuidv4();

  const startClerk = async () => {
    const Clerk = window.Clerk;

    try {
      // Load Clerk environment and session if available
      await Clerk.load();

      const userButton = document.getElementById("user-button");
      const authLinks = document.getElementById("auth-links");

      Clerk.addListener(({ user }) => {
        // Display links conditionally based on user state
        authLinks.style.display = user ? "none" : "block";
      });

      if (Clerk.user) {
        // Mount user button component
        Clerk.mountUserButton(userButton);
        userButton.style.margin = "0 15px";
        localStorage.setItem("user", JSON.stringify(Clerk?.user));
        sessionStorage.setItem(
          "token",
          await Clerk.session.getToken({ template: "hasura" })
        );
      } else {
        // localStorage.removeItem("user");
        localStorage.setItem(
          "user",
          JSON.stringify({
            Id: userUuid,
            firstName: `Пользователь ${userUuid.slice(0, 4)}`,
          })
        );
        sessionStorage.setItem("token", "");
      }
    } catch (err) {
      console.error("Error starting Clerk: ", err);
    }
  };

  (() => {
    const script = document.createElement("script");
    script.setAttribute("data-clerk-publishable-key", publishableKey);
    script.async = true;
    script.src = `https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`;
    script.crossOrigin = "anonymous";
    script.addEventListener("load", startClerk);
    script.addEventListener("error", () => {
      document.getElementById("no-frontend-api-warning").hidden = false;
    });
    document.body.appendChild(script);
  })();
});
</script>
