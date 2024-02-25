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
      <div class="flex flex-col text-right p-4">
        <div
          v-if="userStore.name && userStore.name.user_metadata"
          @click="test"
        >
          {{ userStore.name.user_metadata.full_name }}
          <span class="text-base text-slate-400">350 m</span>
        </div>
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
const router = useRouter();

const isLoginPopupOpen = ref(false);

const toggleLoginPopup = () => {
  isLoginPopupOpen.value = !isLoginPopupOpen.value;
};
const test = () => {
  router.push("/profile");
};

watchEffect(() => {
  // Здесь можно добавить дополнительную логику, например, редирект после логина
  if (userStore.name) {
    console.log("Пользователь залогинен:", userStore.name);
  } else {
    console.log("Пользователь не залогинен");
  }
});
</script>
