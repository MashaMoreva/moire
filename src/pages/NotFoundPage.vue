<template>
  <div class="not-found">
    <p class="not-found__title">Ошибка 404</p>
    <p class="not-found__text">
      Упс! Запрошенная вами страница не может быть найдена...
    </p>

    <router-link :to="{ name: 'main' }" class="button button--primery"
      >Вернуться на главную</router-link
    >
  </div>
</template>

<script>
export default {};
</script>
