<template>

</template>

<script>
import { computed, getCurrentInstance, reactive, toRef, toRefs } from "vue";
import { useStore } from 'vuex'
import { modalNames } from '../globalComponent'

const layoutState = () => {
  const { getters } = useStore()
  const routeLayout = computed(() => {
    return getters['layout/getRouteLayout']
  })

  return {
    routeLayout
  }
}

const methodState = () => {


  return {}
}

export default {
  name : 'the-header',
  setup() {
    const page = reactive({
      'test' : 1
    })

    return {
      ...toRefs(page),
      ...layoutState(),
      ...methodState()
    }
  }


}
</script>