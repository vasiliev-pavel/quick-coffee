<template>
  <div class="rounded-lg bg-[#0f172afa] text-white p-4 mb-4">
    <h2 class="text-4xl font-bold">{{ user.user_metadata.full_name }}</h2>
    <NuxtLink to="/settings">
      <Button class="mt-4" variant="secondary"> Edit Profile </Button>
    </NuxtLink>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
</script>
