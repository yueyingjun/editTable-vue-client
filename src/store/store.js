import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login: sessionStorage.login,
        uname:sessionStorage.uname
    },
    mutations: {
        setLogin (state,val) {
            state.login=val
        },
        setUname (state,val) {
            state.uname=val
        }
    }
})

export default store;