export default ({
  namespaced:true,
  state:{
    userData:{
      userEmail:'',
      userNickname:'',
    },
    accessToken:'',
    refreshToken:''
  },
  getters:{
    getAccessToken(state){
      return state.accessToken || localStorage.getItem('accessToken')
    },
    getRefreshToken(state){
      return state.refreshToken || localStorage.getItem("refreshToken")
    },
    getIsLoggedIn(state){
      if(localStorage.getItem("refreshToken")=== undefined) return false
      return localStorage.getItem("refreshToken")  !== '' ;
    },
    getUserData(state){
      if(state.userData.userEmail){return state.userData}
      return JSON.parse(localStorage.getItem('userData'))
    }
  },
  mutations:{
    setAuthorization(state, {accessToken='', refreshToken=''}){
      state.accessToken = accessToken
      state.refreshToken = refreshToken
    },
    setUserData(state, {userData={
      userEmail:'',
      userNickname:''}}){
      state.userData.userEmail = userData.userEmail
      state.userData.userNickname = userData.userNickname
    }
  },
  actions:{
    asyncAuthorization({commit}, {accessToken='', refreshToken=''}){
      commit('setAuthorization', {accessToken, refreshToken})
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("refreshToken", refreshToken)
    },
    asyncUserData({commit}, {userData={
      userEmail:'',
      userNickname:''}}){
      localStorage.setItem('userData', JSON.stringify(userData))
      commit('setUserData', {userData})
    },
    logOut({commit, dispatch}){
      // localStorage.removeItem('userData');
      // localStorage.removeItem('refreshToken');
      // localStorage.removeItem('accessToken');
      dispatch('asyncUserData', {})
      dispatch('asyncAuthorization',{})
    }
  }
})