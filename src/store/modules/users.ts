import axios from 'axios'

const state = {
    users: [],
}

const getters = {

}

const actions = {
    
}

const mutations = {
    setUsers(state: any, users: Array<object>) {
        state.users = users;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}


