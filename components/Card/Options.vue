<template>
  <div
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20"
    @click="$emit('update:isOpen', false)"
  >
    <div
      class="fixed bottom-0 inset-x-0 p-4 md:p-5 border shadow-lg bg-white rounded-t-xl md:rounded-xl animate-slideUp md:animate-none md:relative md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-auto w-full max-w-md h-auto"
      @click.stop
    >
      <!-- Место для отображения элементов -->
      <div class="text-center">
        <div v-for="item in selectedItems" :key="item.id" class="p-2">
          <div
            class="square-div"
            :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedOptionId: String,
  },
  data() {
    return {
      options: [
        // Ваши опции
      ],
    };
  },
  computed: {
    selectedItems() {
      const selectedOption = this.options.find(
        (option) => option.id === this.selectedOptionId
      );
      return selectedOption ? selectedOption.items : [];
    },
  },
};
</script>

<style>
.square-div {
  width: 100px;
  height: 100px;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  border: 1px solid #ccc; /* Граница для наглядности */
}
</style>
