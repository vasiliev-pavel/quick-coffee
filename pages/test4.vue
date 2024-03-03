<template>
  <div>
    <button @click="toggleOrientation">Toggle Orientation</button>
    <div
      class="flex-container"
      :class="{ row: isHorizontal }"
      ref="flexContainer"
    >
      <div class="item bg-[#2a80b9]">
        <p>1</p>
      </div>
      <div class="item bg-[#8f44ad]">
        <p>2</p>
      </div>
      <div class="item bg-[#16a086]">
        <p>3</p>
      </div>
      <div class="item bg-[#f1c40f]">
        <p>4</p>
      </div>
      <div class="item bg-[#e77e23]">
        <p>5</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHorizontal: false,
    };
  },
  methods: {
    toggleOrientation() {
      const container = this.$refs.flexContainer;
      const items = Array.from(container.children);
      // Сохраняем начальные позиции элементов
      let initialPositions = items.map((item) => item.getBoundingClientRect());

      // Изменяем ориентацию
      this.isHorizontal = !this.isHorizontal;

      this.$nextTick(() => {
        // Вычисляем конечные позиции после изменения ориентации
        let finalPositions = items.map((item) => item.getBoundingClientRect());

        items.forEach((item, index) => {
          // Вычисляем разницу в позициях
          const dx = initialPositions[index].left - finalPositions[index].left;
          const dy = initialPositions[index].top - finalPositions[index].top;

          // Сбрасываем стили перед анимацией
          item.style.transition = "none";
          item.style.transform = `translate(${dx}px, ${dy}px)`;

          // Выполняем анимацию в следующем фрейме
          requestAnimationFrame(() => {
            item.style.transition = "transform 0.5s ease";
            item.style.transform = "translate(0, 0)";
          });
        });
      });
    },
  },
};
</script>

<style>
.item p {
  width: 100%;
  text-align: center;
  color: #fff;
}

.item {
  margin: 0;
  padding: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease;
}
.item:hover {
  transform: translate(10px, 50px);
}

.flex-container {
  border: 1px solid #555;
  display: flex;
  padding: 20px;
  width: 550px; /* Ширина изменена для поддержки горизонтального режима */
  flex-direction: column;
}
.row {
  flex-direction: row;
}
</style>
