<template>
  <li v-if="loading">
    <CustomLoader />
  </li>
  <li v-else :key="product.id" class="cart__item product">
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
      @click.prevent="deleteProduct"
    >
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
  </li>
</template>
<script>
import { mapActions } from 'vuex';
import CustomLoader from './CustomLoader.vue';

export default {
  components: { CustomLoader },
  props: ['product'],
  data() {
    return {
      loading: false,
      successMessage: '',
      errorMessage: '',
    };
  },
  methods: {
    ...mapActions(['deleteProductFromCart']),
    deleteProduct() {
      this.loading = true;
      this.successMessage = '';
      this.errorMessage = '';
      const data = {
        basketItemId: this.product.id,
      };
      this.deleteProductFromCart(data)
        .then((result) => {
          if (result.success) {
            this.successMessage = result.message;
          } else {
            this.errorMessage = result.message;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    incrementQuantity() {
      this.quantity += 1;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },
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
};
</script>
