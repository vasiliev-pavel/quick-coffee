<template>
    <div class="rounded-lg bg-[#0f172afa] text-white p-4 mb-4">
        <h2 class="text-4xl font-bold">Total: $13.43</h2>
        <Button class="mt-4" variant="secondary">Apple Pay</Button>
        <Button class="mt-4 ml-4" variant="secondary">Google Pay</Button>
        <Button class="mt-4 ml-4" variant="secondary">Add Card</Button>
    </div>
    <Menu category="Cart" :products="products" />
</template>

<script setup lang="ts">
import { cups, categories, products } from '~/mock/index'
</script>