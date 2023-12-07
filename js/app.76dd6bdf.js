(function(){"use strict";var t={2354:function(t,s,a){var r=a(7195),e=function(){var t=this,s=t._self._c;return s("div",[s("AppHeader"),s("router-view"),s("AppFooter")],1)},i=[],l=function(){var t=this,s=t._self._c;return s("header",{staticClass:"header container"},[s("div",{staticClass:"header__wrapper"},[s("span",{staticClass:"header__info"},[t._v("Каталог")]),t._m(0),s("a",{staticClass:"header__tel",attrs:{href:"tel:8 800 600 90 09"}},[t._v(" 8 800 600 90 09 ")]),s("a",{staticClass:"header__cart",attrs:{href:"cart.html","aria-label":"Корзина с товарами"}},[s("svg",{attrs:{width:"19",height:"24"}},[s("use",{attrs:{"xlink:href":"#icon-cart"}})]),s("span",{staticClass:"header__count",attrs:{"aria-label":"Количество товаров"}},[t._v("3")])])])])},o=[function(){var t=this,s=t._self._c;return s("a",{staticClass:"header__logo",attrs:{href:"#"}},[s("img",{attrs:{src:"img/svg/logo-moire.svg",alt:"Логотип интернет магазина Moire",width:"116",height:"34"}})])}],c={},n=c,_=a(1001),u=(0,_.Z)(n,l,o,!1,null,null,null),d=u.exports,p=function(){var t=this,s=t._self._c;return s("footer",{staticClass:"footer container"},[s("div",{staticClass:"footer__wrapper"},[t._m(0),s("ul",{staticClass:"footer__social social"},[s("li",{staticClass:"social__item"},[s("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Вконтакте"}},[s("svg",{attrs:{width:"20",height:"11",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-vk"}})])])]),s("li",{staticClass:"social__item"},[s("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Инстаграм"}},[s("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-insta"}})])])]),s("li",{staticClass:"social__item"},[s("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Facebook"}},[s("svg",{attrs:{width:"17",height:"17",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-facebook"}})])])]),s("li",{staticClass:"social__item"},[s("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Twitter"}},[s("svg",{attrs:{width:"17",height:"14",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-twitter"}})])])]),s("li",{staticClass:"social__item"},[s("a",{staticClass:"social__link",attrs:{href:"#","aria-label":"Telegram"}},[s("svg",{attrs:{width:"19",height:"17",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-telegram"}})])])])]),s("p",{staticClass:"footer__desc"},[t._v(" Все права на материалы, находящиеся на сайте, охраняются в соответствии с законодательством РФ, в том числе об авторском праве и смежных правах. ")]),t._m(1),s("span",{staticClass:"footer__copyright"},[t._v("© "+t._s(t.currentYear)+" Moire ")])])])},m=[function(){var t=this,s=t._self._c;return s("ul",{staticClass:"footer__links"},[s("li",[s("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Каталог ")])]),s("li",[s("a",{staticClass:"footer__link",attrs:{href:"tel:88006009009"}},[t._v(" 8 800 600 90 09 ")])]),s("li",[s("a",{staticClass:"footer__link",attrs:{href:"mailto:hi@technozavrrr.com"}},[t._v(" hi@technozavrrr.com ")])]),s("li",[s("a",{staticClass:"footer__link",attrs:{href:"#"}},[t._v(" Распродажа ")])]),s("li",[s("a",{staticClass:"footer__link footer__link--medium",attrs:{href:"#"}},[t._v(" Заказать звонок ")])])])},function(){var t=this,s=t._self._c;return s("ul",{staticClass:"footer__data"},[s("li",[s("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Политика конфиденциальности ")])]),s("li",[s("a",{staticClass:"footer__link",attrs:{href:"#",target:"_blank",rel:"noopener",type:"application/pdf"}},[t._v(" Публичная оферта ")])])])}],f={computed:{currentYear(){return(new Date).getFullYear()}}},h=f,C=(0,_.Z)(h,p,m,!1,null,null,null),v=C.exports,b={components:{AppHeader:d,AppFooter:v}},g=b,y=(0,_.Z)(g,e,i,!1,null,null,null),k=y.exports,I=a(2241),P=function(){var t=this,s=t._self._c;return s("main",{staticClass:"content container"},[s("div",{staticClass:"content__top"},[s("div",{staticClass:"content__row"},[s("h1",{staticClass:"content__title"},[t._v("Каталог")]),s("span",{staticClass:"content__info"},[t._v(" "+t._s(t.countProducts)+" "+t._s(t.getCorrectEnding(t.countProducts))+" ")])])]),s("div",{staticClass:"content__catalog"},[s("ProductFilter",{attrs:{products:t.products,"price-from":t.filterPriceFrom,"price-to":t.filterPriceTo,"category-id":t.filterCategoryId,"color-ids":t.filterColorIds,"material-ids":t.filterMaterialIds,"season-ids":t.filterSeasonIds},on:{"update:priceFrom":function(s){t.filterPriceFrom=s},"update:price-from":function(s){t.filterPriceFrom=s},"update:priceTo":function(s){t.filterPriceTo=s},"update:price-to":function(s){t.filterPriceTo=s},"update:categoryId":function(s){t.filterCategoryId=s},"update:category-id":function(s){t.filterCategoryId=s},"update:colorIds":function(s){t.filterColorIds=s},"update:color-ids":function(s){t.filterColorIds=s},"update:materialIds":function(s){t.filterMaterialIds=s},"update:material-ids":function(s){t.filterMaterialIds=s},"update:seasonIds":function(s){t.filterSeasonIds=s},"update:season-ids":function(s){t.filterSeasonIds=s}}}),s("section",{staticClass:"catalog"},[t.loading?s("CustomLoader"):t.loading?t._e():s("ProductList",{attrs:{products:t.products}}),s("AppPagination",{attrs:{count:t.countProducts,"per-page":t.productsPerPage},model:{value:t.page,callback:function(s){t.page=s},expression:"page"}})],1)],1)])},x=[],w=a(4582),S=function(){var t=this,s=t._self._c;return s("ul",{staticClass:"catalog__list"},t._l(t.products,(function(t){return s("ProductItem",{key:t.id,attrs:{product:t}})})),1)},T=[],M=function(){var t=this,s=t._self._c;return s("li",{staticClass:"catalog__item"},[s("a",{staticClass:"catalog__pic",attrs:{href:"#"}},[s("img",{attrs:{src:t.image,alt:t.product.title}})]),s("h3",{staticClass:"catalog__title"},[s("a",{attrs:{href:"#"}},[t._v(" "+t._s(t.product.title)+" ")])]),s("span",{staticClass:"catalog__price"},[t._v(" "+t._s(t.product.price)+" ₽")]),s("ProductColors",{attrs:{colors:t.product.colors,currentColor:t.currentColor},on:{colorChanged:t.updateImage}})],1)},F=[],Z=a.p+"img/noPhoto.52d79c5c.webp",$=function(){var t=this,s=t._self._c;return s("ul",{staticClass:"colors colors--black"},t._l(t.colors,(function(a){return s("li",{key:a.id,staticClass:"colors__item"},[s("label",{staticClass:"colors__label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColor,expression:"currentColor"}],staticClass:"colors__radio sr-only",attrs:{type:"radio"},domProps:{value:a.color.code,checked:t._q(t.currentColor,a.color.code)},on:{change:[function(s){t.currentColor=a.color.code},function(s){return t.changeColor(a.color.code)}]}}),s("span",{staticClass:"colors__value",style:{"background-color":a.color.code}})])])})),0)},A=[],j={props:["colors"],data(){return{currentColor:this.colors[0].color.code}},methods:{changeColor(t){this.currentColor=t,this.$emit("colorChanged",t)}}},O=j,D=(0,_.Z)(O,$,A,!1,null,null,null),q=D.exports,E={props:["product"],components:{ProductColors:q},data(){return{image:this.product.colors[0].gallery?this.product.colors[0].gallery[0].file.url:Z,currentColor:this.product.colors[0].color.code}},methods:{updateImage(t){const s=this.product.colors.find((s=>s.color.code===t));s&&s.gallery.length>0?this.image=s.gallery[0].file.url:this.image=Z}}},N=E,z=(0,_.Z)(N,M,F,!1,null,null,null),R=z.exports,L={props:["products"],components:{ProductItem:R}},H=L,B=(0,_.Z)(H,S,T,!1,null,null,null),G=B.exports,X=function(){var t=this,s=t._self._c;return s("ul",{staticClass:"catalog__pagination pagination"},[s("li",{staticClass:"pagination__item"},[s("a",{staticClass:"pagination__link pagination__link--arrow pagination__link--disabled",attrs:{"aria-label":"Предыдущая страница"}},[s("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])])]),t._l(t.pages,(function(a){return s("li",{key:a,staticClass:"pagination__item"},[s("a",{staticClass:"pagination__link",class:{"pagination__link--current":a===t.page},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.paginate(a)}}},[t._v(" "+t._s(a)+" ")])])})),s("li",{staticClass:"pagination__item"},[s("a",{staticClass:"pagination__link pagination__link--arrow",attrs:{href:"#","aria-label":"Следующая страница"}},[s("svg",{attrs:{width:"8",height:"14",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],2)},Y=[],U={model:{prop:"page",event:"paginate"},props:["page","count","perPage"],computed:{pages(){return Math.ceil(this.count/this.perPage)}},methods:{paginate(t){this.$emit("paginate",t)}}},J=U,K=(0,_.Z)(J,X,Y,!1,null,null,null),Q=K.exports,V=function(){var t=this,s=t._self._c;return s("aside",{staticClass:"filter"},[s("form",{staticClass:"filter__form form",attrs:{action:"#",method:"get"},on:{submit:function(s){return s.preventDefault(),t.submit.apply(null,arguments)}}},[s("fieldset",{staticClass:"form__block"},[s("legend",{staticClass:"form__legend"},[t._v("Цена")]),s("label",{staticClass:"form__label form__label--price"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceFrom,expression:"currentPriceFrom",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",placeholder:t.minPrice},domProps:{value:t.currentPriceFrom},on:{input:function(s){s.target.composing||(t.currentPriceFrom=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}}),s("span",{staticClass:"form__value"},[t._v("От")])]),s("label",{staticClass:"form__label form__label--price"},[s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentPriceTo,expression:"currentPriceTo",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"text",placeholder:t.maxPrice},domProps:{value:t.currentPriceTo},on:{input:function(s){s.target.composing||(t.currentPriceTo=t._n(s.target.value))},blur:function(s){return t.$forceUpdate()}}}),s("span",{staticClass:"form__value"},[t._v("До")])])]),s("fieldset",{staticClass:"form__block"},[s("legend",{staticClass:"form__legend"},[t._v("Категория")]),s("label",{staticClass:"form__label form__label--select"},[s("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategoryId,expression:"currentCategoryId",modifiers:{number:!0}}],staticClass:"form__select",attrs:{type:"text",name:"category"},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(s){var a="_value"in s?s._value:s.value;return t._n(a)}));t.currentCategoryId=s.target.multiple?a:a[0]}}},[s("option",{attrs:{value:"0"}},[t._v("Все категории")]),t._l(t.categories,(function(a){return s("option",{key:a.id,domProps:{value:a.id}},[t._v(" "+t._s(a.title)+" ")])}))],2)])]),s("fieldset",{staticClass:"form__block"},[s("legend",{staticClass:"form__legend"},[t._v("Цвет")]),s("ul",{staticClass:"colors colors--black"},t._l(t.colors,(function(a){return s("li",{key:a.id,staticClass:"colors__item"},[s("label",{staticClass:"colors__label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentColorIds,expression:"currentColorIds"}],staticClass:"colors__radio sr-only",attrs:{type:"checkbox"},domProps:{value:a.id,checked:Array.isArray(t.currentColorIds)?t._i(t.currentColorIds,a.id)>-1:t.currentColorIds},on:{change:function(s){var r=t.currentColorIds,e=s.target,i=!!e.checked;if(Array.isArray(r)){var l=a.id,o=t._i(r,l);e.checked?o<0&&(t.currentColorIds=r.concat([l])):o>-1&&(t.currentColorIds=r.slice(0,o).concat(r.slice(o+1)))}else t.currentColorIds=i}}}),s("span",{staticClass:"colors__value",style:{"background-color":a.code}})])])})),0)]),s("fieldset",{staticClass:"form__block"},[s("legend",{staticClass:"form__legend"},[t._v("Материал")]),s("ul",{staticClass:"check-list"},t._l(t.materials,(function(a){return s("li",{key:a.id,staticClass:"check-list__item"},[s("label",{staticClass:"check-list__label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentMaterialIds,expression:"currentMaterialIds"}],staticClass:"check-list__check sr-only",attrs:{type:"checkbox"},domProps:{value:a.id,checked:Array.isArray(t.currentMaterialIds)?t._i(t.currentMaterialIds,a.id)>-1:t.currentMaterialIds},on:{change:function(s){var r=t.currentMaterialIds,e=s.target,i=!!e.checked;if(Array.isArray(r)){var l=a.id,o=t._i(r,l);e.checked?o<0&&(t.currentMaterialIds=r.concat([l])):o>-1&&(t.currentMaterialIds=r.slice(0,o).concat(r.slice(o+1)))}else t.currentMaterialIds=i}}}),s("span",{staticClass:"check-list__desc"},[t._v(" "+t._s(a.title)+" "),s("span",[t._v("("+t._s(a.productsCount)+")")])])])])})),0)]),s("fieldset",{staticClass:"form__block"},[s("legend",{staticClass:"form__legend"},[t._v("Коллекция")]),s("ul",{staticClass:"check-list"},t._l(t.seasons,(function(a){return s("li",{key:a.id,staticClass:"check-list__item"},[s("label",{staticClass:"check-list__label"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSeasonIds,expression:"currentSeasonIds"}],staticClass:"check-list__check sr-only",attrs:{type:"checkbox"},domProps:{value:a.id,checked:Array.isArray(t.currentSeasonIds)?t._i(t.currentSeasonIds,a.id)>-1:t.currentSeasonIds},on:{change:function(s){var r=t.currentSeasonIds,e=s.target,i=!!e.checked;if(Array.isArray(r)){var l=a.id,o=t._i(r,l);e.checked?o<0&&(t.currentSeasonIds=r.concat([l])):o>-1&&(t.currentSeasonIds=r.slice(0,o).concat(r.slice(o+1)))}else t.currentSeasonIds=i}}}),s("span",{staticClass:"check-list__desc"},[t._v(" "+t._s(a.title)+" "),s("span",[t._v("("+t._s(a.productsCount)+")")])])])])})),0)]),s("button",{staticClass:"filter__submit button button--primery",attrs:{type:"submit"}},[t._v(" Применить ")]),t.isAnyFilterFilled?s("button",{staticClass:"filter__reset button button--second",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.reset.apply(null,arguments)}}},[t._v(" Сбросить ")]):t._e()])])},W=[];const tt="https://vue-moire.skillbox.cc";var st={props:["products","priceFrom","priceTo","categoryId","colorIds","materialIds","seasonIds"],data(){return{minPrice:null,maxPrice:null,categories:[],colors:[],materials:[],seasons:[],currentPriceFrom:null,currentPriceTo:null,currentCategoryId:0,currentColorIds:[],currentMaterialIds:[],currentSeasonIds:[]}},methods:{calculatePrices(){const t=this.products.map((t=>t.price));this.minPrice=Math.min(...t),this.maxPrice=Math.max(...t)},async loadCategories(){try{const t=await w.Z.get(`${tt}/api/productCategories`);this.categories=t.data.items}catch(t){console.error("Произошла ошибка при загрузке категорий:",t)}},async loadColors(){try{const t=await w.Z.get(`${tt}/api/colors`);this.colors=t.data.items}catch(t){console.error("Произошла ошибка при загрузке цветов:",t)}},async loadMaterials(){try{const t=await w.Z.get(`${tt}/api/materials`);this.materials=t.data.items}catch(t){console.error("Произошла ошибка при загрузке материалов:",t)}},async loadSeasons(){try{const t=await w.Z.get(`${tt}/api/seasons`);this.seasons=t.data.items}catch(t){console.error("Произошла ошибка при загрузке сезонов:",t)}},submit(){this.$emit("update:priceFrom",this.currentPriceFrom),this.$emit("update:priceTo",this.currentPriceTo),this.$emit("update:categoryId",this.currentCategoryId),this.$emit("update:colorIds",this.currentColorIds),this.$emit("update:materialIds",this.currentMaterialIds),this.$emit("update:seasonIds",this.currentSeasonIds)},reset(){this.$emit("update:priceFrom",null),this.$emit("update:priceTo",null),this.$emit("update:categoryId",0),this.$emit("update:colorIds",[]),this.$emit("update:materialIds",[]),this.$emit("update:seasonIds",[])}},watch:{products:"calculatePrices",priceFrom(t){this.currentPriceFrom=t},priceTo(t){this.currentPriceTo=t},categoryId(t){this.currentCategoryId=t},colorIds(t){this.currentColorIds=t},materialIds(t){this.currentMaterialIds=t},seasonIds(t){this.currentSeasonIds=t}},computed:{isAnyFilterFilled(){return null!==this.currentPriceFrom||null!==this.currentPriceTo||0!==this.currentCategoryId||this.currentColorIds.length>0||this.currentMaterialIds.length>0||this.currentSeasonIds.length>0}},created(){this.loadCategories(),this.loadColors(),this.loadMaterials(),this.loadSeasons()}},at=st,rt=(0,_.Z)(at,V,W,!1,null,null,null),et=rt.exports,it=function(){var t=this,s=t._self._c;return s("div",{staticClass:"loader"},[s("p",[t._v(t._s(t.loadingText))]),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"}},[s("rect",{attrs:{fill:"#E02D71",stroke:"#E02D71","stroke-width":"2",width:"10",height:"10",x:"25",y:"85"}},[s("animate",{attrs:{attributeName:"opacity",calcMode:"spline",dur:"0.7",values:"1;0;1;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:"-.4"}})]),s("rect",{attrs:{fill:"#E02D71",stroke:"#E02D71","stroke-width":"2",width:"10",height:"10",x:"85",y:"85"}},[s("animate",{attrs:{attributeName:"opacity",calcMode:"spline",dur:"0.7",values:"1;0;1;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:"-.2"}})]),s("rect",{attrs:{fill:"#E02D71",stroke:"#E02D71","stroke-width":"2",width:"10",height:"10",x:"145",y:"85"}},[s("animate",{attrs:{attributeName:"opacity",calcMode:"spline",dur:"0.7",values:"1;0;1;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:"0"}})])])])},lt=[],ot={props:["loadingText"]},ct=ot,nt=(0,_.Z)(ct,it,lt,!1,null,null,null),_t=nt.exports;function ut(t){const s=t%100,a=t%10;return s>=11&&s<=14?" товаров":1===a?" товар":a>=2&&a<=4?" товара":" товаров"}var dt={components:{ProductFilter:et,ProductList:G,AppPagination:Q,CustomLoader:_t},data(){return{page:1,productsPerPage:12,filterPriceFrom:null,filterPriceTo:null,filterCategoryId:0,filterColorIds:[],filterMaterialIds:[],filterSeasonIds:[],productsData:null,loading:!1,error:null}},methods:{getCorrectEnding:ut,async loadProducts(){this.loading=!0,clearTimeout(this.loadProductsTimer),this.loadProductsTimer=setTimeout((async()=>{try{const t={page:this.page,limit:this.productsPerPage,minPrice:this.filterPriceFrom,maxPrice:this.filterPriceTo,categoryId:this.filterCategoryId,colorIds:this.filterColorIds,materialIds:this.filterMaterialIds,seasonIds:this.filterSeasonIds},s=await w.Z.get(`${tt}/api/products`,{params:t});this.productsData=s.data}catch(t){console.error("Произошла ошибка при загрузке продуктов:",t),this.error="Произошла ошибка при загрузке продуктов"}finally{this.loading=!1}}),0)}},computed:{products(){return this.productsData?this.productsData.items:[]},countProducts(){return this.productsData?this.productsData.pagination.total:0}},watch:{page:"loadProducts",filterCategoryId:"loadProducts",filterPriceFrom:"loadProducts",filterPriceTo:"loadProducts",filterColorIds:"loadProducts",filterMaterialIds:"loadProducts",filterSeasonIds:"loadProducts"},created(){this.loadProducts()}},pt=dt,mt=(0,_.Z)(pt,P,x,!1,null,null,null),ft=mt.exports,ht=function(){var t=this,s=t._self._c;return s("main",{staticClass:"content container"},[t._m(0),s("section",{staticClass:"item"},[t._m(1),s("div",{staticClass:"item__info"},[s("span",{staticClass:"item__code"},[t._v("Артикул: 150030")]),s("h2",{staticClass:"item__title"},[t._v("Смартфон Xiaomi Mi Mix 3 6/128GB")]),s("div",{staticClass:"item__form"},[s("form",{staticClass:"form",attrs:{action:"#",method:"POST"}},[s("div",{staticClass:"item__row item__row--center"},[s("div",{staticClass:"form__counter"},[s("button",{attrs:{type:"button","aria-label":"Убрать один товар"}},[s("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-minus"}})])]),s("input",{attrs:{type:"text",value:"1",name:"count"}}),s("button",{attrs:{type:"button","aria-label":"Добавить один товар"}},[s("svg",{attrs:{width:"12",height:"12",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),s("b",{staticClass:"item__price"},[t._v(" 18 990 ₽ ")])]),t._m(2),s("button",{staticClass:"item__button button button--primery",attrs:{type:"submit"}},[t._v(" В корзину ")])])])]),t._m(3)])])},Ct=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"content__top"},[s("ul",{staticClass:"breadcrumbs"},[s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link",attrs:{href:"#"}},[t._v(" Носки ")])]),s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link"},[t._v(" Носки с принтом мороженое ")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"item__pics pics"},[s("div",{staticClass:"pics__wrapper"},[s("img",{attrs:{width:"570",height:"570",src:"img/product-square-1.jpg",srcset:"img/product-square-1@2x.jpg 2x",alt:"Название товара"}})]),s("ul",{staticClass:"pics__list"},[s("li",{staticClass:"pics__item"},[s("a",{staticClass:"pics__link pics__link--current",attrs:{href:""}},[s("img",{attrs:{width:"98",height:"98",src:"img/product-square-2.jpg",srcset:"img/product-square-2@2x.jpg 2x",alt:"Название товара"}})])]),s("li",{staticClass:"pics__item"},[s("a",{staticClass:"pics__link",attrs:{href:""}},[s("img",{attrs:{width:"98",height:"98",src:"img/product-square-3.jpg",srcset:"img/product-square-3@2x.jpg 2x",alt:"Название товара"}})])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"item__row"},[s("fieldset",{staticClass:"form__block"},[s("legend",{staticClass:"form__legend"},[t._v("Цвет")]),s("ul",{staticClass:"colors colors--black"},[s("li",{staticClass:"colors__item"},[s("label",{staticClass:"colors__label"},[s("input",{staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color-item",value:"blue",checked:""}}),s("span",{staticClass:"colors__value",staticStyle:{"background-color":"#73b6ea"}})])]),s("li",{staticClass:"colors__item"},[s("label",{staticClass:"colors__label"},[s("input",{staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color-item",value:"yellow"}}),s("span",{staticClass:"colors__value",staticStyle:{"background-color":"#ffbe15"}})])]),s("li",{staticClass:"colors__item"},[s("label",{staticClass:"colors__label"},[s("input",{staticClass:"colors__radio sr-only",attrs:{type:"radio",name:"color-item",value:"gray"}}),s("span",{staticClass:"colors__value",staticStyle:{"background-color":"#939393"}})])])])]),s("fieldset",{staticClass:"form__block"},[s("legend",{staticClass:"form__legend"},[t._v("Размер")]),s("label",{staticClass:"form__label form__label--small form__label--select"},[s("select",{staticClass:"form__select",attrs:{type:"text",name:"category"}},[s("option",{attrs:{value:"value1"}},[t._v("37-39")]),s("option",{attrs:{value:"value2"}},[t._v("40-42")]),s("option",{attrs:{value:"value3"}},[t._v("42-50")])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"item__desc"},[s("ul",{staticClass:"tabs"},[s("li",{staticClass:"tabs__item"},[s("a",{staticClass:"tabs__link",attrs:{href:"#"}},[t._v(" Информация о товаре ")])]),s("li",{staticClass:"tabs__item"},[s("a",{staticClass:"tabs__link tabs__link--current"},[t._v(" Доставка и возврат ")])])]),s("div",{staticClass:"item__content"},[s("h3",[t._v("Доставка:")]),s("p",[t._v(" 1. Курьерская доставка по Москве и Московской области – 290 ₽"),s("br"),t._v(" 2.Самовывоз из магазина. Список и адреса магазинов Вы можете посмотреть здесь"),s("br")]),s("h3",[t._v("Возврат:")]),s("p",[t._v(" Любой возврат должен быть осуществлен в течение Возвраты в магазине БЕСПЛАТНО."),s("br"),t._v(" Вы можете вернуть товары в любой магазин. Магазин должен быть расположен в стране, в которой Вы осуществили покупку. БЕСПЛАТНЫЙ возврат в Пункт выдачи заказов."),s("br"),t._v(" Для того чтобы вернуть товар в одном из наших Пунктов выдачи заказов, позвоните по телефону 8 800 600 90 09"),s("br")])])])}],vt={},bt=vt,gt=(0,_.Z)(bt,ht,Ct,!1,null,null,null),yt=gt.exports,kt=function(){var t=this,s=t._self._c;return s("main",{staticClass:"content container"},[t._m(0),s("section",{staticClass:"cart"},[s("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[s("div",{staticClass:"cart__field"},[s("ul",{staticClass:"cart__list"},[s("li",{staticClass:"cart__item product"},[t._m(1),s("h3",{staticClass:"product__title"},[t._v("Базовая хлопковая футболка")]),t._m(2),s("span",{staticClass:"product__code"},[t._v(" Артикул: 1501230 ")]),s("div",{staticClass:"product__counter form__counter"},[s("button",{attrs:{type:"button","aria-label":"Убрать один товар"}},[s("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-minus"}})])]),s("input",{attrs:{type:"text",value:"1",name:"count"}}),s("button",{attrs:{type:"button","aria-label":"Добавить один товар"}},[s("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),s("b",{staticClass:"product__price"},[t._v(" 990 ₽ ")]),s("button",{staticClass:"product__del button-del",attrs:{type:"button","aria-label":"Удалить товар из корзины"}},[s("svg",{attrs:{width:"20",height:"20",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-close"}})])])]),s("li",{staticClass:"cart__item product"},[t._m(3),s("h3",{staticClass:"product__title"},[t._v("Гироскутер Razor Hovertrax 2.0")]),t._m(4),s("span",{staticClass:"product__code"},[t._v(" Артикул: 1501230 ")]),s("div",{staticClass:"product__counter form__counter"},[s("button",{attrs:{type:"button","aria-label":"Убрать один товар"}},[s("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-minus"}})])]),s("input",{attrs:{type:"text",value:"1",name:"count"}}),s("button",{attrs:{type:"button","aria-label":"Добавить один товар"}},[s("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),s("b",{staticClass:"product__price"},[t._v(" 1 990 ₽ ")]),s("button",{staticClass:"product__del button-del",attrs:{type:"button","aria-label":"Удалить товар из корзины"}},[s("svg",{attrs:{width:"20",height:"20",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-close"}})])])]),s("li",{staticClass:"cart__item product"},[t._m(5),s("h3",{staticClass:"product__title"},[t._v(" Электрический дрифт-карт Razor Lil’ Crazy ")]),t._m(6),s("span",{staticClass:"product__code"},[t._v(" Артикул: 1501230 ")]),s("div",{staticClass:"product__counter form__counter"},[s("button",{attrs:{type:"button","aria-label":"Убрать один товар"}},[s("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-minus"}})])]),s("input",{attrs:{type:"text",value:"1",name:"count"}}),s("button",{attrs:{type:"button","aria-label":"Добавить один товар"}},[s("svg",{attrs:{width:"10",height:"10",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-plus"}})])])]),s("b",{staticClass:"product__price"},[t._v(" 1 090 ₽ ")]),s("button",{staticClass:"product__del button-del",attrs:{type:"button","aria-label":"Удалить товар из корзины"}},[s("svg",{attrs:{width:"20",height:"20",fill:"currentColor"}},[s("use",{attrs:{"xlink:href":"#icon-close"}})])])])])]),t._m(7)])])])},It=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"content__top"},[s("ul",{staticClass:"breadcrumbs"},[s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link"},[t._v(" Корзина ")])])]),s("div",{staticClass:"content__row"},[s("h1",{staticClass:"content__title"},[t._v("Корзина")]),s("span",{staticClass:"content__info"},[t._v(" 3 товара ")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"product__pic"},[s("img",{attrs:{src:"img/product-square-4.jpg",width:"120",height:"120",srcset:"img/product-square-4@2x.jpg 2x",alt:"Название товара"}})])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"product__info product__info--color"},[t._v(" Цвет: "),s("span",[s("i",{staticStyle:{"background-color":"#ff9b78"}}),t._v(" Персиковый ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"product__pic"},[s("img",{attrs:{src:"img/product-square-5.jpg",width:"120",height:"120",srcset:"img/product-square-5@2x.jpg 2x",alt:"Название товара"}})])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"product__info product__info--color"},[t._v(" Цвет: "),s("span",[s("i",{staticStyle:{"background-color":"#73b6ea"}}),t._v(" Нежно-голубой ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"product__pic"},[s("img",{attrs:{src:"img/product-square-6.jpg",width:"120",height:"120",srcset:"img/product-square-6@2x.jpg 2x",alt:"Название товара"}})])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"product__info product__info--color"},[t._v(" Цвет: "),s("span",[s("i",{staticStyle:{"background-color":"#ff6b00"}}),t._v(" Оранжевый ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"cart__block"},[s("p",{staticClass:"cart__desc"},[t._v(" Мы посчитаем стоимость доставки на следующем этапе ")]),s("p",{staticClass:"cart__price"},[t._v("Итого: "),s("span",[t._v("4 070 ₽")])]),s("button",{staticClass:"cart__button button button--primery",attrs:{type:"submit"}},[t._v(" Оформить заказ ")])])}],Pt={},xt=Pt,wt=(0,_.Z)(xt,kt,It,!1,null,null,null),St=wt.exports,Tt=function(){var t=this;t._self._c;return t._m(0)},Mt=[function(){var t=this,s=t._self._c;return s("main",{staticClass:"content container"},[s("div",{staticClass:"content__top"},[s("ul",{staticClass:"breadcrumbs"},[s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link",attrs:{href:"cart.html"}},[t._v(" Корзина ")])]),s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link"},[t._v(" Оформление заказа ")])])]),s("div",{staticClass:"content__row"},[s("h1",{staticClass:"content__title"},[t._v("Оформление заказа")])])]),s("section",{staticClass:"cart"},[s("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[s("div",{staticClass:"cart__field"},[s("div",{staticClass:"cart__data"},[s("label",{staticClass:"form__label"},[s("input",{staticClass:"form__input",attrs:{type:"text",name:"name",placeholder:"Введите ваше полное имя"}}),s("span",{staticClass:"form__value"},[t._v("ФИО")])]),s("label",{staticClass:"form__label"},[s("input",{staticClass:"form__input",attrs:{type:"text",name:"address",placeholder:"Введите ваш адрес"}}),s("span",{staticClass:"form__value"},[t._v("Адрес доставки")])]),s("label",{staticClass:"form__label"},[s("input",{staticClass:"form__input",attrs:{type:"tel",name:"phone",placeholder:"Введите ваш телефон"}}),s("span",{staticClass:"form__value"},[t._v("Телефон")]),s("span",{staticClass:"form__error"},[t._v("Неверный формат телефона")])]),s("label",{staticClass:"form__label"},[s("input",{staticClass:"form__input",attrs:{type:"email",name:"email",placeholder:"Введи ваш Email"}}),s("span",{staticClass:"form__value"},[t._v("Email")])]),s("label",{staticClass:"form__label"},[s("textarea",{staticClass:"form__input form__input--area",attrs:{name:"comments",placeholder:"Ваши пожелания"}}),s("span",{staticClass:"form__value"},[t._v("Комментарий к заказу")])])]),s("div",{staticClass:"cart__options"},[s("h3",{staticClass:"cart__title"},[t._v("Доставка")]),s("ul",{staticClass:"cart__options options"},[s("li",{staticClass:"options__item"},[s("label",{staticClass:"options__label"},[s("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"delivery",value:"0"}}),s("span",{staticClass:"options__value"},[t._v(" Самовывоз "),s("b",[t._v("бесплатно")])])])]),s("li",{staticClass:"options__item"},[s("label",{staticClass:"options__label"},[s("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"delivery",value:"500"}}),s("span",{staticClass:"options__value"},[t._v(" Курьером "),s("b",[t._v("290 ₽")])])])])]),s("h3",{staticClass:"cart__title"},[t._v("Оплата")]),s("ul",{staticClass:"cart__options options"},[s("li",{staticClass:"options__item"},[s("label",{staticClass:"options__label"},[s("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"pay",value:"card"}}),s("span",{staticClass:"options__value"},[t._v(" Картой при получении ")])])]),s("li",{staticClass:"options__item"},[s("label",{staticClass:"options__label"},[s("input",{staticClass:"options__radio sr-only",attrs:{type:"radio",name:"pay",value:"cash"}}),s("span",{staticClass:"options__value"},[t._v(" Наличными при получении ")])])])])])]),s("div",{staticClass:"cart__block"},[s("ul",{staticClass:"cart__orders"},[s("li",{staticClass:"cart__order"},[s("h3",[t._v("Смартфон Xiaomi Redmi Note 7 Pro 6/128GB")]),s("b",[t._v("990 ₽")]),s("span",[t._v("Артикул: 150030")])]),s("li",{staticClass:"cart__order"},[s("h3",[t._v("Гироскутер Razor Hovertrax 2.0ii")]),s("b",[t._v("1 990 ₽")]),s("span",[t._v("Артикул: 150030")])]),s("li",{staticClass:"cart__order"},[s("h3",[t._v("Электрический дрифт-карт Razor Lil’ Crazy")]),s("b",[t._v("4 090 ₽")]),s("span",[t._v("Артикул: 150030")])])]),s("div",{staticClass:"cart__total"},[s("p",[t._v("Доставка: "),s("b",[t._v("бесплатно")])]),s("p",[t._v("Итого: "),s("b",[t._v("3")]),t._v(" товара на сумму "),s("b",[t._v("4 070 ₽")])])]),s("button",{staticClass:"cart__button button button--primery",attrs:{type:"submit"}},[t._v(" Оформить заказ ")])]),s("div",{staticClass:"cart__error form__error-block"},[s("h4",[t._v("Заявка не отправлена!")]),s("p",[t._v(" Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу. ")])])])])])}],Ft={},Zt=Ft,$t=(0,_.Z)(Zt,Tt,Mt,!1,null,null,null),At=$t.exports,jt=function(){var t=this;t._self._c;return t._m(0)},Ot=[function(){var t=this,s=t._self._c;return s("main",{staticClass:"content container"},[s("div",{staticClass:"content__top"},[s("ul",{staticClass:"breadcrumbs"},[s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link",attrs:{href:"index.html"}},[t._v(" Каталог ")])]),s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link",attrs:{href:"cart.html"}},[t._v(" Корзина ")])]),s("li",{staticClass:"breadcrumbs__item"},[s("a",{staticClass:"breadcrumbs__link"},[t._v(" Оформление заказа ")])])]),s("h1",{staticClass:"content__title"},[t._v("Заказ оформлен "),s("span",[t._v("№ 23621")])])]),s("section",{staticClass:"cart"},[s("form",{staticClass:"cart__form form",attrs:{action:"#",method:"POST"}},[s("div",{staticClass:"cart__field"},[s("p",{staticClass:"cart__message"},[t._v(" Благодарим за выбор нашего магазина. На Вашу почту придет письмо с деталями заказа. Наши менеджеры свяжутся с Вами в течение часа для уточнения деталей доставки. ")]),s("ul",{staticClass:"dictionary"},[s("li",{staticClass:"dictionary__item"},[s("span",{staticClass:"dictionary__key"},[t._v(" Получатель ")]),s("span",{staticClass:"dictionary__value"},[t._v(" Иванова Василиса Алексеевна ")])]),s("li",{staticClass:"dictionary__item"},[s("span",{staticClass:"dictionary__key"},[t._v(" Адрес доставки ")]),s("span",{staticClass:"dictionary__value"},[t._v(" Москва, ул. Ленина, 21, кв. 33 ")])]),s("li",{staticClass:"dictionary__item"},[s("span",{staticClass:"dictionary__key"},[t._v(" Телефон ")]),s("span",{staticClass:"dictionary__value"},[t._v(" 8 800 989 74 84 ")])]),s("li",{staticClass:"dictionary__item"},[s("span",{staticClass:"dictionary__key"},[t._v(" Email ")]),s("span",{staticClass:"dictionary__value"},[t._v(" lalala@mail.ru ")])]),s("li",{staticClass:"dictionary__item"},[s("span",{staticClass:"dictionary__key"},[t._v(" Способ оплаты ")]),s("span",{staticClass:"dictionary__value"},[t._v(" картой при получении ")])])])]),s("div",{staticClass:"cart__block"},[s("ul",{staticClass:"cart__orders"},[s("li",{staticClass:"cart__order"},[s("h3",[t._v("Смартфон Xiaomi Redmi Note 7 Pro 6/128GB")]),s("b",[t._v("990 ₽")]),s("span",[t._v("Артикул: 150030")])]),s("li",{staticClass:"cart__order"},[s("h3",[t._v("Гироскутер Razor Hovertrax 2.0ii")]),s("b",[t._v("1 990 ₽")]),s("span",[t._v("Артикул: 150030")])]),s("li",{staticClass:"cart__order"},[s("h3",[t._v("Электрический дрифт-карт Razor Lil’ Crazy")]),s("b",[t._v("4 090 ₽")]),s("span",[t._v("Артикул: 150030")])])]),s("div",{staticClass:"cart__total"},[s("p",[t._v("Доставка: "),s("b",[t._v("бесплатно")])]),s("p",[t._v("Итого: "),s("b",[t._v("3")]),t._v(" товара на сумму "),s("b",[t._v("4 070 ₽")])])])])])])])}],Dt={},qt=Dt,Et=(0,_.Z)(qt,jt,Ot,!1,null,null,null),Nt=Et.exports,zt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"not-found"},[s("p",{staticClass:"not-found__title"},[t._v("Ошибка 404")]),s("p",{staticClass:"not-found__text"},[t._v(" Упс! Запрошенная вами страница не может быть найдена... ")]),s("router-link",{staticClass:"button button--primery",attrs:{to:{name:"main"}}},[t._v("Вернуться на главную")])],1)},Rt=[],Lt={},Ht=Lt,Bt=(0,_.Z)(Ht,zt,Rt,!1,null,null,null),Gt=Bt.exports;r.ZP.use(I.ZP);const Xt=[{name:"main",component:ft,path:"/"},{name:"product",component:yt,path:"/product/:id"},{name:"cart",component:St,path:"/cart"},{name:"order",component:At,path:"/orders"},{name:"orderInfo",component:Nt,path:"/orders/:id"},{name:"notFound",component:Gt,path:"*"}],Yt=new I.ZP({routes:Xt});var Ut=Yt,Jt=a(408);r.ZP.use(Jt.ZP);var Kt=new Jt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:Ut,store:Kt,render:t=>t(k)}).$mount("#app")}},s={};function a(r){var e=s[r];if(void 0!==e)return e.exports;var i=s[r]={exports:{}};return t[r].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(s,r,e,i){if(!r){var l=1/0;for(_=0;_<t.length;_++){r=t[_][0],e=t[_][1],i=t[_][2];for(var o=!0,c=0;c<r.length;c++)(!1&i||l>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(o=!1,i<l&&(l=i));if(o){t.splice(_--,1);var n=e();void 0!==n&&(s=n)}}return s}i=i||0;for(var _=t.length;_>0&&t[_-1][2]>i;_--)t[_]=t[_-1];t[_]=[r,e,i]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var r in s)a.o(s,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/moire/"}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,r){var e,i,l=r[0],o=r[1],c=r[2],n=0;if(l.some((function(s){return 0!==t[s]}))){for(e in o)a.o(o,e)&&(a.m[e]=o[e]);if(c)var _=c(a)}for(s&&s(r);n<l.length;n++)i=l[n],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(_)},r=self["webpackChunkmoire"]=self["webpackChunkmoire"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(2354)}));r=a.O(r)})();
//# sourceMappingURL=app.76dd6bdf.js.map