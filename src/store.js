import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [
      {
        id: 1,
        firstname: "Chris",
        lastname: "Jones",
        mobile: {
          areacode: "+447889",
          number: "568898"
        }
      },
      {
        id: 2,
        firstname: "Perry",
        lastname: "McPerry",
        mobile: {
          areacode: "+448786",
          number: "2435642"
        }
      }
    ]
  },
  mutations: {
    changeNumber(state, { id, newNumber }) {
      // mutate state
      var contact = state.contacts.find(contact => {
        return contact.id == id;
      });
      contact.mobile.number = newNumber;
    }
  },
  actions: {
    changeNumber(context, payload) {
      context.commit("changeNumber", payload);
    }
  },
  getters: {}
});
