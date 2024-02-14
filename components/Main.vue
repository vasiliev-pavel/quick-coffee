<template>
  <Transition name="fade" mode="out-in">
    <div class="p-4 pt-20" v-if="filteredCoffees" :key="componentKey">
      <div class="grid grid-cols-2 gap-4">
        <Card
          v-for="coffee in filteredCoffees"
          :key="coffee.id"
          :title="coffee.title"
          :price="coffee.price"
          :volume="coffee.volume"
        />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from "vue";
import Card from "./Card.vue";

const props = defineProps({
  filteredCoffees: Array,
});

const componentKey = ref(0);

// Пример наблюдения за изменениями в filteredCoffees
watch(
  () => props.filteredCoffees,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      componentKey.value++; // Обновляем ключ, чтобы вызвать перерендеринг
    }
  },
  { deep: true }
);
</script>

<style>
/* Начальное и конечное положение анимации */
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s ease-in-out;
}
/* Начальное состояние для входящего элемента */
.fade-enter {
  transform: translateX(100%);
}
/* Конечное состояние для уходящего элемента */
.fade-leave-to {
  transform: translateX(-100%);
}
</style>
