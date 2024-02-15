<!-- index.vue -->
<template>
  <div>
    <Header
      :components="components.map((component) => component.title)"
      :selected-index="selectedComponentIndex"
      @switch="switchToComponent"
      class="flex"
    />

    <div
      class="draggable-container"
      @mousedown="startDragging"
      @touchstart="startDragging"
      :style="containerStyle"
    >
      <div class="components" :style="componentsStyle">
        <DynamicComponent
          v-for="(component, index) in components"
          :key="index"
          :title="component.title"
          :content="component.content"
          :color="component.color"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const components = ref([
  { title: "компонент а", content: "Содержимое A", color: "#ffcccc" },
  { title: "компонент b", content: "Содержимое B", color: "#ccffcc" },
  { title: "компонент c", content: "Содержимое C", color: "#ccfffc" },
  // Добавьте другие компоненты с цветами здесь
]);

const translateX = ref(0);
const transition = ref("");
const isDragging = ref(false);
const startX = ref(0);
const initialTranslateX = ref(0);
let draggingOccurred = false; // Новая переменная для отслеживания факта перетаскивания

const selectedComponentIndex = ref(0); // По умолчанию выбран первый компонент

function switchToComponent(index) {
  selectedComponentIndex.value = index; // Обновляем выбранный индекс
  const componentWidth = window.innerWidth;
  translateX.value = -componentWidth * index; // Перемещение к выбранному компоненту
  transition.value = "transform 0.5s ease"; // Анимация
}

function startDragging(event) {
  isDragging.value = true;
  startX.value = event.touches ? event.touches[0].clientX : event.clientX;
  initialTranslateX.value = translateX.value;
  transition.value = ""; // Отключаем анимацию при начале перетаскивания
  window.addEventListener("mousemove", onDrag);
  window.addEventListener("mouseup", stopDragging);
  window.addEventListener("touchmove", onDrag);
  window.addEventListener("touchend", stopDragging);
}

function onDrag(event) {
  if (!isDragging.value) return;
  draggingOccurred = true; // Устанавливаем флаг перетаскивания
  const currentX = event.touches ? event.touches[0].clientX : event.clientX;
  const deltaX = currentX - startX.value;
  const newTranslateX = initialTranslateX.value + deltaX;

  // Обновите эту линию согласно вашей логике ограничения
  translateX.value = Math.min(
    Math.max(newTranslateX, -window.innerWidth * (components.value.length - 1)),
    0
  );
}

function stopDragging() {
  isDragging.value = false;
  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("mouseup", stopDragging);
  window.removeEventListener("touchmove", onDrag);
  window.removeEventListener("touchend", stopDragging);

  const threshold = window.innerWidth * 0.3;
  const movedBy = translateX.value - initialTranslateX.value;

  // Используйте selectedComponentIndex.value как базу для текущего индекса
  let direction = movedBy < 0 ? 1 : -1; // Определение направления движения
  let targetIndex = selectedComponentIndex.value + direction;

  // Проверка на достижение порогового значения для перетаскивания
  if (Math.abs(movedBy) > threshold) {
    // Ограничение targetIndex в пределах допустимых значений
    targetIndex = Math.max(
      0,
      Math.min(targetIndex, components.value.length - 1)
    );
  } else {
    // Если не достигнут порог, возвращаемся к текущему индексу
    targetIndex = selectedComponentIndex.value;
  }

  selectedComponentIndex.value = targetIndex; // Обновляем выбранный индекс
  translateX.value = -window.innerWidth * targetIndex; // Перемещение к выбранному компоненту
  transition.value = "transform 0.5s ease"; // Анимация
  draggingOccurred = false;
}

// Вычисляемые свойства для стилей
const componentsStyle = computed(() => ({
  transform: `translateX(${translateX.value}px)`,
  transition: transition.value,
  display: "flex",
  width: `calc(100% * ${components.value.length})`, // Убедитесь, что это работает как ожидается
}));

const containerStyle = computed(() => ({
  width: "100%",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "column" /* Указывает на вертикальное расположение */,
}));
</script>
