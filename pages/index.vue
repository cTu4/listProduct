<template>
  <div>
      <products :category_id="1"></products>
  </div>
</template>

<script>
export default {
  layout: 'categories',
  async fetch({store}){
    if(store.getters['categories/categories'].length === 0){
      await store.dispatch('categories/fetch');
      await store.dispatch('products/fetch',{
          category_id:1
      });
    }

  }
}
</script>

<style module>
    @font-face {
      font-family: PT Sans;
      src: url(/static/fonts/PT Sans/PTSans-Regular.ttf);
    }
    body{
      font-family: PT Sans;
      font-style: normal;
      background: #FFFFFF;
      width: 100%;
    }
</style>
