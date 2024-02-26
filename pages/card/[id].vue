<template>
  <div
    class="flex flex-col md:flex-row rounded-lg bg-[#0f172afa] text-white p-4"
  >
    <div class="md:w-1/2">
      <video autoplay loop muted class="rounded-lg">
        <source src="/live.mp4" type="video/mp4" />
        <img class="rounded-lg" src="/hot_coffee.png" alt="Latte" />
      </video>
    </div>
    <div class="md:w-1/2 flex flex-col justify-center p-4">
      <div class="flex flex-row items-center">
        <h2 class="text-5xl font-bold">Latte</h2>
        <Button variant="secondary" class="ml-4">Add $3.45</Button>
      </div>
      <ActiveItemDetails :item="activeItem" />
      <Carousel
        class="menu_carousel my-6 rounder text-xl text-white text-left font-bold"
      >
        <CarouselContent class="menu_carousel_content">
          <CarouselItem
            v-for="item in carouselItems"
            :key="item.id"
            class="basis-1/3"
            @click="setActiveItem(item)"
          >
            {{ item.title }}
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <span class="text-2xl mt-2">Smooth espresso with steamed milk</span>
      <span class="text-xl text-slate-400 mt-2"
        >Ingredients: Espresso, Milk</span
      >
      <span class="text-xl text-slate-400 mt-2">May Contain: Nuts, Gluten</span>
      <span class="text-xl text-slate-400 mt-2"
        >Allergens: Caffeine, Lactose</span
      >
      <span class="text-xl text-slate-500 mt-2">Nutritions: 188kcal</span>
      <span class="text-xl text-slate-500 mt-2">Weight: 190g</span>
      <span class="text-xl text-slate-500 mt-2">Protein: 5.8g</span>
      <span class="text-xl text-slate-500 mt-2">Fats: 9g</span>
      <span class="text-xl text-slate-500 mt-2">Carbs: 9g</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const carouselItems = ref([
  {
    id: 1,
    title: "Milk",
    content: "Choose your milk type:",
    options: [
      {
        id: "almond",
        name: "Almond",
        image: "/images/almond_milk.png",
        price: 0.5,
      },
      { id: "soy", name: "Soy", image: "/images/soy_milk.png", price: 0.4 },
      { id: "oat", name: "Oat", image: "/images/oat_milk.png", price: 0.45 },
      {
        id: "regular",
        name: "Regular",
        image: "/images/regular_milk.png",
        price: 0,
      },
    ],
  },
  {
    id: 2,
    title: "Cup",
    content: "Select your cup size or bring your own:",
    options: [
      {
        id: "cup",
        name: "cup",
        image: "/images/cup.png",
        price: 0,
      },
      {
        id: "own",
        name: "Bring Your Own",
        image: "/images/own_cup.png",
        price: 0,
      }, // Скидка за свою кружку
    ],
  },
  {
    id: 3,
    title: "Temperature",
    content: "How do you like it?",
    options: [
      {
        id: "hot",
        name: "Hot",
        image: "/images/hot_temperature.png",
        price: 0,
      },
      {
        id: "cold",
        name: "Cold",
        image: "/images/cold_temperature.png",
        price: 0,
      },
    ],
  },
]);

const activeItem = ref(null);

function setActiveItem(item) {
  if (activeItem.value && activeItem.value.id === item.id) {
    // Закрыть текущий элемент, если он уже активен
    activeItem.value = null;
  } else {
    // Обновить activeItem без изменения внешнего ключа
    activeItem.value = item;
  }
}
</script>
