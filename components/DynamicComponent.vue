<template>
  <div class="dynamic-component">
    <div>
      <div
        class="content bg-white p-5 flex flex-col justify-end"
        style="
          background-image: url('https://foni.club/uploads/posts/2023-02/1676041650_foni-club-p-krasivie-oboi-kofe-na-telefon-5.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <div class="mb-16 flex flex-col items-start">
          <!-- Обертка для текста и кнопки -->
          <h2 class="text-xl font-bold">{{ title }}</h2>
          <button
            class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 self-start"
          >
            test
          </button>
        </div>
      </div>
      <!-- Карточки продукции остаются ниже -->
      <div class="coffee-cards h-screen">
        <div class="grid grid-cols-2 gap-5 m-5">
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
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import MainCard from "~/components/MainCards.vue";

onMounted(() => {
  if (process.client) {
    window.addEventListener("scroll", handleScroll);
  }
});
function handleScroll() {
  console.log(window.scrollY);
}

const coffees = ref([
  { id: 1, title: "Эспрессо", price: 2, volume: 120 },
  { id: 2, title: "Американо", price: 4, volume: 100 },
  { id: 3, title: "Латте", price: 3, volume: 150 },
  // { id: 5, title: "Эспрессо", price: 2, volume: 120 },
  // { id: 6, title: "Американо", price: 4, volume: 100 },
  // { id: 7, title: "Латте", price: 3, volume: 150 },
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
  height: 100dvh;
  width: 100%;
}
.content {
  height: 100dvh;
  position: sticky;
  top: 0;
  z-index: -1; /* Устанавливаем отрицательный z-index */
  transition: height 0.2s linear;
}
.coffee-cards {
  margin-top: -2rem; /* Отрицательный отступ для создания эффекта выступания */
  z-index: 1;
  background-color: white;
}
</style>
