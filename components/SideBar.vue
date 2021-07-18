

<template>
  <nav :class="$style.SideBar">

    <ul :class="$style.listCategories">
      <li :class="$style.listItem" v-for="(category,index) in categories" :key="category.id">
        <nuxt-link :class="!$route.params.id && index===0? $style.active:''" :active-class="$style.active" :to="{ path: '/'+category.id}">
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

<style lang="scss" module>
  .SideBar{
    min-width: 190px;
    background: $bar-bg-color;
    display: flex;
    flex-direction: column;
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
    a{
      color: #59606D;
      text-decoration: none;
      &.active{
        color: #1F1F1F;
        text-decoration: underline;
      }
    }
  }

</style>
