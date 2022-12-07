<template>
  <main>
    {{ test }}
  </main>
</template>


<script>
import {getCurrentInstance, onMounted, reactive, toRefs} from "vue";

export default {
  name: 'main-index',
  description: 'This is a main page',
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      test: 'Hello World'
    })

    onMounted(()=>{
      fnMountData()
    })

    const fnMountData = async () => {
      proxy.$mountSvc.fetchData()
    }

    return {
      ...toRefs(state)
    }
  }
}

</script>