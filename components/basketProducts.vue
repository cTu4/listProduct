<template>
  <div :class="$style.basketProducts">
    <div :class="$style.title">
      Товары в корзине
    </div>
    <div :class="$style.list">
      <div :class="$style.product" v-for="product in products" :key="product.id">
        <div :class="$style.image">
          <img :src="url + product.photo" alt="">
        </div>
        <div :class="$style.productInfo">
          <div :class="$style.title">
            {{product.name}}
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
      url: process.env.urlApi
    }
  },
  directives: {

  },
  methods:{
    deleteFromBasket(product){
      this.$store.dispatch('basket/delete',product);
    }
  },
  created(){

  }
}
</script>

<style lang="scss" module>
  .basketProducts{
    .title{
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: #59606D;
    }
    .list{
      max-height: 400px;
      overflow-y: auto;
      margin: 0 -10px;
      padding: 0 10px;
      .product{
        padding: 10px;
        margin: 10px 0;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        height: 120px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        .image{
          width: 30%;
          img{
            width: auto;
            max-height: 90px;
          }
        }
        .productInfo{
          width: 50%;
          font-weight: normal;
          padding: 0 20px;
          .title{
            font-size: 14px;
            line-height: 18px;
            color: #59606D;
            margin-bottom: 3px;
          }
          .price{
            font-weight: bold;
            font-size: 14px;
            line-height: 18px;
            color: #1F1F1F;
            margin-bottom: 6px;
          }
          .rating{
            font-weight: bold;
            font-size: 10px;
            line-height: 13px;
            color: #F2C94C;
            display: flex;
            align-items: center;
          }
        }
        .trash{
          width: 20%;
          opacity: 0.2;
          cursor: pointer;
          &:hover{
            opacity: 1;
          }
        }
      }
    }
  }

</style>
