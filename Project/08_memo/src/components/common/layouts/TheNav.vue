<template>
  <nav class="nav" v-if="routeLayout.isNav">
    Footer is now non-visible.
    <!--    <button-->
    <!--      class="nav-icon"-->
    <!--      :class="{ on: $route.path === '/notice' }"-->
    <!--      v-on:click="fnPage(0)"-->
    <!--    >-->
    <!--      <span class="i-noti"></span>-->
    <!--      <span class="ttl">Notice</span>-->
    <!--    </button>-->
    <!--    <button-->
    <!--      class="nav-icon"-->
    <!--      :class="{ on: $route.path === '/main' }"-->
    <!--      v-on:click="fnPage(1)"-->
    <!--    >-->
    <!--      <span class="i-home"></span>-->
    <!--      <span class="ttl">Home</span>-->
    <!--    </button>-->
    <!--    <button-->
    <!--      class="nav-icon"-->
    <!--      :class="{ on: $route.path === '/user' }"-->
    <!--      v-on:click="fnPage(2)"-->
    <!--    >-->
    <!--      <span class="i-user"></span>-->
    <!--      <span class="ttl">User</span>-->
    <!--    </button>-->
  </nav>
</template>

<script>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {computed} from 'vue'

const layoutState = () => {
  const {getters} = useStore()
  const routeLayout = computed(() => {
    return getters['layout/getRouteLayout']
  })
  return {
    routeLayout
  }
}

export default {
  name: 'the-nav',
  description: '하단 네비게이션',
  emits: ['height'],
  setup() {
    const router = useRouter()

    const fnPage = index => {
      /*
      00. notice
      01. home
      02. user
       */
      const paths = ['/notice', '/main', '/user']
      router.push({path: paths[index]})
    }

    return {...layoutState(), fnPage}
  }
}
</script>

<style scoped>
</style>
