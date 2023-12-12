<template>
  <li :key="product.id" class="cart__item product">
    <div class="product__pic">
      <img
        width="120"
        height="120"
        :src="product.color.gallery[0].file.url"
        :alt="product.product.title"
      />
    </div>
    <h3 class="product__title">{{ product.product.title }}</h3>
    <div class="product__info">
      <div class="product__info--color">
        Цвет:
        <span>
          <i
            style="border: 1px solid #222"
            :style="{ 'background-color': product.color.color.code }"
          ></i>
        </span>
      </div>
      <div class="product__info--color">
        Размер:
        <span>
          {{ product.size.title }}
        </span>
      </div>
    </div>
    <span class="product__code"> Артикул: {{ product.color.id }} </span>

    <div class="product__counter form__counter">
      <button
        type="button"
        aria-label="Убрать один товар"
        @click="decrementQuantity"
        :disabled="quantity <= 1"
      >
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>
      <label for="productQuantity"></label>
      <input id="productQuantity" type="text" v-model.number="quantity" />

      <button
        type="button"
        aria-label="Добавить один товар"
        @click="incrementQuantity"
      >
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="product__price"> {{ product.price * product.quantity }} ₽ </b>

    <button
      class="product__del button-del"
      type="button"
      aria-label="Удалить товар из корзины"
    >
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>
<script>
export default {
  props: ['product'],
  computed: {
    quantity: {
      get() {
        return this.product.quantity;
      },
      set(value) {
        this.$store.dispatch('updateCartProductQuantity', {
          basketItemId: this.product.id,
          quantity: value,
        });
      },
    },
  },
  methods: {
    incrementQuantity() {
      this.quantity += 1;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },
};
</script>
