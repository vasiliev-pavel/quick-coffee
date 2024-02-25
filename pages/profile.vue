<template>
    <div class="rounded-lg bg-[#0f172afa] text-white p-4 mb-4">
        <h2 class="text-4xl font-bold">Sheikh Pasha</h2>
        <Button class="mt-4" variant="secondary">Edit Profile</Button>
    </div>
    <Menu category="History" :products="products" />
</template>

<script setup lang="ts">
import { cups, categories, products } from '~/mock/index'
</script>