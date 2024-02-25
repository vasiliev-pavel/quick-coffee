<template>
  <Carousel
    class="category-bar my-6 rounder text-xl text-white text-center font-bold"
  >
    <CarouselContent class="category-bar_content p-4">
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
  /*border-radius: 10000px;*/
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.98);
  border: 1px solid #fff;
  color: #fff;
  font-weight: bold;
  width: 93%;
  margin: 2% auto;

  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
}

.category-bar_content {
  display: flex;

  & > div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 25px;
  }
}

/* Стили для header */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em; /* Для боковых отступов */

  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
}

/* Стили для кнопки LOGIN */
.login-button {
  display: inline-flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 4rem;
  background-color: rgb(255, 255, 255, 0.3); /* Белый фон с 50% прозрачностью */
  cursor: pointer;
}

/* Стили для SVG иконки в кнопке */
.login-icon {
  margin-left: 5px;
  margin-right: -10px;
  /* Ваши стили для SVG иконки */
}
</style>
