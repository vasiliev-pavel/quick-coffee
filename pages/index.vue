<template>
  <div>
    <Header
      :components="components.map((component) => component.title)"
      @switch="switchToComponent"
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
  { title: "Компонент A", content: "Содержимое A", color: "#ffcccc" },
  { title: "Компонент B", content: "Содержимое B", color: "#ccffcc" },
  { title: "Компонент C", content: "Содержимое C", color: "#ccfffc" },
  // Добавьте другие компоненты с цветами здесь
]);

const translateX = ref(0);
const transition = ref("");
const isDragging = ref(false);
const startX = ref(0);
const initialTranslateX = ref(0);

function switchToComponent(index) {
  const componentWidth = window.innerWidth;
  translateX.value = -componentWidth * index; // Уже верно для перехода к компоненту
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
  const currentX = event.touches ? event.touches[0].clientX : event.clientX;
  const deltaX = currentX - startX.value;
  // Рассчитываем новое значение translateX на основе движения
  const newTranslateX = initialTranslateX.value + deltaX;

  // Удаляем ограничение на два компонента и позволяем перетаскивание на полную ширину всех компонентов
  // Максимальное смещение теперь зависит от количества компонентов
  const maxTranslateX = -(window.innerWidth * (components.value.length - 1));
  translateX.value = Math.min(Math.max(newTranslateX, maxTranslateX), 0);
}

function stopDragging() {
  isDragging.value = false;
  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("mouseup", stopDragging);
  window.removeEventListener("touchmove", onDrag);
  window.removeEventListener("touchend", stopDragging);

  const threshold = window.innerWidth * 0.3;
  const movedBy = translateX.value - initialTranslateX.value;

  // Если перемещение не достигло порога, возвращаемся к текущему компоненту
  if (Math.abs(movedBy) < threshold) {
    translateX.value = initialTranslateX.value;
  } else {
    // Вычисляем индекс на основе направления перемещения
    let targetIndex = -Math.round(translateX.value / window.innerWidth);
    // Увеличиваем или уменьшаем индекс на основе направления перетаскивания
    targetIndex += movedBy < 0 ? 1 : -1;

    // Ограничиваем targetIndex в пределах доступных компонентов
    targetIndex = Math.max(
      Math.min(targetIndex, components.value.length - 1),
      0
    );
    translateX.value = -window.innerWidth * targetIndex;
  }

  transition.value = "transform 0.5s ease";
}

// Вычисляемые свойства для стилей
const componentsStyle = computed(() => ({
  transform: `translateX(${translateX.value}px)`,
  transition: transition.value,
  display: "flex",
  width: `calc(100% * ${components.value.length})`, // Убедитесь, что это работает как ожидается
}));

const containerStyle = computed(() => ({
  marginTop: "60px",
  width: "100%",
  overflow: "hidden",
}));
</script>

<style>
.draggable-container {
  margin-top: 60px;
  width: 100%;
  overflow: hidden;
}
</style>
