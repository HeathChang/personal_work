<template>
  <div class="main-con">
    <div class="form">
      <ul class="form-ul">
        <li class="form-li">
          <div class="form-ttl">
            <span>검색창</span>
          </div>
          <div class="form-in timer">
            <label class="label">
              <input type="text" placeholder="검색어를 입력해주세요." v-model="text" />
            </label>
            <button @click="fnSave">검색</button>
          </div>
        </li>
      </ul>
    </div>
    <div style="padding: 0 1rem">
      <div class="recent_search">최근검색어</div>
      <div class="delete_all" @click="fnDelete(true)">전체삭제</div>
    </div>
    <div class="list_area">
      <ol class="ol">
        <li class="ol-li" v-for="(store, index) in keywords" :key="index" style="padding: 0 2rem">
          <span class="ol-txt"> {{ store }}</span>
          <span class="delete" @click="fnDelete(false, index)">
            <button>X</button>
          </span>
        </li>
      </ol>
    </div>
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
