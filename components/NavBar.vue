<template>
  <div :class="$style.NavBar">
    <nuxt-link to="/" :class="$style.list">
      TestList
    </nuxt-link>
    <div @click="basket" :class="$style.basket">
      <img class="basketImg" src="@/images/cart.png" alt="">
      <div v-show="items !== 0" :class="$style.number">{{items}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return{
      BasketIsOpen: false,
    }
  },
  computed:{
    items(){
      let basket = this.$store.getters['basket/basket'];
      console.log(basket.length !== 0)
      return basket.length;
    }
  },
  methods:{
    basket(){
      this.$emit('basket');
    }
  }
}
</script>

<style module>

  .NavBar{
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 8px 8px;
    align-items: center;
    padding: 20px 80px;
  }
  .list{
    color: #59606D;
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
  }
  .basket{
    position: relative;
    cursor: pointer;
  }
  .number{
    position: absolute;
    top: 0;
    right: 0;
    background: #959DAD;
    border-radius: 10px;
    padding: 1px 4px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 8px;
    line-height: 10px;
  }
</style>
