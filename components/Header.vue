<!-- header.vue -->
<template>
  <div class="header">
    <div class="scroll">
      <div class="tag-container font-Kanit">
        <button
          v-for="(component, index) in components"
          :key="index"
          class="tag"
          :class="{ active: index === props.selectedIndex }"
          @click="switchTo(index)"
        >
          {{ component }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
import { ref } from "vue";

const props = defineProps({
  components: Array,
  selectedIndex: Number,
});

const emit = defineEmits(["switch"]);

function switchTo(index) {
  emit("switch", index);
}
</script>

<style>
.header {
  position: fixed; /* Чтобы header оставался на месте при прокрутке */
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; /* Пример с прозрачностью */
  z-index: 10; /* Убедитесь, что z-index выше, чем у других элементов */
}

.scroll {
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll::-webkit-scrollbar {
  display: none;
}

.tag-container {
  display: flex;
  padding: 10px;
  white-space: nowrap;
  background-color: transparent;
}

.tag {
  margin: 0 10px;
  background-color: transparent;
  color: #273341;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.tag-selected {
  background-color: #4caf50; /* Пример цвета фона для выбранного тега */
  color: white; /* Цвет текста для выбранного тега */
}

/* Убедитесь, что у вас есть базовые стили для .tag */
.tag.active {
  font-weight: bold;
  color: #000000; /* Измените цвет текста для активного состояния */
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
