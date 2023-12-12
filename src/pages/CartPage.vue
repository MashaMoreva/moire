<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link :to="{ name: 'main' }" class="breadcrumbs__link">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Корзина </a>
        </li>
      </ul>

      <div class="content__row">
        <h1 class="content__title">Корзина</h1>
        <span class="content__info"
          >{{ cartProductsCount }} {{ getCorrectEnding(cartProductsCount) }}
        </span>
      </div>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <li
              v-for="product in cartDetailProducts"
              :key="product.id"
              class="cart__item product"
            >
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
              <span class="product__code"> Артикул: {{ product.id }} </span>

              <div class="product__counter form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>
                <label for="productQuantity"></label>
                <input
                  id="productQuantity"
                  type="text"
                  :value="product.quantity"
                />

                <button type="button" aria-label="Добавить один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price">
                {{ product.price * product.quantity }} ₽
              </b>

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
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">
            Итого: <span>{{ cartTotalPrice }} ₽</span>
          </p>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import getCorrectEnding from '@/helpers/getCorrectEnding';

export default {
  methods: { getCorrectEnding },
  computed: {
    cartDetailProducts() {
      return this.$store.getters.cartDetailProducts;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cartProductsCount() {
      return this.$store.getters.cartProductsCount;
    },
  },
};
</script>
