<template xmlns="http://www.w3.org/1999/html">
  <main class="main" role="main">
    <div class="main-inner bg">
      <div class="main-con">
        <div class="con">content</div>
        <div class="sec">
          <input type="text" v-model="pageData.searchText" @keydown.enter.prevent="fnSearch">
          <button @click.prevent.stop="fnSearch">Search</button>
        </div>
        <section class="pokemon_info" v-if="isValid">
          <components-views-pokedex

              :data="fetchedData"
              @another="fnFetchAnother"
          />
        </section>

        <!--        <section class="pokemon_info" v-if="isValid">-->
        <!--          <div class="pokemon_name">{{ fetchedData.name }}</div>-->
        <!--          <img :src="fnFetchImage(fetchedData.id)"/>-->
        <!--          <div class="hexagon" id="hexagon" style="display:none;"></div>-->
        <!--          <div class="pokemon_stats" v-for="(item,index) in fetchedData.stats" :key="index">-->
        <!--            <span>{{ item.stat.name }}</span>-->
        <!--            <span>{{ item.base_stat }}</span>-->
        <!--          </div>-->
        <!--          <div class="pokemon_abilities" v-for="(item,index) in fetchedData.abilities" :key="index">-->
        <!--            <span>{{ item['ability'].name }}</span>-->
        <!--            <span>{{ item['ability'].url }}</span>-->
        <!--          </div>-->
        <!--        </select>-->

        <!-- Section: PokemonList        -->
        <!--        <section class="pokemon_lists" v-for="(item,index) in fetchedList" :key="index">-->
        <!--          <img :src="fnFetchImage(item.id)" />-->
        <!--          <div class="pokemon_name">{{ item.name }}</div>-->
        <!--          <div class="hexagon" style="display:none;"></div>-->
        <!--          <div class="pokemon_stats" v-for="(item,index) in item.stats" :key="index">-->
        <!--            <span>{{ item.stat.name }}</span>-->
        <!--            <span>{{ item.base_stat }}</span>-->
        <!--          </div>-->
        <!--          <div class="pokemon_abilities" v-for="(item,index) in item.abilities" :key="index">-->
        <!--            <span>{{ item['ability'].name }}</span>-->
        <!--            <span>{{ item['ability'].url }}</span>-->
        <!--          </div>-->
        <!--        </section>-->
      </div>
    </div>
  </main>
</template>

<script>
import {useRouter} from 'vue-router'
import {computed, getCurrentInstance, onMounted, reactive, toRefs} from 'vue'
import {useStore} from "vuex";
import ComponentsViewsPokedex from "@/components/views/pokedex";

export default {
  name: 'main-index',
  components: {ComponentsViewsPokedex},
  description: '메인 인덱스',
  setup() {
    const {proxy} = getCurrentInstance()
    const router = useRouter()
    const {getters, commit} = useStore()

    const state = reactive({
      pageData: {
        searchText: '',
        limit: 20,
        offset: 0
      },
      fetchedData: {
        abilities: [],
        forms: [],
        moves: [],
        species: [],
        sprites: [],
        name: '',
        height: 0,
        id: 0
      },
      image: '',
      isValid: computed(() => getters['fetched/getIsValid']),
    })


    const fnFetchImage = id => {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }

    const fnSearch = async () => {
      const pokemon = state.pageData.searchText
      if (!proxy.$Util.isEmpty(pokemon)) {
        const res = await proxy.$CommonSvc.fetchPokemonByID(pokemon)
        state.fetchedData = {...res}
        commit('fetched/setIsValid', {isValid: true})
      }
    }

    const fnFetchAnother =  (cmd) => {
      cmd === 'prev' ? state.pageData.searchText = parseInt(state.pageData.searchText) - 1 : state.pageData.searchText = parseInt(state.pageData.searchText) + 1;
      fnSearch();
    }

    return {
      ...toRefs(state),
      fnSearch,
      fnFetchImage,
      fnFetchAnother
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
