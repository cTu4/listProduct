<template>
  <div :class="$style.products">
    <div :class="$style.product" v-for="(product, index) in products" :key="product.id">

      <img :class="$style.prodcutImg" :src="'https://frontend-test.idaproject.com' + product.photo" alt="">
      <div :class="$style.name">
        {{product.name}}
      </div>
      <div :class="$style.name">
        {{product.name1}}
      </div>
      <div :class="$style.price">
        {{product.price}} ₽
      </div>
      <div :class="$style.rating">
        <div>
          <img class="basketStar" src="@/images/star.png" alt="">
        </div>
        <div>
          {{product.rating}}
        </div>
      </div>
      <div :class="[$style.miniBasket, basket.findIndex(basketItem => basketItem.id == product.id) !== -1?$style.active:'' ]" @click="addToBasket(product,index)">
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
    },
    basket(){
      return  this.$store.getters['basket/basket'];
    }
  },
  created() {
    this.$store.dispatch('products/fetch', {category_id: this.category_id});
  },
  methods:{
    addToBasket(product, index){
        let ind = this.basket.findIndex(basketItem => basketItem.id == product.id)
        if(ind === -1){
          this.$store.dispatch('products/update',{index, product});
          this.$store.dispatch('basket/add',product);
        }
        else{
          this.$store.dispatch('basket/delete',product);
        }
    }
  }
}
</script>

<style lang="scss" module>
  .products{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .product{
    max-width: 23%;
    padding: 10px 20px;
    margin: 10px 0;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
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
    margin-bottom: 10px;
  }
  .product .rating{
    position: absolute;
    top: 10px;
    left: 10px;
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    color: #F2C94C;
    display: flex;
    align-items: center;

  }
  .product .miniBasket{
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0.2;
    cursor: pointer;
    text-align: right;
    &.active{
      opacity: 1;

    }
  }

  .product .miniBasket img{
    width: 50%;
  }
</style>
