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


    <basketWrap @clickOutSide="EventBasket" :show="BasketIsOpen">
    </basketWrap>

  </div>
</template>

<script>
export default {
  data(){
    return{
      BasketIsOpen: false
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
  ::-webkit-scrollbar {
    width: 3px;
    border-radius: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
