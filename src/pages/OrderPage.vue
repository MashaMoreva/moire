<template>
  <main v-if="loadingDeliveryOptions" class="content container">
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
          <a class="breadcrumbs__link"> Оформление заказа </a>
        </li>
      </ul>

      <div class="content__row">
        <h1 class="content__title">Оформление заказа</h1>
      </div>
    </div>

    <section class="cart">
      <form
        class="cart__form form"
        action="#"
        method="POST"
        @submit.prevent="submitOrder"
      >
        <div class="cart__field">
          <div class="cart__data">
            <BaseFormText
              v-model="formData.name"
              :error="formError.name"
              title="ФИО"
              placeholder="Введите ваше полное имя"
            />

            <BaseFormText
              v-model="formData.address"
              :error="formError.address"
              title="Адрес доставки"
              placeholder="Введите ваш адрес"
            />

            <BaseFormText
              v-model="formData.phone"
              :error="formError.phone"
              title="Телефон"
              placeholder="Введите ваш телефон"
              type="tel"
            />

            <BaseFormText
              v-model="formData.email"
              :error="formError.email"
              title="Email"
              placeholder="Введи ваш Email"
              type="email"
            />

            <BaseFormTextarea
              v-model="formData.comment"
              :error="formError.comment"
              title="Комментарий к заказу"
              placeholder="Ваши пожелания"
            />
          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li
                v-for="deliveryOption in deliveryOptions"
                :key="deliveryOption.id"
                class="options__item"
              >
                <label class="options__label">
                  <input
                    class="options__radio sr-only"
                    type="radio"
                    name="delivery"
                    :value="deliveryOption.id"
                    v-model="formData.deliveryTypeId"
                  />
                  <span class="options__value option__select">
                    {{ deliveryOption.title }}
                    <b>{{
                      deliveryOption.price === '0'
                        ? 'бесплатно'
                        : deliveryOption.price + ' ₽'
                    }}</b>
                  </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <CustomLoader v-if="loadingPaymentOptions" />
            <ul v-else class="cart__options options">
              <li
                v-for="paymentOption in paymentOptions"
                :key="paymentOption.id"
                class="options__item"
              >
                <label class="options__label">
                  <input
                    class="options__radio sr-only"
                    type="radio"
                    name="pay"
                    :value="paymentOption.id"
                    v-model="formData.paymentTypeId"
                  />
                  <span class="options__value option__select">{{
                    paymentOption.title
                  }}</span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li
              v-for="product in cartDetailProducts"
              :key="product.id"
              class="cart__order"
            >
              <h3>{{ product.product.title }}</h3>
              <b>
                <b>x{{ product.quantity }}</b
                >{{ product.price * product.quantity }} ₽</b
              >
              <span>Артикул: {{ product.color.id }}</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>
              Доставка: <b>{{ selectedDeliveryOptionPrice }} ₽</b>
            </p>
            <p>
              Итого: <b>{{ cartProductsCount }}</b>
              {{ getCorrectEnding(cartProductsCount) }} на сумму
              <b>{{ cartTotalPrice }} ₽</b>
            </p>
          </div>

          <button
            class="cart__button button button--primery"
            type="submit"
            :disabled="sending"
          >
            {{ sending ? 'Отправка...' : 'Оформить заказ' }}
          </button>
        </div>
        <div class="cart__error form__error-block" v-if="formErrorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
            {{ formErrorMessage }}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import BaseFormText from '@/components/BaseFormText.vue';
import BaseFormTextarea from '@/components/BaseFormTextarea.vue';
import CustomLoader from '@/components/CustomLoader.vue';
import getCorrectEnding from '@/helpers/getCorrectEnding';
import { API_BASE_URL } from '../config';

export default {
  components: { BaseFormText, BaseFormTextarea, CustomLoader },
  data() {
    return {
      loadingDeliveryOptions: false,
      loadingPaymentOptions: false,
      sending: false,

      formData: {
        name: '',
        address: '',
        phone: '',
        email: '',
        deliveryTypeId: null,
        paymentTypeId: null,
        comment: '',
      },
      formError: {},
      formErrorMessage: '',

      deliveryOptions: [],
      paymentOptions: [],
    };
  },
  methods: {
    async loadDeliveryOptions() {
      this.loadingDeliveryOptions = true;
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/deliveries`);
        this.deliveryOptions = data;
        if (this.deliveryOptions.length > 0) {
          this.formData.deliveryTypeId = this.deliveryOptions[0].id;
        }
      } catch (error) {
        console.error('Ошибка при загрузке способов доставки:', error);
      } finally {
        this.loadingDeliveryOptions = false;
      }
    },
    async loadPaymentOptions(deliveryTypeId) {
      try {
        this.loadingPaymentOptions = true;
        const { data } = await axios.get(`${API_BASE_URL}/api/payments`, {
          params: {
            deliveryTypeId,
          },
        });
        this.paymentOptions = data;

        if (this.paymentOptions.length > 0) {
          this.formData.paymentTypeId = this.paymentOptions[0].id;
        }
      } catch (error) {
        console.error('Ошибка при загрузке методов оплаты:', error);
      } finally {
        this.loadingPaymentOptions = false;
      }
    },
    async submitOrder() {
      try {
        this.sending = true;
        this.formError = {};
        this.formErrorMessage = '';
        const { data } = await axios.post(
          `${API_BASE_URL}/api/orders`,
          this.formData,
          {
            params: {
              userAccessKey: this.$store.state.userAccessKey,
            },
            // eslint-disable-next-line comma-dangle
          }
        );
        this.$store.commit('resetCart');
        this.$store.commit('updateOrderInfo', data);
        this.$router.push({ name: 'orderInfo', params: { id: data.id } });
      } catch (error) {
        console.error('Ошибка при оформлении заказа:', error);
        this.formError = error.response.data.error.request || {};
        this.formErrorMessage = error.response.data.error.message;
      } finally {
        this.sending = false;
      }
    },
    getCorrectEnding,
  },
  computed: {
    ...mapGetters({
      cartDetailProducts: 'cartDetailProducts',
      cartTotalPrice: 'cartTotalPrice',
      cartProductsCount: 'cartProductsCount',
    }),
    selectedDeliveryOptionPrice() {
      const selectedDeliveryOption = this.deliveryOptions.find(
        // eslint-disable-next-line comma-dangle
        (option) => option.id === this.formData.deliveryTypeId
      );

      return selectedDeliveryOption ? selectedDeliveryOption.price : 0;
    },
  },
  watch: {
    'formData.deliveryTypeId': {
      handler(newDeliveryType, oldDeliveryType) {
        if (newDeliveryType !== oldDeliveryType) {
          this.loadPaymentOptions(newDeliveryType);
        }
      },
    },
  },
  created() {
    this.loadDeliveryOptions();
  },
};
</script>
