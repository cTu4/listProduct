export const state = () => ({
  basket: []
})

export  const mutations = {
  addToBasket(state,product){
    state.basket.push(product);
  }
}

export const actions = {
  add({commit}, product){
    commit("addToBasket", product);
  }
}

export const getters = {
  basket: state => state.basket
}
