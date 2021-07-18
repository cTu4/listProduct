<template>
  <div
    :class="$style.fillBasket"
    v-click-outside="externalClick"
  >
    <div :class="$style.order"  v-if="!order">
      <basketProducts :products="basket"></basketProducts>
      <orderForm @order="orderSuccess"></orderForm>
    </div>
    <orderSuccess v-else></orderSuccess>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: "basket",
  props:[
      "basket"
  ],
  data(){
    return{
      order:false
    }
  },
  computed:{

  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods:{
    orderSuccess(){
      this.order = true;
      this.$emit('orderSuccess')
    },
    externalClick(){
        this.order = false;
        this.$emit('order')
    }
  },
  created(){

  }
}
</script>

<style lang="scss" module>
  .fillBasket{
    height: 100%;
    display: flex;
    .order{
      width: 100%;
    }
  }
</style>
