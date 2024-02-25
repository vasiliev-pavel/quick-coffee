import { useUserStore } from "~/stores/user";
import { createClient } from "@supabase/supabase-js";

// const supabase = createClient("https://swginaqhalapacirkgjs.supabase.co", v);

export default defineNuxtRouteMiddleware(async (context) => {
  const userStore = useUserStore();
  const user = useSupabaseUser();
  const client = useSupabaseClient();

  // Предполагая, что user содержит необходимые данные
  if (user.value) {
    // const { data } = await client.from("profiles").select("name");
    userStore.setData(user.value); // Обновляем store с данными пользователя
  }
});
