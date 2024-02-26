<template>
  <section class="menu mt-2">
    <h2 class="p-4 text-5xl text-white font-bold">{{ category }}</h2>
    <div class="menu_list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <NuxtLink
        :to="`/card/${product.id}`"
        v-for="product in products"
        :key="product.id"
        class="menu_item rounded-[15px] p-6"
      >
        <img :src="product.photo" />
        <h3 class="text-xl font-bold">{{ product.title }}</h3>
        <span class="text-lg">{{ product.price }}</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Product {
  id: string;
  photo: string;
  video: string;
  title: string;
  description: string;
  price: string;
  categories: object;
  sub_category: string;
  nutritions: string;
  weight: string;
  protein: string;
  fats: string;
  carbs: string;
}

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  products: {
    type: Array as PropType<Product[]>,
    required: true,
    default: () => [],
  },
});
</script>

<style>
.menu {
  display: flex;
  flex-direction: column;
  background-color: #152330;
  transition: 0.4s all;
}

.menu_item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: #fff;

  transition: 0.4s all;
  background-color: #0f172afa;

  img {
    transition: 0.4s all;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>
