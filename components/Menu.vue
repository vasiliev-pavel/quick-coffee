<template>
    <section>
        <h1 class="text-3xl">Coffee</h1>
        <div class="flex flex-wrap">
            <div v-for="product in products" :key="product.id" @click="openCard(product)"
                class="product flex flex-col w-1/3 p-4 border-b-2 cursor-pointer">
                <h2>{{ product.title }}</h2>
                <img :src="`${product.photo}`" :alt="product.title" />
                <p>{{ product.description }}</p>
                <p>Price: {{ product.price }}</p>
            </div>
        </div>

        <!-- Модальное окно для Card -->
        <div v-if="activeProduct" class="modal">
            <Card :product="activeProduct" />
            <button @click="closeCard">Close</button>
        </div>
    </section>
</template>

<script>
import { cups, categories, products } from '~/mock/index'
import Card from './Card.vue' // Импортируйте компонент Card

export default {
    components: {
        Card
    },
    data() {
        return {
            cups,
            categories,
            products,
            activeProduct: null // Для хранения активного продукта
        }
    },
    methods: {
        openCard(product) {
            this.activeProduct = product; // Устанавливаем активный продукт
            // Здесь можно также управлять видимостью модального окна
        },
        closeCard() {
            this.activeProduct = null; // Сброс активного продукта
            // Закрытие модального окна
        }
    }
}
</script>