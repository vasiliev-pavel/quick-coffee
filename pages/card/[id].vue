<template>
    <div class="flex flex-col md:flex-row rounded-lg bg-[#0f172afa] text-white p-4">
        <div class="md:w-1/2">
            <video autoplay loop muted class="rounded-lg">
                <source src="/live.mp4" type="video/mp4">
                <img class="rounded-lg" src="/hot_coffee.png" alt="Latte" />
            </video>
        </div>
        <div class="md:w-1/2 flex flex-col justify-center p-4">
            <div class="flex flex-row items-center">
                <h2 class="text-5xl font-bold">Latte</h2>
                <Button variant="secondary" class="ml-4">Add $3.45</Button>
            </div>
            <Carousel class="menu_carousel my-6 rounder text-xl text-white text-left font-bold">
                <CarouselContent class="menu_carousel_content">
                    <CarouselItem class="basis-1/3">Milk</CarouselItem>
                    <CarouselItem class="basis-1/3">Cup</CarouselItem>
                    <CarouselItem class="basis-1/3">Temperature</CarouselItem>
                    <CarouselItem class="basis-1/3">Syrup</CarouselItem>
                    <CarouselItem class="basis-1/3">Toppings</CarouselItem>
                    <CarouselItem class="basis-1/3">Sugar</CarouselItem>
                </CarouselContent>
            </Carousel>
            <span class="text-2xl mt-2">Smooth espresso with steamed milk</span>
            <span class="text-xl text-slate-400 mt-2">Ingredients: Espresso, Milk</span>
            <span class="text-xl text-slate-400 mt-2">May Contain: Nuts, Gluten</span>
            <span class="text-xl text-slate-400 mt-2">Allergens: Caffeine, Lactose</span>
            <span class="text-xl text-slate-500 mt-2">Nutritions: 188kcal</span>
            <span class="text-xl text-slate-500 mt-2">Weight: 190g</span>
            <span class="text-xl text-slate-500 mt-2">Protein: 5.8g</span>
            <span class="text-xl text-slate-500 mt-2">Fats: 9g</span>
            <span class="text-xl text-slate-500 mt-2">Carbs: 9g</span>
        </div>
    </div>
</template>

<style>
.card {
    background-color: #0f172afa;
}
</style>