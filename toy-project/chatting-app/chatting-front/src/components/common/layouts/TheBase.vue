<template>
  <component :is="layout">
    {{ layout }}
    <slot/>
  </component>
</template>

<script>
import DefaultBase from "@/components/common/layouts/DefaultBase.vue";
import {ref} from "vue";

export default {
  name: 'the-header',
  components: {
    default: DefaultBase
  },
  setup() {
    const layout = ref('default');

    return {
      layout
    }
  }
}
</script>

<script setup>


</script>

<style></style>