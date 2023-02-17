<template>
  <div>
    <teleport to="#body">
      <spinner></spinner>
    </teleport>



    <div class="wrap" id="wrap">
      <div class="body">
        <the-base>
          <router-view v-slot="{ Component }">
            <transition name="page">
              <component :is="Component"/>
            </transition>
          </router-view>
        </the-base>
      </div>


      <!-- 전체화면 modal component -->
      <teleport
          to="#wrap"
          v-for="(item, index) in modalComponents"
          :key="index"
      >
        <component
            :index="index"
            :is="item.component"
            v-bind="item"
            @close="fnCloseModal"
        />
      </teleport>
      <!-- alert modal component -->
      <teleport
          to="#wrap"
          v-for="(item, index) in modalAlertComponents"
          :key="index"
      >
        <component
            :index="index"
            :is="item.component"
            v-bind="item"
            @close="fnCloseModalAlert"
        />
      </teleport>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/common/layouts/TheHeader'
import NavBar from '@/components/common/layouts/TheNav'
import Spinner from '@/components/common/layouts/spinner/index'
import {computed, watch, getCurrentInstance, reactive, toRefs} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import TheHeader from "@/components/common/layouts/TheHeader.vue";
import TheNav from "@/components/common/layouts/TheNav.vue";
import TheBase from "@/components/common/layouts/TheBase.vue";

const layoutState = () => {
  const {getters, dispatch} = useStore()
  const route = useRoute()
  const {proxy} = getCurrentInstance()
  const state = reactive({
    routeLayout: computed(() => getters['layout/getRouteLayout']),
    modalAlertComponents: computed(
        () => getters['layout/getModalAlertComponents']
    ),
    modalComponents: computed(() => getters['layout/getModalComponents'])
  })
  /** methods **/
  const fnCloseModalAlert = (index = 0) => {
    dispatch('layout/closeModalAlertComponent', {index})
  }
  const fnRemoveAllModalAlertComponent = () => {
    dispatch('layout/removeAllModalAlertComponent')
  }
  const fnCloseModal = (index = 0) => {
    dispatch('layout/closeModalComponent', {index})
  }
  const fnRemoveAllModalComponent = () => {
    dispatch('layout/removeAllModalComponent')
  }
  /** watch route 이동시 side-bar, modal close **/
  watch(route, () => {
    if (!proxy.$Util.isEmpty(state.modalAlertComponents)) {
      fnRemoveAllModalAlertComponent()
    }
    if (!proxy.$Util.isEmpty(state.modalComponents)) {
      fnRemoveAllModalComponent()
    }
  })

  return {
    fnCloseModalAlert,
    fnCloseModal,
    ...toRefs(state)
  }
}

export default {
  name: 'wrap-index',
  components: {TheNav, TheHeader, HeaderBar, NavBar, Spinner, TheBase},
  setup() {
    return {
      ...layoutState()
    }
  }
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.body {

}
</style>
