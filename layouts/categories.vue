<template>
  <div :class="$style.categories_layout">
    <div :style="{opacity: BasketIsOpen? 0.2 : 1}">
      <NavBar @basket="EventBasket"></NavBar>
      <breadcrums router="Каталог"></breadcrums>
      <main :class="$style.main">
        <SideBar></SideBar>
        <div>
          <nuxt>

          </nuxt>
        </div>
      </main>
    </div>


    <basket @clickOutSide="EventBasket" :show="BasketIsOpen">
    </basket>
  </div>
</template>

<script>
export default {
  data(){
    return{
      BasketIsOpen: true
    }
  },
  methods:{
    EventBasket(){
      this.BasketIsOpen = !this.BasketIsOpen;
      console.log('EventBasket',this.BasketIsOpen);

    }
  }
}
</script>

<style module>
  .main{
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
  }
</style>
