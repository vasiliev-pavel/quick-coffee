<template>
  <div class="rounded-lg bg-[#0f172afa] text-white p-4 mb-4">
    <h2 class="text-4xl font-bold">Total: $13.43</h2>
    <Button class="mt-4" variant="secondary">Apple Pay</Button>
    <Button class="mt-4 ml-4" variant="secondary">Google Pay</Button>
    <Button class="mt-4 ml-4" variant="secondary" @click="confirmPay"
      >Pay</Button
    >
  </div>
  <Menu category="Cart" :products="products" />
</template>

<script setup>
import { cups, categories, products } from "~/mock/index";

const confirmPay = async () => {
  try {
    // Запрашиваем сессию Stripe для оплаты
    const { data: session } = await useFetch(`/api/payment`, {
      method: "post",
      body: {
        line_items: await createLineItems(),
      },
    });
    console.log(session);
    // Перенаправляем пользователя на Stripe
    // if (session && session.url) {
    //   navigateTo(`${session.url}`, { external: true });
    // } else {
    //   console.error("Ошибка: URL сессии Stripe не получен");
    // }
  } catch (error) {
    console.error("Ошибка при инициации сессии оплаты:", error);
  }
};

const createPrice = async () => {
  try {
    const price = await $fetch(`/api/payment/price`, {
      method: "post",
      body: {
        amount: 1,
        name: "Cappuccino",
      },
    });
    console.log(price);
    return price.id;
  } catch (error) {
    console.error("Ошибка при создании цены:", error);
  }
};

const createLineItems = async () => {
  return [
    {
      price: await createPrice(),
      quantity: 1,
    },
  ];
  //   return Object.values(selectedServices).map((service) => ({
  //     price: service.price_id,
  //     quantity: 1,
  //   }));
};
</script>
