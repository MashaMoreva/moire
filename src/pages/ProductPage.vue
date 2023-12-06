<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html"> Каталог </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#"> Носки </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Носки с принтом мороженое </a>
        </li>
      </ul>
    </div>

    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img
            width="570"
            height="570"
            src="img/product-square-1.jpg"
            srcset="img/product-square-1@2x.jpg 2x"
            alt="Название товара"
          />
        </div>
        <ul class="pics__list">
          <li class="pics__item">
            <a href="" class="pics__link pics__link--current">
              <img
                width="98"
                height="98"
                src="img/product-square-2.jpg"
                srcset="img/product-square-2@2x.jpg 2x"
                alt="Название товара"
              />
            </a>
          </li>
          <li class="pics__item">
            <a href="" class="pics__link">
              <img
                width="98"
                height="98"
                src="img/product-square-3.jpg"
                srcset="img/product-square-3@2x.jpg 2x"
                alt="Название товара"
              />
            </a>
          </li>
        </ul>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: 150030</span>
        <h2 class="item__title">Смартфон Xiaomi Mi Mix 3 6/128GB</h2>
        <div class="item__form">
          <form class="form" action="#" method="POST">
            <div class="item__row item__row--center">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" value="1" name="count" />

                <button type="button" aria-label="Добавить один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="item__price"> 18 990 ₽ </b>
            </div>

            <div class="item__row">
              <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ul class="colors colors--black">
                  <li class="colors__item">
                    <label class="colors__label">
                      <input
                        class="colors__radio sr-only"
                        type="radio"
                        name="color-item"
                        value="blue"
                        checked=""
                      />
                      <span
                        class="colors__value"
                        style="background-color: #73b6ea"
                      >
                      </span>
                    </label>
                  </li>
                  <li class="colors__item">
                    <label class="colors__label">
                      <input
                        class="colors__radio sr-only"
                        type="radio"
                        name="color-item"
                        value="yellow"
                      />
                      <span
                        class="colors__value"
                        style="background-color: #ffbe15"
                      >
                      </span>
                    </label>
                  </li>
                  <li class="colors__item">
                    <label class="colors__label">
                      <input
                        class="colors__radio sr-only"
                        type="radio"
                        name="color-item"
                        value="gray" />
                      <span
                        class="colors__value"
                        style="background-color: #939393"
                      >
                      </span
                    ></label>
                  </li>
                </ul>
              </fieldset>

              <fieldset class="form__block">
                <legend class="form__legend">Размер</legend>
                <label
                  class="form__label form__label--small form__label--select"
                >
                  <select class="form__select" type="text" name="category">
                    <option value="value1">37-39</option>
                    <option value="value2">40-42</option>
                    <option value="value3">42-50</option>
                  </select>
                </label>
              </fieldset>
            </div>

            <button class="item__button button button--primery" type="submit">
              В корзину
            </button>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link" href="#"> Информация о товаре </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current"> Доставка и возврат </a>
          </li>
        </ul>

        <div class="item__content">
          <h3>Доставка:</h3>

          <p>
            1. Курьерская доставка по Москве и Московской области – 290 ₽<br />
            2.Самовывоз из магазина. Список и адреса магазинов Вы можете
            посмотреть здесь<br />
          </p>

          <h3>Возврат:</h3>

          <p>
            Любой возврат должен быть осуществлен в течение Возвраты в магазине
            БЕСПЛАТНО.<br />
            Вы можете вернуть товары в любой магазин. Магазин должен быть
            расположен в стране, в которой Вы осуществили покупку. БЕСПЛАТНЫЙ
            возврат в Пункт выдачи заказов.<br />
            Для того чтобы вернуть товар в одном из наших Пунктов выдачи
            заказов, позвоните по телефону 8 800 600 90 09<br />
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>
