<template>
    <Carousel class="category-bar">
        <CarouselContent class="category-bar_content">
            <CarouselItem class="basis-1/3">Hot Coffee</CarouselItem>
            <CarouselItem class="basis-1/3">Cold Coffee</CarouselItem>
            <CarouselItem class="basis-1/3">Fruit Coffee</CarouselItem>
            <CarouselItem class="basis-1/3">Matcha</CarouselItem>
            <CarouselItem class="basis-1/3">Fresh</CarouselItem>
            <CarouselItem class="basis-1/3">Tea</CarouselItem>
            <CarouselItem class="basis-1/3">Snacks</CarouselItem>
            <CarouselItem class="basis-1/3">Coffee Beans</CarouselItem>
        </CarouselContent>
    </Carousel>
</template>

<style>
.category-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    background: rgba(15, 23, 42, 0.85);
}

.category-bar_content {
    display: flex;

    &>div {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding: 25px 15px;
        color: #fff;
    }
}

@media (max-width: 768px) {
    .category-bar_content {

        &>div {
            height: 100px;
            padding: 25px 15px;
        }
    }
}

@media (max-width: 480px) {
    .category-bar_content {}
}
</style>