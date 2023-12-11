<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <main class="content container">
    <div class="content__top">
      <div class="content__row">
        <div class="content__column">
          <a class="content__title" @click="reloadPage">Каталог</a>
          <span class="content__info">
            {{ countProducts }} {{ getCorrectEnding(countProducts) }}
          </span>
        </div>
        <div class="content__column">
          <legend class="content__info">
            Показывать товаров на странице:&#8194;
          </legend>
          <label class="form__label form__label--select">
            <select
              class="form__select"
              v-model="productsPerPage"
              @change="loadProducts"
            >
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </label>
        </div>
      </div>
    </div>

    <div class="content__catalog">
      <ProductFilter
        :products="products"
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :color-ids.sync="filterColorIds"
        :material-ids.sync="filterMaterialIds"
        :season-ids.sync="filterSeasonIds"
      />
      <section class="catalog">
        <CustomLoader v-if="loading" />
        <ProductList :products="products" v-else-if="!loading" />
        <AppPagination
          v-model="page"
          :count="countProducts"
          :per-page="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
import ProductList from '@/components/ProductList.vue';
import AppPagination from '@/components/AppPagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import CustomLoader from '@/components/CustomLoader.vue';
import getCorrectEnding from '@/helpers/getCorrectEnding';
import { API_BASE_URL } from '../config';

export default {
  components: {
    ProductFilter,
    ProductList,
    AppPagination,
    CustomLoader,
  },
  data() {
    return {
      page: 1,
      productsPerPage: 12,

      filterPriceFrom: null,
      filterPriceTo: null,
      filterCategoryId: 0,
      filterColorIds: [],
      filterMaterialIds: [],
      filterSeasonIds: [],

      productsData: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    getCorrectEnding,
    reloadPage() {
      this.$router.go(0);
    },
    async loadProducts() {
      this.loading = true;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(async () => {
        try {
          const params = {
            page: this.page,
            limit: this.productsPerPage,
            minPrice: this.filterPriceFrom,
            maxPrice: this.filterPriceTo,
            categoryId: this.filterCategoryId,
            colorIds: this.filterColorIds,
            materialIds: this.filterMaterialIds,
            seasonIds: this.filterSeasonIds,
          };

          const res = await axios.get(`${API_BASE_URL}/api/products`, {
            params,
          });

          this.productsData = res.data;
        } catch (error) {
          console.error('Произошла ошибка при загрузке продуктов:', error);
          this.error = 'Произошла ошибка при загрузке продуктов';
        } finally {
          this.loading = false;
        }
      }, 0);
    },
  },

  computed: {
    products() {
      return this.productsData ? this.productsData.items : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0;
    },
  },
  watch: {
    page: 'loadProducts',
    filterCategoryId: 'loadProducts',
    filterPriceFrom: 'loadProducts',
    filterPriceTo: 'loadProducts',
    filterColorIds: 'loadProducts',
    filterMaterialIds: 'loadProducts',
    filterSeasonIds: 'loadProducts',
  },
  mounted() {
    if (this.$route.params.categoryId !== undefined) {
      this.filterCategoryId = this.$route.params.categoryId;
    }
    this.loadProducts();
  },
};
</script>
