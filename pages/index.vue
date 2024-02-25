<template>
<<<<<<< HEAD
  <CategoryBar />

  <Section category="Hot Coffee" :products="products" />
  <Section category="Hot Coffee" :products="products" />
  <Section category="Cold Coffee" :products="products" />
  <Section category="Fruit Coffee" :products="products" />
  <Section category="Hot Coffee" :products="products" />

  <Cart />
</template>

<script>
import { cups, categories, products } from "~/mock/index";

export default {
  data() {
    return {
      // Assuming you want to use these imported data properties in your component
      cups,
      categories,
      products,
    };
  },
};
</script>
=======
    <!-- <CategoryBar /> -->
    <!-- <Menu category="Hot Coffee" :products="products" />
    <Menu category="Cold Coffee" :products="products" /> -->
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
</template>

<script setup lang="ts">
import { cups, categories, products } from '~/mock/index'
</script>
>>>>>>> 8355ffa5b7f62bb39b500f76d5e47e5402af9fbc
