// export default defineNuxtMiddleware(async (context) => {
//   const { $supabase, redirect } = context;

//   const user = await $supabase.auth.user();

//   // Проверяем, залогинен ли пользователь
//   if (!user) {
//     // Если пользователь не залогинен, можно перенаправить на страницу входа
//     return redirect("/login");
//   }

//   // Если пользователь залогинен, добавляем его данные в состояние
//   context.store.commit("user/setUser", user);
// });
