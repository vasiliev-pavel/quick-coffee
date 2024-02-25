import { useUserStore } from "~/stores/user";

export default defineNuxtRouteMiddleware(async (context) => {
  const userStore = useUserStore();
  const user = useSupabaseUser();

  // Предполагая, что user содержит необходимые данные
  if (user) {
    userStore.name = user; // Обновляем store с данными пользователя
  }
});
