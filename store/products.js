export const state = () => ({
  products: []
})

export  const mutations = {
  setProducts(state,products){
    state.products = products;
  },
  update(state,data){
    state.products[data.index] = data.product
  }
}

export const actions = {
  async fetch({commit}, data){
    const products = await this.$axios.get('https://frontend-test.idaproject.com/api/product?category='+data.category_id);
    commit("setProducts", products.data);
  },
  update({commit},data){
    commit("update", data);
  }
}

export const getters = {
  products: state => state.products
}
