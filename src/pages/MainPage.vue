<template>
  <main class="content container">
    <div class="content__top">
      <div class="content__row">
        <h1 class="content__title">Каталог</h1>
        <span class="content__info"> 152 товара </span>
      </div>
    </div>

    <div class="content__catalog">
      <ProductFilter />
      <section class="catalog">
        <ProductList :products="products" v-if="productsData" />
        <CustomLoader v-if="loading" />
        <BasePagination />
      </section>
    </div>
  </main>
</template>

<script>
// eslint-disable-next-line
import axios from 'axios';
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import CustomLoader from '@/components/CustomLoader.vue';
import { API_BASE_URL } from '../config';

export default {
  components: {
    ProductFilter,
    ProductList,
    BasePagination,
    CustomLoader,
  },
  data() {
    return { productsData: null, loading: false, error: null };
  },
  methods: {
    async loadProducts() {
      this.loading = true;
      try {
        const response = await axios.get(`${API_BASE_URL}/api/products`);
        this.productsData = response.data;
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
      return this.productsData?.items || [];
    },
  },
  created() {
    this.loadProducts();
  },
};
</script>
