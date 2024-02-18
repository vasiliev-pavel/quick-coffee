<template>
    <div>
        <Menu category="Hot Coffee" :products="products" />
    </div>
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
  