<template>
  <div>
    <nav
      class="navbar flex my-4 justify-between text-white font-bold text-xl rounded"
    >
      <NuxtLink to="/" class="flex flex-col text-left p-4">
        Abu-Dhabi Mall
        <span class="text-base text-slate-400">till 11:30</span>
      </NuxtLink>
      <!-- Проверяем, залогинен ли пользователь -->
      <ClientOnly fallback-tag="span" fallback="Loading data...">
        <div class="flex flex-col text-right p-4">
          <NuxtLink v-if="user" to="/profile">
            <!-- Если пользователь залогинен, показываем его имя -->
            {{ user.user_metadata.full_name }}
            <span class="text-base text-slate-400">350 m</span>
          </NuxtLink>
          <!-- Если пользователь не залогинен, показываем "Login" -->
          <div v-else>
            <button
              @click="toggleLoginPopup"
              class="text-slate-400 font-bold py-2 px-4"
            >
              Login
            </button>
            <span class="text-base text-slate-400">350 m</span>
          </div>
        </div>
      </ClientOnly>
    </nav>
    <LoginPopup
      :isOpen="isLoginPopupOpen"
      @update:isOpen="isLoginPopupOpen = $event"
    />
  </div>
</template>

<script setup>
import LoginPopup from "~/components/LoginPopup.vue";
const user = useSupabaseUser();
const userStore = useUserStore();

const isLoginPopupOpen = ref(false);

const toggleLoginPopup = () => {
  isLoginPopupOpen.value = !isLoginPopupOpen.value;
};

onMounted(() => {
  // Здесь можно добавить дополнительную логику, например, редирект после логина
  if (user) {
    console.log("Пользователь залогинен:", user);
  } else {
    console.log("Пользователь не залогинен");
  }
});
</script>
