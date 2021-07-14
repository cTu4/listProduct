<template>
  <div :class="$style.products">
    <div :class="$style.product" v-for="product in products" :key="product.id">

      <img :src="'https://frontend-test.idaproject.com' + product.photo" alt="">
      <div :class="$style.name">
        {{product.name}}
      </div>
      <div :class="$style.price">
        {{product.price}} ₽
      </div>
      <div :class="$style.rating">
        <div>

        </div>
        <span>
          {{product.rating}}
        </span>
      </div>
      <div :class="$style.miniBasket">

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  props:[
    "category_id"
  ],
  computed:{
    products(){
      return this.$store.getters['products/products'];
    }
  },
  mounted() {
    console.log(this.products)
  }
}
</script>

<style module>
  .products{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .product{
    max-width: 23%;
    padding: 10px;
    position: relative;
  }
  .product img{
      width: 100%;
  }
  .product .name{
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #59606D;
    text-align: left;
  }
  .product .price{
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #1F1F1F;
  }
  .product .rating{
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    color: #F2C94C;

  }
  .product .miniBasket{
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
