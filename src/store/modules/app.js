// import Cookies from 'js-cookie'

const state = {
    pageName: 'pageBlack'
}

const mutations = {
    savePageName (state, pageName) {
        state.pageName = pageName
    }
}

const actions = {
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
