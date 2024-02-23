<template>
    <section class="menu">
        <h2>{{ category }}</h2>
        <div class="menu__section">
            <div v-for="product in products" :key="product.id" class="menu_item">
                <Card :product="product" />
            </div>
        </div>
    </section>
</template>
  
<script>

import Card from './Card.vue';

export default {
    props: {
        category: {
            type: String,
            required: true,
        },
        products: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
    components: { Card }
};
</script>
  
<style>
.menu {
    display: flex;
    flex-direction: column;
    background-color: #152330;
    transition: 0.4s all;
    position: relative;

    overflow-x: hidden;

    color: #fff;

    min-height: 100vh;

    h2 {
        margin: 2% 4%;
        font-size: 40px;
        font-weight: bold;
    }


    @media (max-width: 768px) {
        h2 {
            margin: 1em;
        }
    }

    @media (max-width: 480px) {
        h2 {
            margin: 14px;
        }
    }

    .menu__section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 768px) {
    .menu_item {
        width: 45%;
    }
}

@media (max-width: 480px) {
    .menu_item {
        width: 45%;
        margin: 10px auto;
    }
}
</style>