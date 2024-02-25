<template>
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