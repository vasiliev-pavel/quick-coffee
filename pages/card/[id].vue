<template>
  <div class="flex flex-col items-center">
    <div
      :class="[
        'bg-[#EDEDED] sm:w-[45rem] transition-block',
        isSticky
          ? 'font-inter  sm:mx-auto sm:rounded-b-[2rem] fixed flex shadow-md items-center top-0 left-1/2 transform -translate-x-1/2 z-50 sm:h-24 justify-between px-10'
          : 'font-inter p-8 sm:mx-auto sm:rounded-[2rem] flex shadow-md my-8 sm:h-[26rem] justify-between pt-12',
      ]"
    >
      <img
        v-if="isSticky"
        src="/coffee.png"
        alt="Маленькое фото"
        class="h-20 w-12"
      />
      <!-- Примеры кружков для выбора размера -->
      <div v-if="isSticky" class="flex items-center space-x-2 sm:space-x-2">
        <div
          v-for="size in product.sizes"
          :key="size.volume"
          class="text-center rounded-full sm:w-16 sm:h-16 flex flex-col items-center justify-center"
          :class="
            size.isSelected
              ? 'bg-[#0841A3] text-white'
              : 'bg-[#C1C1C1] text-gray-900'
          "
        >
          <div class="sm:text-xl font-bold leading-none">
            {{ size.volume }}
          </div>
          <div class="sm:text-sm font-bold leading-none">мл</div>
        </div>
      </div>
      <div v-if="isSticky" class="text-3xl font-bold text-[#0841A3]">
        ${{ product.price }}
      </div>

      <div v-if="isSticky">
        <button
          class="flex items-center justify-center bg-[#0841A3] text-white text-xl font-bold uppercase rounded-full w-16 h-16"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.7207 0.578295C46.395 0.578549 48.0006 1.24625 49.1844 2.43456C50.3683 3.62287 51.0335 5.23449 51.0338 6.91501L51.0338 38.6076L82.6081 38.6076C84.2634 38.6364 85.8412 39.3168 87.0017 40.502C88.1621 41.6872 88.8124 43.2825 88.8124 44.9443C88.8124 46.6061 88.1621 48.2014 87.0017 49.3866C85.8412 50.5718 84.2634 51.2521 82.6081 51.281L51.0338 51.281V82.9736C51.005 84.6351 50.3272 86.2188 49.1464 87.3836C47.9656 88.5484 46.3763 89.2011 44.7207 89.2011C43.0651 89.2011 41.4758 88.5484 40.295 87.3836C39.1142 86.2188 38.4364 84.6351 38.4076 82.9736V51.281L6.83334 51.281C5.17801 51.2521 3.6002 50.5718 2.43974 49.3866C1.27929 48.2014 0.629034 46.6061 0.629034 44.9443C0.629034 43.2825 1.27929 41.6872 2.43974 40.502C3.6002 39.3168 5.178 38.6364 6.83333 38.6076L38.4076 38.6076L38.4076 6.91501C38.4079 5.23449 39.0731 3.62287 40.257 2.43456C41.4408 1.24625 43.0464 0.578549 44.7207 0.578295Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div v-if="!isSticky" class="flex justify-between">
        <!-- Левая часть с картинкой  -->
        <div
          class="flex flex-col justify-end flex-shrink-0 w-[12rem] h-[20rem] ml-20 mr-24"
        >
          <img
            class="w-full h-full object-cover"
            :src="product.imageUrl"
            :alt="product.name"
          />
        </div>
        <!-- Правая часть с описанием и размерами -->
        <div class="flex flex-col h-full justify-between max-w-64">
          <!-- Контейнер для выбора объема -->
          <div class="flex items-center space-x-2">
            <div
              v-for="size in product.sizes"
              :key="size.volume"
              class="text-center rounded-full w-20 h-20 flex flex-col items-center justify-center"
              :class="
                size.isSelected
                  ? 'bg-[#0841A3] text-white'
                  : 'bg-[#C1C1C1] text-gray-900'
              "
            >
              <div class="text-xl font-bold leading-none">
                {{ size.volume }}
              </div>
              <div class="text-sm font-bold leading-none">мл</div>
            </div>
          </div>
          <!-- Текстовый Контейнер для "Капучино" и описания -->
          <div class="flex flex-col justify-between">
            <div class="text-2xl font-medium text-black mb-3">
              {{ product.name }}
            </div>
            <p class="text-gray-800 font-medium leading-tight">
              {{ product.description }}
            </p>
          </div>
          <!-- Контейнер для цены и кнопки -->
          <div class="flex justify-between items-center mt-4">
            <div class="text-3xl font-bold text-[#0841A3]">
              ${{ product.price }}
            </div>
            <button
              class="flex items-center justify-center bg-[#0841A3] text-white text-xl font-bold uppercase rounded-full w-20 h-20"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.7207 0.578295C46.395 0.578549 48.0006 1.24625 49.1844 2.43456C50.3683 3.62287 51.0335 5.23449 51.0338 6.91501L51.0338 38.6076L82.6081 38.6076C84.2634 38.6364 85.8412 39.3168 87.0017 40.502C88.1621 41.6872 88.8124 43.2825 88.8124 44.9443C88.8124 46.6061 88.1621 48.2014 87.0017 49.3866C85.8412 50.5718 84.2634 51.2521 82.6081 51.281L51.0338 51.281V82.9736C51.005 84.6351 50.3272 86.2188 49.1464 87.3836C47.9656 88.5484 46.3763 89.2011 44.7207 89.2011C43.0651 89.2011 41.4758 88.5484 40.295 87.3836C39.1142 86.2188 38.4364 84.6351 38.4076 82.9736V51.281L6.83334 51.281C5.17801 51.2521 3.6002 50.5718 2.43974 49.3866C1.27929 48.2014 0.629034 46.6061 0.629034 44.9443C0.629034 43.2825 1.27929 41.6872 2.43974 40.502C3.6002 39.3168 5.178 38.6364 6.83333 38.6076L38.4076 38.6076L38.4076 6.91501C38.4079 5.23449 39.0731 3.62287 40.257 2.43456C41.4408 1.24625 43.0464 0.578549 44.7207 0.578295Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- настройки -->
    <!-- <div class="flex flex-col w-full sm:w-[45rem] mt-8">
      <div class="text-xl sm:text-2xl mb-4 font-bold text-gray-900">
        настрой как тебе нравится
      </div>
      <div
        v-for="(category, categoryIndex) in options"
        :key="categoryIndex"
        class="mb-5"
      >
        <div class="text-xl sm:text-2xl mb-2 font-bold text-gray-900">
          {{ category.name }}
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="(option, optionIndex) in category.items"
            :key="optionIndex"
            class="min-w-36 max-w-36 relative p-4 mr-3 mb-3 bg-white rounded-xl shadow-md cursor-pointer"
            :class="{
              'ring-2 ring-blue-500':
                selectedOptions[category.id] === option.id,
            }"
            @click="selectedOptions[category.id] = option.id"
          >
            <img
              :src="option.imageUrl"
              :alt="option.label"
              class="w-full h-32 object-cover rounded-xl mb-2"
            />
            <div class="text-sm mb-2">{{ option.label }}</div>
            <input
              type="radio"
              :id="`option-${category.id}-${option.id}`"
              class="hidden"
              :name="`option-${category.id}`"
              v-model="selectedOptions[category.id]"
              :value="option.id"
            />
            <label
              :for="`option-${category.id}-${option.id}`"
              class="absolute bottom-0 right-0 mb-2 mr-2"
            >
              <div
                class="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center"
              >
                <div
                  class="w-4 h-4 rounded-full bg-blue-500"
                  v-if="selectedOptions[category.id] === option.id"
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="flex flex-wrap -m-2">
      <div
        v-for="option in options"
        :key="option.id"
        class="p-2 w-1/2 sm:w-1/3 md:w-1/4"
      >
        <div
          class="flex flex-col items-center bg-white shadow rounded-lg overflow-hidden"
        >
          <img :src="option.imageUrl" alt="" class="w-full h-32 object-cover" />
          <div class="p-4 w-full">
            <div class="text-center text-sm font-semibold h-12 overflow-hidden">
              {{ option.name }}
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <CardCategoryOp :options="options" />
  </div>
