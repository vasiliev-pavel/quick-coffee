<template>
  <div class="card">
    <img :src="product.photo" :alt="product.title" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="card-text"><small class="text-muted">Price: {{ product.price }}</small></p>
      <!-- Дополнительные детали продукта -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Nutrition: {{ product.nutritions }}</li>
        <li class="list-group-item">Weight: {{ product.weight }}</li>
        <li class="list-group-item">Ingredients: {{ product.ingredients.description.join(', ') }}</li>
      </ul>
      <!-- Дополнительные действия, например кнопка покупки -->
      <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  /* Стили карточки */
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.card:hover {
  /* Стили при наведении */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  /* Стили изображения */
  width: 100%;
  object-fit: cover;
}

.card-body {
  /* Стили тела карточки */
  padding: 2rem;
}

.card-title,
.card-text {
  /* Стили текста */
  margin-bottom: 0.5rem;
}

.list-group-item {
  /* Стили списка */
  padding: 0.5rem 1rem;
}

.card-actions {
  /* Стили для действий с карточкой */
  margin-top: 1rem;
  text-align: center;
}

.btn-primary {
  /* Стили кнопки */
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
</style>
