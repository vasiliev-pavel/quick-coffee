<template>
    <div v-for="product in products" :key="product.id" class="menu_item">
        <Dialog>
            <DialogTrigger as-child>
                <Button>
                    <img :src="product.photo" />
                    <div class="menu_item__content">
                        <h3>{{ product.title }}</h3>
                        <span>${{ product.price }}</span>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent class="menu_dialog">
                <img :src="product.photo" />
                <div class="menu_item__content">
                    <h3>{{ product.title }}</h3>
                    <span>${{ product.price }}</span>
                    <!-- <br />
                    <span>Nutritions: {{ product.nutritions }}</span>
                    <span>Weight: {{ product.weight }}</span>
                    <span>Protein: {{ product.protein }}</span>
                    <span>Fats: {{ product.fats }}</span>
                    <span>Carbs: {{ product.carbs }}</span>
                    <span>Ingredients: {{ product.ingredients.description }}</span>
                    <span>May contain: {{ product.ingredients.may_contain }}</span>
                    <span>Allergens: {{ product.ingredients.allergens }}</span> -->

                </div>
                <Carousel class="menu_carousel">
                    <CarouselContent class="menu_carousel_content">
                        <CarouselItem class="basis-1/3">
                            <i>+</i>
                            Toppings
                        </CarouselItem>
                        <CarouselItem class="basis-1/3">
                            <i>+</i>
                            Syrops
                        </CarouselItem>
                        <CarouselItem class="basis-1/3">
                            <i>+</i>
                            Sugar
                        </CarouselItem>
                        <CarouselItem class="basis-1/3">
                            <i>+</i>
                            Milk
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </DialogContent>
        </Dialog>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
};
</script>

<style>
.menu_item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    transition: 0.4s all;

    background-color: #273341;

    width: 30%;
    margin: 10px;
    height: 100%;
    min-height: 220px;

    img {
        transition: 0.4s all;
    }

    &:hover {
        img {
            transform: scale(1.1);
        }
    }

}

.menu_item button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    min-height: 220px;
}


.menu_item__content {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.menu_dialog {
    display: flex;
    flex-direction: column;
    color: #fff;
    background: rgba(15, 23, 42, 0.9);
}

.menu_carousel_content>div {
    display: flex;
    flex-direction: column;
    align-items: center;
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

    .menu_item__content {
        padding: 5px;
    }
}
</style>