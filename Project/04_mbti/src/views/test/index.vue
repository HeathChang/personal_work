<template>
  <div class="main">
    <div class="main_inner">
      <div class="page">
        <test-step1/>
        <test-step2/>
      </div>
    </div>
  </div>
</template>

<script>
import TestStep1 from './step1'
import TestStep2 from './step2'

export default {
  name : "test-index",
  components : { TestStep1, TestStep2 }
}
</script>

<style scoped>

</style>