<template>
  <div :class="$style.orderForm">
      <div :class="$style.title">
        Оформить заказ
      </div>
    <form action="/">
      <input :class="$style.input" type="text" placeholder="Ваше имя">
      <input type="text" placeholder="Телефон">
      <input type="text" placeholder="Адрес">
      <input type="submit" :class="$style.btnBasket">
    </form>
  </div>
</template>

<script>
export default {
  name: "orderForm",
  props:[

  ],
  data(){
      return{

      }
  },
  directives: {

  },
  methods:{

  },
  created(){

  }
}
</script>

<style module>
  .orderForm{
      margin-top: 30px;
  }
  .orderForm .title{
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #59606D;

  }
  .orderForm form{
    display: flex;
    flex-direction: column;
  }
  .orderForm form input{
    background: #F8F8F8;
    border-radius: 8px;
    padding: 10px;
    border: 0;
    outline: none;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #1F1F1F;
    margin-top: 15px;
  }
  .orderForm form input.btnBasket{
    width: 100%;
    background: #1F1F1F;
    color: #FFFFFF;
    border-radius: 8px;
    text-align: center;
    padding: 15px;
    cursor: pointer;

  }
</style>
