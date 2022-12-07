<template>
  <main>
    {{ test }}
  </main>
</template>


<script>
import {getCurrentInstance, onMounted, reactive, toRefs} from "vue";

export default {
  name: '',
  description: 'This is a main page',
  setup(){
    const state = reactive({
      test: 'Hello World'
    })


    return {
      ...toRefs(state)
    }
  }
}

</script>