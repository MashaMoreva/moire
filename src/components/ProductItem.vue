<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="image" :alt="product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.price }} ₽</span>
    <ProductColors :colors="product.colors" />
  </li>
</template>
<script>
import noPhoto from '../../public/img/noPhoto.webp';
import ProductColors from './ProductColors.vue';

export default {
  props: ['product'],
  components: { ProductColors },
  data() {
    return {
      image: this.product.colors[0].gallery
        ? this.product.colors[0].gallery[0].file.url
        : noPhoto,
    };
  },
};
</script>
