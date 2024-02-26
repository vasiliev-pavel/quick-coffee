<template>
  <transition name="slide-up">
    <div v-if="item" class="content-wrapper">
      <div class="content">
        <div class="text-center mb-4">{{ item.content }}</div>
        <div class="flex flex-wrap justify-center items-center gap-4">
          <div
            v-for="option in item.options"
            :key="option.id"
            class="option-item rounded-lg bg-slate-600 p-4"
          >
            <img
              :src="option.image"
              :alt="option.name"
              class="w-20 h-20 mx-auto"
            />
            <div class="text-center mt-2">
              <div>{{ option.name }}</div>
              <div class="text-sm">
                {{
                  option.price > 0
                    ? `$${option.price.toFixed(2)}`
                    : option.price === 0
                    ? "Free"
                    : `Save $${Math.abs(option.price).toFixed(2)}`
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  item: Object,
});
</script>

<style>
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%); /* Начинаем анимацию с полного смещения вниз */
  opacity: 0;
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0); /* Завершаем анимацию в исходном положении */
  opacity: 1;
}

/* Определяем продолжительность и тип анимации */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.content {
  color: black; /* Примерный цвет текста, измените по желанию */
  padding: 10px; /* Примерный padding, измените по желанию */
  margin-top: 10px; /* Примерный margin, измените по желанию */
}
</style>
