<template>
  <div class="header">
    <button
      v-for="(component, index) in components"
      :key="index"
      @click="switchTo(index)"
    >
      {{ component }}
    </button>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  components: Array,
});

const emit = defineEmits(["switch"]);

function switchTo(index) {
  emit("switch", index);
}
</script>

<style>
.header {
  position: fixed; /* Закрепляем header на верху страницы */
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0; /* Лёгкий фон для видимости */
  padding: 10px 0;
}
</style>

<!-- Header.vue
<template>
  <div
    class="fixed top-0 w-full flex justify-center items-center overflow-hidden font-Kanit z-10 m-2"
  >
    <div class="scroll">
      <div class="tag-container">
        <span
          v-for="(coffee, index) in itemList"
          :key="index"
          class="tag"
          @click="$emit('select-category', coffee)"
        >
          {{ coffee }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const itemList = [
  "Teas",
  "Hot Coffees",
  "Bakery",
  "Cold Coffees",
  "Milo",
  "Americano",
  "Decaf",
  "Flat White",
  "Black Eye",
];
</script>

<style>
.scroll {
  display: flex;
  overflow-x: scroll; /* Используйте scroll вместо auto для позволения бесконечной прокрутки */
  scrollbar-width: none; /* Убираем стандартный скроллбар для Firefox */
  -ms-overflow-style: none; /* Убираем стандартный скроллбар для IE и Edge */
}

.scroll::-webkit-scrollbar {
  display: none; /* Убираем стандартный скроллбар для WebKit браузеров */
}

.tag-container {
  display: flex;
  padding: 10px; /* Добавляем внутренний отступ для контейнера */
  white-space: nowrap; /* Запрещаем перенос строк */
}

.tag {
  margin: 0 10px; /* Убираем отступы по бокам и оставляем только горизонтальный отступ */
  background: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
}
</style> -->
