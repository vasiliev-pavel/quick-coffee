<template>
  <div class="rounded-lg bg-[#0f172afa] text-white p-4 mb-4">
    <h2 class="text-4xl font-bold">
      Тут всякие настройки тип номер ввести или имя если регался через телефон
    </h2>
    <Button @click="logOut" class="mt-4" variant="secondary">Log out</Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const supabase = useSupabaseClient();
const router = useRouter();
const userStore = useUserStore();

const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  userStore.name = null;
  router.push("/");
};
</script>
