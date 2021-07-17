<template>
  <div :class="$style.products">
    <div :class="$style.product" v-for="product in products" :key="product.id">

      <img :class="$style.prodcutImg" :src="'https://frontend-test.idaproject.com' + product.photo" alt="">
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
      <div :class="[$style.miniBasket, {'active': product.inBasket} ]" @click="addToBasket(product)">
        <img class="basketImg" src="@/images/cart.png" alt="">
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
  },
  methods:{
    addToBasket(product){
        let basket = this.$store.getters['basket/basket'];
        let index = basket.findIndex(basketItem => basketItem.id == product.id)
        console.log(index)
        if(index === -1){
          product.inBasket = true;
          this.$store.dispatch('basket/add',product);
        }
    }
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
  .prodcutImg{

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
    top: 10px;
    left: 10px;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    color: #F2C94C;

  }
  .product .miniBasket{
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0.2;
    cursor: pointer;
  }
  .product .miniBasket img{
    width: 50%;
  }
</style>
