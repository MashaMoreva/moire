<template>
  <aside class="filter">
    <form
      class="filter__form form"
      action="#"
      method="get"
      @submit.prevent="submit"
    >
      <fieldset class="form__block">
        <legend class="form__legend">Цена</legend>
        <label class="form__label form__label--price">
          <input
            class="form__input"
            type="text"
            v-model.number="currentPriceFrom"
            :placeholder="minPrice"
          />
          <span class="form__value">От</span>
        </label>
        <label class="form__label form__label--price">
          <input
            class="form__input"
            type="text"
            v-model.number="currentPriceTo"
            :placeholder="maxPrice"
          />
          <span class="form__value">До</span>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Категория</legend>
        <label class="form__label form__label--select">
          <select
            class="form__select"
            type="text"
            name="category"
            v-model.number="currentCategoryId"
          >
            <option value="0">Все категории</option>
            <option
              v-for="category in categories"
              :value="category.id"
              :key="category.id"
            >
              {{ category.title }}
            </option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Цвет</legend>
        <ul class="colors colors--black">
          <li class="colors__item" v-for="color in colors" :key="color.id">
            <label class="colors__label">
              <input
                class="colors__radio sr-only"
                type="checkbox"
                :value="color.id"
                v-model="currentColorIds"
              />
              <span
                class="colors__value"
                :style="{ 'background-color': color.code }"
              >
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Материал</legend>
        <ul class="check-list">
          <li
            class="check-list__item"
            v-for="material in materials"
            :key="material.id"
          >
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                :value="material.id"
                v-model="currentMaterialIds"
              />
              <span class="check-list__desc">
                {{ material.title }}
                <span>({{ material.productsCount }})</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Коллекция</legend>
        <ul class="check-list">
          <li
            class="check-list__item"
            v-for="season in seasons"
            :key="season.id"
          >
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                :value="season.id"
                v-model="currentSeasonIds"
              />
              <span class="check-list__desc">
                {{ season.title }}
                <span>({{ season.productsCount }})</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button
        class="filter__submit button button--primery"
        type="submit"
        :disabled="!isAnyFilterFilled"
      >
        Применить
      </button>
      <button
        v-if="isAnyFilterFilled"
        class="filter__reset button button--second"
        type="button"
        @click.prevent="reset"
      >
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
import { API_BASE_URL } from '../config';

export default {
  props: [
    'products',
    'priceFrom',
    'priceTo',
    'categoryId',
    'colorIds',
    'materialIds',
    'seasonIds',
  ],
  data() {
    return {
      minPrice: null,
      maxPrice: null,

      categories: [],
      colors: [],
      materials: [],
      seasons: [],

      currentPriceFrom: null,
      currentPriceTo: null,
      currentCategoryId: 0,
      currentColorIds: [],
      currentMaterialIds: [],
      currentSeasonIds: [],
    };
  },
  methods: {
    calculatePrices() {
      const prices = this.products.map((product) => product.price);
      this.minPrice = Math.min(...prices);
      this.maxPrice = Math.max(...prices);
    },
    async loadCategories() {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/productCategories`);
        this.categories = res.data.items;
      } catch (error) {
        console.error('Произошла ошибка при загрузке категорий:', error);
      }
    },
    async loadColors() {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/colors`);
        this.colors = res.data.items;
      } catch (error) {
        console.error('Произошла ошибка при загрузке цветов:', error);
      }
    },
    async loadMaterials() {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/materials`);
        this.materials = res.data.items;
      } catch (error) {
        console.error('Произошла ошибка при загрузке материалов:', error);
      }
    },
    async loadSeasons() {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/seasons`);
        this.seasons = res.data.items;
      } catch (error) {
        console.error('Произошла ошибка при загрузке сезонов:', error);
      }
    },
    submit() {
      this.$emit('update:priceFrom', this.currentPriceFrom);
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:categoryId', this.currentCategoryId);
      this.$emit('update:colorIds', this.currentColorIds);
      this.$emit('update:materialIds', this.currentMaterialIds);
      this.$emit('update:seasonIds', this.currentSeasonIds);
    },
    reset() {
      this.$emit('update:priceFrom', null);
      this.$emit('update:priceTo', null);
      this.$emit('update:categoryId', 0);
      this.$emit('update:colorIds', []);
      this.$emit('update:materialIds', []);
      this.$emit('update:seasonIds', []);
    },
  },
  watch: {
    products: 'calculatePrices',
    priceFrom(value) {
      this.currentPriceFrom = value;
    },
    priceTo(value) {
      this.currentPriceTo = value;
    },
    categoryId(value) {
      this.currentCategoryId = value;
    },
    colorIds(value) {
      this.currentColorIds = value;
    },
    materialIds(value) {
      this.currentMaterialIds = value;
    },
    seasonIds(value) {
      this.currentSeasonIds = value;
    },
  },
  computed: {
    isAnyFilterFilled() {
      return (
        // prettier-ignore
        this.currentPriceFrom !== null
        || this.currentPriceTo !== null
        || this.currentCategoryId !== 0
        || this.currentColorIds.length > 0
        || this.currentMaterialIds.length > 0
        || this.currentSeasonIds.length > 0
      );
    },
  },
  created() {
    this.loadCategories();
    this.loadColors();
    this.loadMaterials();
    this.loadSeasons();
  },
};
</script>
