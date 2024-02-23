<template>
    <CategoryBar />

    <Section category="Hot Coffee" :products="products" />
    <Section category="Hot Coffee" :products="products" />
    <Section category="Cold Coffee" :products="products" />
    <Section category="Fruit Coffee" :products="products" />
    <Section category="Hot Coffee" :products="products" />

    <Cart />
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
  