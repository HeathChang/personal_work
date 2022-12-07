<template>
    <coach-form :is-modify="true" :data="fetchedData"/>
</template>


<script>
import {getCurrentInstance, onMounted, reactive, toRefs} from "vue";
import {query, where, getDocs} from "firebase/firestore";
import * as firebase from "firebase/firestore";
import CoachForm from "@/components/views/filter/register.vue";

export default {
  name: 'modify-index',
  components: {CoachForm},
  description: 'This is a main page',
  setup() {
    const {proxy} = getCurrentInstance();
    const state = reactive({
      id: 'Hello World',
      fetchedData: {}
    })

    onMounted(() => {
      // state.id = proxy.$route.params.id
      // fnMountData()
    })

    // const fnMountData = async () => {
    //
    // }


    return {
      ...toRefs(state),
      // fnMountData
    }
  }
}

</script>