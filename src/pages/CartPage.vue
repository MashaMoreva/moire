<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html"> Каталог </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Корзина </a>
        </li>
      </ul>

      <div class="content__row">
        <h1 class="content__title">Корзина</h1>
        <span class="content__info"> 3 товара </span>
      </div>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <li class="cart__item product">
              <div class="product__pic">
                <img
                  src="img/product-square-4.jpg"
                  width="120"
                  height="120"
                  srcset="img/product-square-4@2x.jpg 2x"
                  alt="Название товара"
                />
              </div>
              <h3 class="product__title">Базовая хлопковая футболка</h3>
              <p class="product__info product__info--color">
                Цвет:
                <span>
                  <i style="background-color: #ff9b78"></i>
                  Персиковый
                </span>
              </p>
              <span class="product__code"> Артикул: 1501230 </span>

              <div class="product__counter form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" value="1" name="count" />

                <button type="button" aria-label="Добавить один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price"> 990 ₽ </b>

              <button
                class="product__del button-del"
                type="button"
                aria-label="Удалить товар из корзины"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>

            <li class="cart__item product">
              <div class="product__pic">
                <img
                  src="img/product-square-5.jpg"
                  width="120"
                  height="120"
                  srcset="img/product-square-5@2x.jpg 2x"
                  alt="Название товара"
                />
              </div>
              <h3 class="product__title">Гироскутер Razor Hovertrax 2.0</h3>
              <p class="product__info product__info--color">
                Цвет:
                <span>
                  <i style="background-color: #73b6ea"></i>
                  Нежно-голубой
                </span>
              </p>
              <span class="product__code"> Артикул: 1501230 </span>

              <div class="product__counter form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" value="1" name="count" />

                <button type="button" aria-label="Добавить один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price"> 1 990 ₽ </b>

              <button
                class="product__del button-del"
                type="button"
                aria-label="Удалить товар из корзины"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>

            <li class="cart__item product">
              <div class="product__pic">
                <img
                  src="img/product-square-6.jpg"
                  width="120"
                  height="120"
                  srcset="img/product-square-6@2x.jpg 2x"
                  alt="Название товара"
                />
              </div>
              <h3 class="product__title">
                Электрический дрифт-карт Razor Lil’ Crazy
              </h3>
              <p class="product__info product__info--color">
                Цвет:
                <span>
                  <i style="background-color: #ff6b00"></i>
                  Оранжевый
                </span>
              </p>
              <span class="product__code"> Артикул: 1501230 </span>

              <div class="product__counter form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" value="1" name="count" />

                <button type="button" aria-label="Добавить один товар">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price"> 1 090 ₽ </b>

              <button
                class="product__del button-del"
                type="button"
                aria-label="Удалить товар из корзины"
              >
                <svg width="20" height="20" fill="currentColor">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">Итого: <span>4 070 ₽</span></p>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {};
</script>
