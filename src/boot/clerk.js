import Clerk from "@clerk/clerk-js";
import { boot } from "quasar/wrappers";

export default boot(async ({ app }) => {
  const publishableKey =
    "pk_test_YWN0aXZlLWtvYWxhLTk4LmNsZXJrLmFjY291bnRzLmRldiQ";
  const clerk = new Clerk(publishableKey);
  await clerk.load({
    // Set load options here...
  });
  app.provide(clerk);
});
