<template>
  <div class="main-con">
    안녕하세요
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, toRefs } from 'vue'

export default {
  name: 'component-search-keywords',
  description: '검색창',
  emits: ['search'],
  setup(props, { emit }) {
    const store = useStore()
    const state = reactive({
      text: '',
      keywords: store.getters['layout/getKeywords']
    })

    const fnSave = () => {
      store.dispatch('layout/updateKeywords', { keyword: state.text })
      state.keywords = store.getters['layout/getKeywords']
      emit('search', state.text)
      state.text = ''
    }

    const fnDelete = (isAll, index) => {
      if (isAll) {
        state.keywords = []
        localStorage.removeItem('keywords')
      } else {
        state.keywords.splice(index, 1)
        store.commit('layout/setKeywords', { keywords: state.keywords })
      }
    }

    return { ...toRefs(state), fnSave, fnDelete }
  }
}
</script>

<style scoped>
.recent_search {
  float: left;
  font-size: large;
  font-weight: 600;
}
.delete_all {
  float: right;
  font-size: small;
  color: red;
}
.list_area {
  margin-top: 50px;
}
</style>
