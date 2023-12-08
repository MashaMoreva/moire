<template>
  <li class="catalog__item">
    <router-link
      class="catalog__pic"
      :to="{ name: 'product', params: { id: product.id } }"
    >
      <img :src="image" :alt="product.title" />
    </router-link>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.price | numberFormat }} ₽</span>
    <ProductColors
      :colors="product.colors"
      @colorChanged="updateImage"
      :currentColor="currentColor"
    />
  </li>
</template>
<script>
import numberFormat from '@/helpers/numberFormat';
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
      currentColor: this.product.colors[0].color.code,
    };
  },
  filters: {
    numberFormat,
  },
  methods: {
    updateImage(newColorCode) {
      const selectedColor = this.product.colors.find(
        (color) => color.color.code === newColorCode,
      );

      if (selectedColor && selectedColor.gallery.length > 0) {
        this.image = selectedColor.gallery[0].file.url;
      } else {
        this.image = noPhoto;
      }
    },
  },
};
</script>
