<template>
  <div

    v-click-outside="externalClick"
    :class="[$style.basketWrap, show?$style.active: '']">

    <div :class="$style.basket">
      <div :class="$style.titleBasket">
        <div :class="$style.title">
          Корзина
        </div>
        <div :class="$style.close" @click="externalClick" >
          <img src="@/images/close.png" alt="">
        </div>
      </div>
      <client-only>
        <div :class="$style.emptyBasket" v-if="basket.length === 0 && !success">
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

        <basket
          v-else
          :basket="basket"
          @orderSuccess="orderSuccess"
          @order="orderWait"
        >
        </basket>
      </client-only>

    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: "basketWrap",
  props:[
    "show"
  ],
  data(){
    return{
      success: false
    }
  },
  computed:{
    basket(){
      return  this.$store.getters['basket/basket']
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods:{
    externalClick(e){
      if(this.show && e.target.className !== 'basketImg'){
        this.$emit('clickOutSide');
      }
    },
    orderSuccess(){
      this.success = true;
    },
    orderWait(){
      this.success = false;
    }
  },
  created(){

  }
}
</script>

<style lang="scss" module>
  .basketWrap{
    position: fixed;
    top: 0;
    right: -800px;
    width: 30%;
    background: #FFFFFF;
    box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0px 0px 8px;
    height: 100%;
    transition: transform 0.5s;

    &.active{
      transform: translateX(-800px);
    }
  }
  .basket{
    padding: 2rem;
    height: 100%;
  }
  .titleBasket{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .title{
      font-weight: bold;
      font-size: 32px;
      line-height: 41px;
      margin-bottom: 20px;
    }
  }
  .emptyBasket{
    .subTitle{
      font-weight: normal;
      font-size: 22px;
      line-height: 28px;
      color: #000000;
      margin-bottom: 20px;
    }
  }

  .close{
    cursor: pointer;
  }
  .btnBasket{
    width: 100%;
    background: $btn-color;
    border-radius: 8px;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    a{
      color: $btn-text-color;
      text-decoration: none;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
    }
  }
</style>
