<template>
  <section class="filter">
    <span class="badge" :class="item" v-for="(item, index) in text" :key="index">
    {{ item }}
    </span>
  </section>
</template>

<script>
import {onMounted, reactive, toRefs} from "vue";

export default {
  props: ['type', 'area'],
  setup(props) {
    const state = reactive({
      text: []
    })


    onMounted(() => fnAreaToStatus())

    const fnAreaToStatus = () => {
      let type = props.type.split(",").sort();
      const status = ['Morning', 'Afternoon', 'Evening']
      type.filter((item, index) => {
        state.text.push(status[parseInt(item)])
      })
      console.log(state.text)
    }

    return {
      ...toRefs(state),

    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.Morning {
  background-color: #3d008d;
  color: white;
}

.Afternoon {
  background-color: #71008d;
  color: white;
}

.Evening {
  background-color: #8d006e;
  color: white;
}
</style>