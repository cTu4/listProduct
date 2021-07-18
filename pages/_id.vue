<template>
  <div>
    <products :category_id="$route.params.id"></products>
  </div>
</template>

<script>
export default {
  layout: 'categories',
  async fetch({store,route}){
    // console.log(route.params.id)
    if(store.getters['categories/categories'].length === 0){
      await store.dispatch('categories/fetch');
      // await store.dispatch('products/fetch',{
      //   category_id:1
      // });
    }

  }
}
</script>

<style module>

</style>
