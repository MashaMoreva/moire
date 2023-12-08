<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <main v-if="loading" class="content container">
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
          <router-link :to="{ name: '' }" class="breadcrumbs__link">
            {{ product.category.title }}
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link :to="{ name: '' }" class="breadcrumbs__link">
            {{ product.title }}
          </router-link>
        </li>
      </ul>
    </div>

    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img
            class="pics__image"
            :src="currentColorGalleryImage"
            :alt="product.title"
          />
        </div>
        <ul class="pics__list">
          <li
            v-for="color in product.colors"
            :key="color.id"
            class="pics__item"
          >
            <a href="#" class="pics__link">
              <img
                class="pics__link-image"
                :src="color.gallery[0].file.url"
                :alt="product.title"
                :class="{
                  'pics__link--current': selectedColorId === color.color.id,
                }"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ currentSku }}</span>
        <h2 class="item__title">{{ product.title }}</h2>
        <div class="item__form">
          <form class="form" action="#" method="POST">
            <div class="item__row item__row--center">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" value="1" name="count" />

                <button type="button" aria-label="Добавить один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="item__price"> {{ product.price | numberFormat }} ₽ </b>
            </div>

            <div class="item__row">
              <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ul class="colors colors--black">
                  <li
                    v-for="color in product.colors"
                    :key="color.id"
                    class="colors__item"
                  >
                    <label class="colors__label">
                      <input
                        class="colors__radio sr-only"
                        type="radio"
                        :value="color.color.id"
                        v-model="selectedColorId"
                      />
                      <span
                        class="colors__value"
                        :style="{ 'background-color': color.color.code }"
                      ></span>
                    </label>
                  </li>
                </ul>
              </fieldset>

              <fieldset class="form__block">
                <legend class="form__legend">Размер</legend>
                <label
                  class="form__label form__label--small form__label--select"
                >
                  <select
                    class="form__select"
                    type="text"
                    v-model="selectedSizeId"
                  >
                    <option
                      v-for="size in product.sizes"
                      :key="size.id"
                      :value="size.id"
                    >
                      {{ size.title }}
                    </option>
                  </select>
                </label>
              </fieldset>
            </div>

            <button class="item__button button button--primery" type="submit">
              В корзину
            </button>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Информация о товаре </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current"> Доставка и возврат </a>
          </li>
        </ul>

        <div class="item__content"></div>
      </div>
    </section>
  </main>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
import numberFormat from '@/helpers/numberFormat';
import { API_BASE_URL } from '@/config';
import CustomLoader from '@/components/CustomLoader.vue';

export default {
  components: { CustomLoader },
  data() {
    return {
      product: null,
      loading: false,
      error: null,

      currentSku: null,

      selectedColorId: null,
      selectedSizeId: null,
      selectedQuantity: 1,
    };
  },
  filters: {
    numberFormat,
  },
  methods: {
    // prettier-ignore
    async loadProduct() {
      try {
        this.loading = true;
        const productId = this.$route.params.id;
        const { data } = await axios.get(
          `${API_BASE_URL}/api/products/${productId}`,
        );
        this.product = data;

        this.currentSku = this.product.colors.id;
        if (this.product.colors && this.product.colors.length > 0) {
          this.selectedColorId = this.product.colors[0].color.id;
        }
        if (this.product.sizes && this.product.sizes.length > 0) {
          this.selectedSizeId = this.product.sizes[0].id;
        }
      } catch (error) {
        console.error('Произошла ошибка при загрузке продукта:', error);
        this.error = 'Произошла ошибка при загрузке продукта';
      } finally {
        this.loading = false;
      }
    },
    // prettier-ignore
    getSelectedColor() {
      return this.product.colors.find(
        (color) => color.color.id === this.selectedColorId,
      );
    },
    handleColorChange() {
      const selectedColor = this.getSelectedColor();
      if (selectedColor) {
        this.currentSku = selectedColor.id;
      }
    },
  },
  computed: {
    currentColorGalleryImage() {
      const selectedColor = this.getSelectedColor();
      return selectedColor ? selectedColor.gallery[0].file.url : '';
    },
  },
  watch: {
    selectedColorId: 'handleColorChange',
  },
  created() {
    this.loadProduct();
  },
};
</script>
