<template>
  <router-link
    :to="{ name: 'cart' }"
    class="header__cart"
    aria-label="Корзина с товарами"
  >
    <svg width="19" height="24">
      <use xlink:href="#icon-cart"></use>
    </svg>
    <span class="header__count" aria-label="Количество товаров">{{
      $store.state.cartProducts.length
    }}</span>
  </router-link>
</template>

<script>
export default {};
</script>
