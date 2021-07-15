<template>
  <div
    v-show="show"
    v-click-outside="externalClick"
    :class="$style.basketWrap">

    <div :class="$style.basket">
      <div :class="$style.titleBasket">
        <div :class="$style.title">
          Корзина
        </div>
        <div :class="$style.close" @click="externalClick" >
          <img src="@/images/close.png" alt="">
        </div>
      </div>
      <div :class="$style.emptyBasket" v-if="basket.length === 0">
        <div :class="$style.subTitle">
          Пока что вы ничего не добавили
          в корзину.
        </div>
        <div :class="$style.btnBasket">
          <nuxt-link  to="/" @click="externalClick">
            Перейти к выбору
          </nuxt-link>
        </div>


      </div>
      <div  v-else :class="$style.fillBasket" >
          <basketProducts :products="basket"></basketProducts>
          <orderForm></orderForm>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: "basket",
  props:[
    "show"
  ],
  data(){
    return{
      basket: []
    }
  },
  computed:{

  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods:{
    externalClick(e){
      if(this.show && e.target.className !== 'basketImg'){
        this.$emit('clickOutSide');
      }
    }
  },
  created(){
    this.basket = this.$store.getters['basket/basket']
  }
}
</script>

<style module>
  .basketWrap{
    position: fixed;
    top: 0;
    right: 0;
    width: 30%;
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    height: 100%;
  }
  .basket{
    padding: 50px;
  }
  .titleBasket{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .titleBasket .title{
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    margin-bottom: 20px;
  }
  .emptyBasket{

  }
  .emptyBasket .subTitle{
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 20px;
  }
  .fillBasket{

  }
  .close{
    cursor: pointer;
  }
  .btnBasket{
    width: 100%;
    background: #1F1F1F;
    border-radius: 8px;
    text-align: center;
    padding: 15px;
    cursor: pointer;
  }
  .btnBasket a{
    color: #FFFFFF;
    text-decoration: none;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
  }
</style>
