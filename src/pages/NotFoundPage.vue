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

<style>
.not-found {
  padding: 100px 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background: url(../assets/img/notFound.webp) no-repeat center/contain;
  flex: 1;
}

.not-found__title {
  margin: 0;
  font-weight: 900;
  font-size: 50px;
}

.not-found__text {
  margin: 10px 0 10px 0;
  font-weight: 400;
  font-size: 30px;
}
</style>

<script>
import notFound from '@/assets/img/notFound.webp';

export default {
  data() {
    return {
      image: notFound,
    };
  },
};
</script>
