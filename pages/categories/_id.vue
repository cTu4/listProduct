<template>
  <div>
    {{category.name}}
  </div>
</template>

<script>
export default {
  layout: 'categories',
  data(){
    return{
      category:[]
    }
  },
  mounted() {
    this.category = this.$route.query.category
  }
}
</script>

<style scoped>

</style>
