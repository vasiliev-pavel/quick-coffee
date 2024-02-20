<template>
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
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
</template>
  
<script>
import { cups, categories, products } from '~/mock/index'

export default {
    data() {
        return {
            // Assuming you want to use these imported data properties in your component
            cups,
            categories,
            products
        }
    }
}
</script>
  