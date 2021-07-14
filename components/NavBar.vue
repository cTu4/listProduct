<template>
  <div :class="$style.NavBar">
    <div :class="$style.list">
      TestList
    </div>
    <div @click="basket" :class="$style.basket">
      <img class="basketImg" src="@/images/cart.png" alt="">
      <div :class="$style.number">3</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return{
      BasketIsOpen: false
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
