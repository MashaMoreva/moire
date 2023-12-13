<template>
  <main v-if="!orderInfo" class="content container">
    <CustomLoader />
  </main>
  <main v-else class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link :to="{ name: 'main' }" class="breadcrumbs__link">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link :to="{ name: 'cart' }" class="breadcrumbs__link">
            Корзина
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <p class="breadcrumbs__link">Оформление заказа</p>
        </li>
      </ul>

      <h1 class="content__title">
        Заказ оформлен <span>№ {{ orderInfo.id }}</span>
      </h1>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за&nbsp;выбор нашего магазина. В ближайшее время наши
            менеджеры свяжутся с&nbsp;Вами. Оставайтесь на связи и готовьтесь к
            стильным переменам!
          </p>

          <ul class="dictionary">
            <li class="dictionary__item">
              <span class="dictionary__key"> Получатель </span>
              <span class="dictionary__value">
                {{ orderInfo.name }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Адрес доставки </span>
              <span class="dictionary__value">
                {{ orderInfo.address }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Телефон </span>
              <span class="dictionary__value"> {{ orderInfo.phone }} </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Email </span>
              <span class="dictionary__value"> {{ orderInfo.email }} </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Способ доставки </span>
              <span class="dictionary__value">
                {{ orderInfo.deliveryType.title }}
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Способ оплаты </span>
              <span class="dictionary__value">
                {{ orderInfo.paymentType }}
              </span>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li
              v-for="item in orderInfo.basket.items"
              :key="item.id"
              class="cart__order"
            >
              <h3>{{ item.product.title }}</h3>
              <b
                ><b>x{{ item.quantity }}</b
                >{{ item.price * item.quantity }} ₽</b
              >
              <span>Артикул: {{ item.color.id }}</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>
              Доставка:
              <b>{{
                orderInfo.deliveryType.price === '0'
                  ? 'бесплатно'
                  : orderInfo.deliveryType.price + ' ₽'
              }}</b>
            </p>
            <p>
              Товары: <b>{{ orderInfo.basket.items.length }}</b>
              {{ getCorrectEnding(orderInfo.basket.items.length) }} на сумму
              <b>{{ orderInfoTotalPrice }} ₽</b>
            </p>
            <p>
              Итого:
              <b>{{ orderInfo.totalPrice }} ₽</b>
            </p>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import getCorrectEnding from '@/helpers/getCorrectEnding';
import CustomLoader from '@/components/CustomLoader.vue';

export default {
  components: { CustomLoader },
  methods: {
    getCorrectEnding,
  },
  computed: {
    ...mapGetters({
      orderInfo: 'orderInfo',
      orderInfoTotalPrice: 'orderInfoTotalPrice',
    }),
  },
  created() {
    if (
      // prettier-ignore
      this.$store.state.orderInfo
      && this.$store.state.orderInfo.id === this.$route.params.id
    ) {
      return;
    }

    this.$store.dispatch('loadOrderInfo', this.$route.params.id);
  },
};
</script>
