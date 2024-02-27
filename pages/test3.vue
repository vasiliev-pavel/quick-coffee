<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <!-- Измененный блок с условными классами -->
    <div
      :class="[
        ' transition-block bg-blue-500 w-[50rem]',
        isSticky
          ? 'fixed top-0 left-1/2 transform -translate-x-1/2 z-50 h-16 flex items-center justify-between px-4'
          : 'h-[40rem]',
      ]"
    >
      <img
        v-if="isSticky"
        src="/coffee.png"
        alt="Маленькое фото"
        class="h-12 w-12 rounded-full"
      />
      <div v-if="isSticky" class="flex space-x-2">
        <!-- Примеры кружков для выбора размера -->
        <div class="w-6 h-6 bg-red-500 rounded-full"></div>
        <div class="w-6 h-6 bg-green-500 rounded-full"></div>
        <div class="w-6 h-6 bg-blue-500 rounded-full"></div>
      </div>
      <span v-if="isSticky" class="text-white">Цена: $100</span>
      <button v-if="isSticky" class="bg-yellow-500 px-4 py-2 rounded">+</button>
    </div>
    <div class="grid grid-cols-1 gap-4 pt-44">
      <div class="bg-red-500 w-24 h-24">Квадрат 1</div>
      <div class="bg-green-500 w-24 h-24">Квадрат 2</div>
      <div class="bg-yellow-500 w-24 h-24">Квадрат 3</div>
      <div class="bg-red-500 w-24 h-24">Квадрат 1</div>
      <div class="bg-green-500 w-24 h-24">Квадрат 2</div>
      <div class="bg-yellow-500 w-24 h-24">Квадрат 3</div>
      <div class="bg-red-500 w-24 h-24">Квадрат 1</div>
      <div class="bg-green-500 w-24 h-24">Квадрат 2</div>
      <div class="bg-yellow-500 w-24 h-24">Квадрат 3</div>
      <!-- Добавьте больше квадратов по аналогии, если нужно -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.transition-block {
  transition: height 0.4s ease, background-color 0.4s ease;
}
</style>
