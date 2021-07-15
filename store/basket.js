export const state = () => ({
  basket: []
})

export  const mutations = {
  addToBasket(state,product){
    state.basket.push(product);
  },
  deleteFromBasket(state,product){
    let index = state.basket.findIndex(basketItem => basketItem.id == product.id)
    state.basket.splice(index, 1)
  }
}

export const actions = {
  add({commit}, product){
    commit("addToBasket", product);
  },
  delete({commit}, product){
    commit("deleteFromBasket", product);
  }

}

export const getters = {
  basket: state => state.basket
}
