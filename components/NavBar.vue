<template>
  <nav
    class="navbar flex my-4 justify-between text-white font-bold text-xl rounded"
  >
    <NuxtLink to="/" class="flex flex-col text-left p-4">
      Abu-Dhabi Mall
      <span class="text-base text-slate-400">till 11:30</span>
    </NuxtLink>
    <!-- Проверяем, залогинен ли пользователь -->
    <div class="flex flex-col text-right p-4">
      <NuxtLink v-if="user" to="/profile">
        <!-- Если пользователь залогинен, показываем его имя -->
        {{ user.user_metadata.full_name }}
        <span class="text-base text-slate-400">350 m</span>
      </NuxtLink>
      <NuxtLink v-else to="/login">
        <!-- Если пользователь не залогинен, показываем "Login" -->
        Login
        <span class="text-base text-slate-400">350 m</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const user = useSupabaseUser();

onMounted(() => {
  // Здесь можно добавить дополнительную логику, например, редирект после логина
  if (user.value) {
    console.log("Пользователь залогинен:", user.value);
  } else {
    console.log("Пользователь не залогинен");
  }
});
</script>
