<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button class="cart-button">Cart</Button>
        </DialogTrigger>
        <DialogContent class="menu_dialog">
            <DialogHeader>
                <DialogTitle>Cart</DialogTitle>
            </DialogHeader>
            <Section category="Hot Coffee" :products="products" class="cart_dialog" />
        </DialogContent>
    </Dialog>
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

<style>
.cart-button {
    display: flex;
    position: fixed;
    width: 30%;
    padding: 2%;
    bottom: 10%;
    left: 35%;
    border-radius: 10000px;

    background: rgba(40, 53, 65, 0.9);
    font-weight: bold;
}

.cart_dialog .menu__section {
    flex-direction: column;

    overflow-y: auto;

    &>.menu_item {
        width: 100%;
        height: 50px;
        min-height: none;

        &>button {
            min-height: auto;
            flex-direction: row;
        }

    }
}
</style>