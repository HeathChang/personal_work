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
          <img :src="fnFetchImage(fetchedData.id)" />
          <div class="hexagon" id="hexagon" style="display:none;"></div>
          <div class="pokemon_stats" v-for="(item,index) in fetchedData.stats" :key="index">
            <span>{{ item.stat.name }}</span>
            <span>{{ item.base_stat }}</span>
          </div>
          <div class="pokemon_abilities" v-for="(item,index) in fetchedData.abilities" :key="index">
            <span>{{ item['ability'].name }}</span>
            <span>{{ item['ability'].url }}</span>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>

        <section class="pokemon_lists" v-for="(item,index) in fetchedList" :key="index">
          <img :src="fnFetchImage(item.id)" />
          <div class="pokemon_name">{{ item.name }}</div>
          <div class="hexagon" style="display:none;"></div>
          <div class="pokemon_stats" v-for="(item,index) in item.stats" :key="index">
            <span>{{ item.stat.name }}</span>
            <span>{{ item.base_stat }}</span>
          </div>
          <div class="pokemon_abilities" v-for="(item,index) in item.abilities" :key="index">
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
import { computed, getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
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
        limit : 20,
        offset : 0
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
      fetchedList: []
    })

    onMounted(()=>{
      fnMounted()
    })

    const fnFetchImage = id => {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }

    const fnMounted = async () => {
      let result = []
      const payload = {}
      payload.offset = state.pageData.offset;
      payload.limit = state.pageData.limit;
      const res = await proxy.$CommonSvc.fetchPokemon(payload)
      console.log(11, res)
      result = res.results
      console.log('result::::',result)
      for(let i = 0 ; i <result.length; i++){
        const res = await proxy.$CommonSvc.fetchPokemonByURL(result[i].url)
        state.fetchedList.push(res)
      }
      // result.forEach(async item => {
      //   await proxy.$CommonSvc.fetchPokemonByURL(item.url)
      //   state.fetchedList.push(await proxy.$CommonSvc.fetchPokemonByURL(item.url))
      // })
      console.log('fetchedList:: ', state.fetchedList)

    }

    const fnSearch = async () => {
      console.log('search::: ', state.pageData.searchText)
      const pokemon = state.pageData.searchText
      if ( !proxy.$Util.isEmpty(pokemon) ) {
        const res = await proxy.$CommonSvc.fetchPokemonByID(pokemon)
        state.fetchedData = {...res}
        commit('fetched/setIsValid', { isValid: true })
      }
      console.log(state.fetchedData)
    }

    return {
      ...toRefs(state),
      fnSearch,
      fnFetchImage
    }
  }
}
</script>

<style scoped>
#hexagon {
  width: 100px;
  height: 55px;
  background: white;
  position: relative;
}

#hexagon:before {
  content: "";
  top: -25px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 25px solid white;
}
#hexagon:after {
  content: "";
  bottom: -25px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 25px solid white;
}
</style>
