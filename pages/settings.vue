<template>
  <div class="rounded-lg bg-[#0f172afa] text-white p-4 mb-4">
    <h2 class="text-4xl font-bold">Sheikh Pasha</h2>
    <NuxtLink to="/profile">
      <Button @click="logOut" class="mt-4" variant="secondary">Log out</Button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
const supabase = useSupabaseClient();

const logOut = async () => {
  const { error } = await supabase.auth.signOut();
};
</script>
