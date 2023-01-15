<template>
  <div class="main">
    <img alt="Vue logo" src="../assets/logo.png" @click="fnEnterTest"/>
  </div>
</template>

<script>
// @ is an alias to /src

import { getCurrentInstance, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  name : "Home",
  setup() {
    const state = reactive({})
    const router = useRouter()


    const fnEnterTest = () => {
      router.push({
        name : 'TestIndex',
      })
    }

    return {
      ...toRefs(state),
      fnEnterTest
    }
  }

};
</script>
