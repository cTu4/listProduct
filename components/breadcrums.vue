<template>
  <div :class="$style.breadcrums">
    <div :class="$style.title">
      {{router}}
    </div>
    <div :class="$style.filter">
      Сортировать по:
      <select name="filter" id="">
        <option value="0">По цене</option>
        <option value="1">По популярности</option>
      </select>

    </div>
  </div>
</template>

<script>
export default {
  name: "breadcrums",
  props:[
    "router"
  ],
}
</script>

<style module>
  .breadcrums{
    margin: 30px 0 0 0;
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
  }
  .title{
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    color: #1F1F1F;
  }
</style>
