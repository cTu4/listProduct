<template>
  <div :class="$style.basketProducts">
    <div :class="$style.title">
      Товары в корзине
    </div>
    <div :class="$style.list">
      <div :class="$style.product" v-for="product in products" :key="product.id">
        <div :class="$style.image">
          <img :src="'https://frontend-test.idaproject.com' + product.photo" alt="">
        </div>
        <div :class="$style.productInfo">
          <div :class="$style.title">
            {{product.name}}
          </div>
          <div :class="$style.price">
            {{product.price}} ₽
          </div>
          <div :class="$style.rating">
            {{product.rating}}
          </div>
        </div>
        <div :class="$style.trash" @click="deleteFromBasket(product)">
          <img src="@/images/trash.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "basketProducts",
  props:[
    "products"
  ],
  data(){
    return{

    }
  },
  directives: {

  },
  methods:{
    deleteFromBasket(product){
      this.$store.dispatch('basket/delete',product);
      console.log(this.$store.getters['basket/basket'])
    }
  },
  created(){

  }
}
</script>

<style module>
  .basketProducts{

  }
  .basketProducts .title{
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #59606D;
  }
  .basketProducts .list{
    max-height: 340px;
    overflow-y: scroll;
    margin: 0 -10px;
    padding: 0 10px;
  }
  .basketProducts .list .product{
    padding: 10px;
    margin: 10px 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
  .list .product .image{
    width: 30%;
  }
  .list .product .image img{
    width: 100%;
    height: auto;
  }
  .list .product .productInfo{
    width: 50%;
    font-weight: normal;
    padding: 0 20px;
  }
  .list .product .productInfo .title{
    font-size: 14px;
    line-height: 18px;
    color: #59606D;
    margin-bottom: 3px;
  }
  .list .product .productInfo .price{
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #1F1F1F;
    margin-bottom: 6px;

  }
  .list .product .productInfo .rating{
    font-weight: bold;
    font-size: 10px;
    line-height: 13px;
    color: #F2C94C;
  }
  .list .product .trash{
    width: 20%;
    opacity: 0.2;
    cursor: pointer;
  }
  .list .product .trash:hover{
    opacity: 1;
  }
  /* width */

</style>
