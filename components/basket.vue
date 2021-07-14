<template>
  <div
    v-show="show"
    v-click-outside="externalClick"
    :class="$style.basket">
    aaaa
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: "basket",
  props:[
    "show"
  ],
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods:{
    externalClick(e){
      if(this.show && e.target.className !== 'basketImg'){
        this.$emit('clickOutSide');
      }
    }
  }
}
</script>

<style module>
  .basket{
    position: fixed;
    top: 0;
    right: 0;
    width: 33%;
    background: #59606D;
    height: 100%;
  }
</style>
