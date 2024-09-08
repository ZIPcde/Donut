// store/cart.js
const state = {
  order: {}, // Хранит заказы
};

const mutations = {
  ADD_TO_ORDER(state, productId) {
    if (!state.order[productId]) {
      state.order[productId] = 1;
    }
  },
  INCREASE_QUANTITY(state, productId) {
    if (state.order[productId]) {
      state.order[productId]++;
    }
  },
  DECREASE_QUANTITY(state, productId) {
    if (state.order[productId] > 1) {
      state.order[productId]--;
    } else {
      delete state.order[productId];
    }
  },
  REMOVE_FROM_ORDER(state, productId) {
    delete state.order[productId];
  },
  UPDATE_ORDER(state, { productId, quantity }) {
    state.order[productId] = quantity;
  },
};

const actions = {
  addToOrder({ commit }, productId) {
    commit('ADD_TO_ORDER', productId);
  },
  increaseQuantity({ commit }, productId) {
    commit('INCREASE_QUANTITY', productId);
  },
  decreaseQuantity({ commit }, productId) {
    commit('DECREASE_QUANTITY', productId);
  },
  removeFromOrder({ commit }, productId) {
    commit('REMOVE_FROM_ORDER', productId);
  },
  updateOrder({ commit }, { productId, quantity }) {
    commit('UPDATE_ORDER', { productId, quantity });
  },
};

const getters = {
  getOrder: (state) => state.order,
  getQuantity: (state) => (productId) => state.order[productId] || 0,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
