<template>
  <div>
    <!-- Обёртка для обеспечения наличия одного корневого элемента -->
    <Carousel class="overflow-hidden">
      <CarouselContent>
        <CarouselItem>
          <Menu category="Hot Coffee" :products="products" />
        </CarouselItem>
        <CarouselItem>
          <Menu category="Cold Coffee" :products="products" />
        </CarouselItem>
        <CarouselItem>
          <Menu category="Fruit Coffee" :products="products" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

<script setup>
import { cups, categories, products } from "~/mock/index";
useHead({
  title: "Home Page",
  meta: [{ name: "description", content: "Coffee" }],
});
</script>
