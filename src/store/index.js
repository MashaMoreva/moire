/* eslint-disable comma-dangle */
// eslint-disable-next-line
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import { API_BASE_URL } from '@/config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userAccessKey: null,
    cartProducts: [],
    orderInfo: null,
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => ({
        id: item.id,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
        product: {
          id: item.product.id,
          title: item.product.title,
          slug: item.product.slug,
          price: item.product.price,
        },
      }));
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce(
        (acc, item) => item.price * item.quantity + acc,
        0
      );
    },
    cartProductsCount(state, getters) {
      return getters.cartDetailProducts.length;
    },
    orderInfo(state) {
      return state.orderInfo;
    },
    orderInfoTotalPrice(state) {
      return state.orderInfo.basket.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  mutations: {
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProducts(state, items) {
      state.cartProducts = items;
    },
    updateCartProductQuantity(state, payload) {
      const cartItem = state.cartProducts.find(
        (item) => item.id === payload.basketItemId
      );
      if (cartItem) {
        cartItem.quantity = payload.quantity;
      }
    },
    resetCart(state) {
      state.cartProducts = [];
    },
    updateOrderInfo(state, orderInfo) {
      state.orderInfo = orderInfo;
    },
  },
  actions: {
    async loadCart(context) {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/baskets`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        });
        if (!context.state.userAccessKey) {
          localStorage.setItem('userAccessKey', data.user.accessKey);
          context.commit('updateUserAccessKey', data.user.accessKey);
        }
        context.commit('updateCartProducts', data.items);
      } catch (error) {
        console.error('Ошибка загрузки корзины:', error);
      }
    },
    async addProductToCart(context, payload) {
      try {
        const { data } = await axios.post(
          `${API_BASE_URL}/api/baskets/products`,
          {
            productId: payload.productId,
            colorId: payload.colorId,
            sizeId: payload.sizeId,
            quantity: payload.quantity,
          },
          {
            params: {
              userAccessKey: context.state.userAccessKey,
            },
          }
        );
        context.commit('updateCartProducts', data.items);
        return { success: true, message: 'Товар добавлен в корзину!' };
      } catch (error) {
        return {
          success: false,
          message: 'Ошибка при добавлении товара в корзину',
        };
      }
    },
    async updateCartProductQuantity(context, payload) {
      try {
        const { data } = await axios.put(
          `${API_BASE_URL}/api/baskets/products`,
          {
            basketItemId: payload.basketItemId,
            quantity: payload.quantity,
          },
          {
            params: {
              userAccessKey: context.state.userAccessKey,
            },
          }
        );
        context.commit('updateCartProductQuantity', payload);
        context.commit('updateCartProducts', data.items);
      } catch (error) {
        console.error(
          'Ошибка при изменении количества товара в корзине:',
          error
        );
      }
    },
    async deleteProductFromCart(context, payload) {
      try {
        const { data } = await axios.delete(
          `${API_BASE_URL}/api/baskets/products`,
          {
            params: {
              userAccessKey: context.state.userAccessKey,
            },
          },
          {
            basketItemId: payload.basketItemId,
          }
        );
        context.commit('updateCartProducts', data.items);
      } catch (error) {
        console.error('Ошибка при удалении товара из корзины:', error);
      }
    },
    async loadOrderInfo(context, orderId) {
      try {
        const { data } = await axios.get(
          `${API_BASE_URL}/api/orders/${orderId}`,
          {
            params: {
              userAccessKey: context.state.userAccessKey,
            },
          }
        );
        context.commit('updateOrderInfo', data);
      } catch (error) {
        console.error('Ошибка загрузки данных заказа:', error);
      }
    },
  },
  modules: {},
});
