<template>
  <main class="main" role="main">
    <div class="main-inner bg">
      <div class="main-con">
        <div class="con">content</div>
        <div class="sec">
          <input type="text" v-model="pageData.searchText">
          <button @click.prevent.stop="fnSearch">Search</button>
        </div>
        <section class="pokemon_info" v-show="isValid">
          <div class="pokemon_name">{{ fetchedData.name }}</div>
          <div class="pokemon_stats" v-for="(item,index) in fetchedData.stats" :key="index">
            <span>{{ item.stat.name }}</span>
            <span>{{ item.base_stat }}</span>
          </div>
          <div class="pokemon_abilities" v-for="(item,index) in fetchedData.abilities" :key="index">
            <span>{{ item['ability'].name }}</span>
            <span>{{ item['ability'].url }}</span>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { useRouter } from 'vue-router'
import { computed, getCurrentInstance, reactive, toRefs } from 'vue'
import { useStore } from "vuex";

export default {
  name : 'main-index',
  description : '메인 인덱스',
  setup() {
    const { proxy } = getCurrentInstance()
    const router = useRouter()
    const { getters , commit } = useStore()

    const state = reactive({
      pageData : {
        searchText : '',
        limit : -1,
        offset : -1
      },
      fetchedData : {
        abilities: [],
        forms: [],
        moves: [],
        species: [],
        sprites: [],
        name: '',
        height: 0,
        id: 0
      },
      isValid: computed(() => getters['fetched/getIsValid']),
    })

    const fnSearch = async () => {
      console.log('search::: ', state.pageData.searchText)
      const pokemon = state.pageData.searchText
      if ( !proxy.$Util.isEmpty(pokemon) ) {
        const res = await proxy.$CommonSvc.fetchPokemon(pokemon)
        state.fetchedData = {...res}
        commit('fetched/setIsValid', { isValid: true })
      }
      console.log(state.fetchedData)
    }

    return {
      ...toRefs(state),
      fnSearch
    }
  }
}
</script>

<style scoped></style>