</template>

<script setup>
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
const product = ref({
  name: "Капучино",
  description: "Классический кофе c молочной пенкой",
  imageUrl: "/coffee.png",
  price: 15,
  sizes: [
    { volume: 250, isSelected: false },
    { volume: 350, isSelected: true },
    { volume: 450, isSelected: false },
  ],
});

const options = [
  {
    id: "cup",
    name: "Стакан",
    items: [
      {
        id: "standard",
        label: "Стандартный",
        imageUrl: "path_to_image_standard_cup",
      },
      {
        id: "personal",
        label: "В свою кружку",
        imageUrl: "path_to_image_personal_cup",
      },
      // ... другие варианты стаканов
    ],
    imageUrl: "/coffee.png",
  },
  {
    id: "syrup",
    name: "Сироп",
    items: [
      {
        id: "vanilla",
        label: "Ванильный",
        imageUrl: "path_to_image_vanilla_syrup",
      },
      {
        id: "caramel",
        label: "Карамельный",
        imageUrl: "path_to_image_caramel_syrup",
      },
      // ... другие варианты сиропов
    ],
    imageUrl: "/coffee.png",
  },
  {
    id: "milk",
    name: "Молоко",
    items: [
      { id: "whole", label: "Цельное", imageUrl: "path_to_image_whole_milk" },
      {
        id: "almond",
        label: "Миндальное",
        imageUrl: "path_to_image_almond_milk",
      },
      { id: "whole1", label: "Цельное", imageUrl: "path_to_image_whole_milk" },

      // ... другие варианты молока
    ],
    imageUrl: "/coffee.png",
  },
  {
    id: "temperature",
    name: "Температура",
    items: [
      {
        id: "hot",
        label: "Горячий",
        imageUrl: "path_to_image_hot_temperature",
      },
      {
        id: "cold",
        label: "Холодный",
        imageUrl: "path_to_image_cold_temperature",
      },
      // ... другие варианты температуры
    ],
    imageUrl: "/coffee.png",
  },
  {
    id: "topping",
    name: "Топпинги",
    items: [
      {
        id: "whipped_cream",
        label: "Взбитые сливки",
        imageUrl: "path_to_image_whipped_cream",
      },
      {
        id: "chocolate",
        label: "Шоколад",
        imageUrl: "path_to_image_chocolate_topping",
      },
      {
        id: "whipped_cream1",
        label: "Взбитые сливки",
        imageUrl: "path_to_image_whipped_cream",
      },
      {
        id: "chocolate1",
        label: "Шоколад",
        imageUrl: "path_to_image_chocolate_topping",
      },
      // ... другие варианты топпингов
    ],
    imageUrl: "/coffee.png",
  },
  // Добавьте здесь другие категории, если необходимо
];

const selectedOptions = ref({
  cup: null,
  syrup: null,
  milk: null,
  temperature: null,
  topping: null,
  // Инициализируйте другие категории здесь, если необходимо
});

// Установите начальные значения для selectedOptions
options.forEach((category) => {
  if (category.items.length > 0) {
    selectedOptions[category.id] = category.items[0].id;
  }
});
</script>

<style scoped>
.transition-block {
  transition: height 0.5s ease, background-color 0.5s ease;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Это обеспечивает прижатие к левой стороне */
}
.category {
  width: calc(50% - 10px); /* Вычитаем margin */
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.category-image {
  width: 100%; /* Занимает всю ширину блока */
  height: auto; /* Сохраняет пропорции изображения */
}
.category-name {
  font-size: 16px; /* Размер шрифта */
  width: 100%; /* Ширина соответствует ширине картинки */
  height: 40px; /* Зарезервированное место для текста (достаточно для двух строк) */
  overflow: hidden; /* Скрывает текст, выходящий за пределы */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Ограничивает количество строк до 2 */
  -webkit-box-orient: vertical;
}
</style>
