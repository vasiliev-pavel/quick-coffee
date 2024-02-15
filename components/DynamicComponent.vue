<template>
  <div class="dynamic-component">
    <div class="flex flex-col">
      <div
        class="content relative bg-white p-5 flex flex-col justify-end"
        style="
          background-image: url('https://foni.club/uploads/posts/2023-02/1676041650_foni-club-p-krasivie-oboi-kofe-na-telefon-5.jpg');
          background-size: cover;
          background-position: center;
          flex-grow: 1;
        "
      >
        <!-- Содержимое content поверх фонового изображения -->
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <button
          class="bg-blue-500 text-white font-bold py-2 px-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          test
        </button>
      </div>
      <!-- Карточки продукции остаются ниже -->
      <div class="coffee-cards grid grid-cols-2 gap-5 m-5">
        <MainCard
          v-for="coffee in coffees"
          :key="coffee.id"
          :title="coffee.title"
          :price="coffee.price"
          :volume="coffee.volume"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const coffees = ref([
  { id: 1, title: "Эспрессо", price: 2, volume: 120 },
  { id: 2, title: "Американо", price: 4, volume: 100 },
  { id: 3, title: "Латте", price: 3, volume: 150 },
  { id: 5, title: "Эспрессо", price: 2, volume: 120 },
  { id: 6, title: "Американо", price: 4, volume: 100 },
  { id: 7, title: "Латте", price: 3, volume: 150 },
  // Добавьте другие виды кофе по вашему выбору
]);
const props = defineProps({
  title: String,
  content: String,
  color: String, // Добавленный пропс для цвета текста
});
</script>

<style>
.dynamic-component {
  width: 100%;
  height: 100dvh;
}
.content {
  height: 100dvh;
  transition: height 0.2s linear;
}
/* .content {
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
  position: relative;

  flex-grow: 1;
}
.coffee-cards {
  z-index: 9;
} */
</style>
