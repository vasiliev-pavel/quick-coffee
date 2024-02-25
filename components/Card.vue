<template>
  <Dialog class="card_dialog">
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
      <DialogHeader>
        <DialogTitle><img :src="product.photo" /></DialogTitle>
      </DialogHeader>
      <div class="menu_item__content">
        <h3>{{ product.title }}</h3>
        <h3>{{ product.description }}</h3>
        <span>${{ product.price }}</span>
      </div>
      <Carousel class="menu_carousel">
        <CarouselContent class="menu_carousel_content">
          <CarouselItem class="basis-1/3">Milk</CarouselItem>
          <CarouselItem class="basis-1/3">Cup</CarouselItem>
          <CarouselItem class="basis-1/3">t°</CarouselItem>
          <CarouselItem class="basis-1/3">Syrup</CarouselItem>
          <CarouselItem class="basis-1/3">Toppings</CarouselItem>
          <CarouselItem class="basis-1/3">Sugar</CarouselItem>
        </CarouselContent>
      </Carousel>
    </DialogContent>
  </Dialog>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
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

/* Dialog */
.menu_dialog {
  display: flex;
  flex-direction: column;
  color: #fff;
  background: rgba(15, 23, 42, 0.9);

  border-radius: 0;
}

.menu_carousel {
  display: flex;
  border-radius: 10000px;
  background-color: #273341;
  align-items: center;
}

.menu_carousel > div > div {
  margin-left: 0;
}

.menu_carousel_content > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

@media (max-width: 768px) {
}

@media (max-width: 480px) {
  .menu_item__content {
    padding: 5px;
  }
}
</style>
