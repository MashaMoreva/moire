<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <header class="header container">
    <div class="header__wrapper">
      <span class="header__info"></span>

      <a class="header__logo" @click="reloadPage">
        <img
          src="img/svg/logo-moire.svg"
          alt="Логотип интернет магазина Moire"
          width="116"
          height="34"
        />
      </a>

      <span class="header__tel"></span>

      <CartIndicator />
    </div>
  </header>
</template>

<script>
import CartIndicator from './CartIndicator.vue';

export default {
  components: { CartIndicator },
  methods: {
    reloadPage() {
      this.$router.go(0);
    },
  },
};
</script>
