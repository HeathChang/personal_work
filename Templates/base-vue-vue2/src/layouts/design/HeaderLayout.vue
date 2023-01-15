<template>
  <main>
    {{ header }}
  </main>
</template>


<script>
import {reactive, toRefs} from "vue";

export default {
  name: 'HeaderLayout',
  description: 'This is a main page',
  setup(){
    const state = reactive({
      header: 'Header Section'
    })


    return {
      ...toRefs(state)
    }
  }
}

</script>