<template>
  <main class="content container">
    <div class="content__top">
      <div class="content__row">
        <h1 class="content__title">Каталог</h1>
        <span class="content__info">
          {{ countProducts }} {{ getCorrectEnding(countProducts) }}
        </span>
      </div>
    </div>

    <div class="content__catalog">
      <ProductFilter :products="products" />
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
      productsData: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    getCorrectEnding,
    async loadProducts() {
      this.loading = true;
      const params = {
        page: this.page,
        limit: this.productsPerPage,
      };
      try {
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
    page() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
