<template>
    <section class="menu">
        <h2>{{ category }}</h2>
        <div class="menu__section">
            <MenuItem :products="products" />
        </div>
    </section>
</template>
  
<script>

import MenuItem from './Item.vue';

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
    components: { MenuItem }
};
</script>
  
<style>
.menu {
    display: flex;
    flex-direction: column;
    background-color: #152330;

    overflow-x: hidden;

    color: #fff;

    min-height: 100vh;

    h2 {
        margin: 1.6em;
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
</style>