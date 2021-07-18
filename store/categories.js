export const state = () => ({
  categories: []
})

export  const mutations = {
  setCategories(state,categories){
    state.categories = categories;
  }
}

export const actions = {
  async fetch({commit}){
    const categories = await this.$axios.get("https://frontend-test.idaproject.com/api/product-category");
    commit("setCategories", categories.data);
  }
}

export const getters = {
  categories: state => state.categories
}
