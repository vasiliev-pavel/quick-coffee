<template>
  <div class="dynamic-component" :style="{ backgroundColor: color }">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  content: String,
  color: String, // Добавленный пропс для цвета текста
});
</script>

<style>
.dynamic-component {
  width: 100%; /* Устанавливает базовую ширину каждого компонента равной ширине экрана */
  height: 100vh;
}
</style>
