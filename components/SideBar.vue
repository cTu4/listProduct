

<template>
  <nav :class="$style.SideBar">

    <ul :class="$style.listCategories">
      <li :class="$style.listItem" v-for="category in categories" :key="category.id">
        <nuxt-link active-class="active" :to="{ path: '/categories/'+category.id, query: { category: category }}">
          {{category.name}}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  computed:{
    categories(){
      return this.$store.getters['categories/categories'];
    }
  }
}
</script>

<style module>
  .SideBar{
    min-width: 190px;
  }

  .listCategories{
    list-style-type: none;
    padding: 0;
  }
  .listItem{
    margin: 10px 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;

  }
  .listItem a{
    color: #59606D;
    text-decoration: none;
  }
  .listItem a.active{
    color: #1F1F1F;
    text-decoration: underline;
  }
</style>
