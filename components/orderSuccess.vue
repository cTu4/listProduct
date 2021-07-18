<template>
  <div
    :class="$style.orderSuccess"
    class="f-flex flex-column"

  >
    <img :class="$style.okayImg" src="@/images/okay.png" alt="">
    <div :class="$style.title">
      Заявка успешно отправлена
    </div>
    <div :class="$style.subtitle">
      Вскоре наш менеджер свяжется с Вами
    </div>
  </div>
</template>

<script>

export default {
  name: "orderSuccess",

  methods:{

  }
}
</script>

<style module>
  .orderSuccess{
    margin: auto;
    text-align: center;
  }
  .title{
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
  }
  .subtitle{
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: #59606D;
  }
  .okayImg{
    margin-bottom: 20px;
  }
</style>
