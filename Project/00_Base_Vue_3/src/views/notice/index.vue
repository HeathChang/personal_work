<template>
  <main class="main" role="main">
    <div class="main-inner">
      <search-keywords @search="fnSearch"/>
    </div>
  </main>
</template>

<script>
import SearchKeywords from '@/components/views/base/SearchKeywords'
export default {
  name: 'notice-index',
  components: { SearchKeywords },
  setup() {
    const fnSearch = val => {
      console.log('val::: {}', val);
    }
    return { fnSearch }
  }
}
</script>

<style scoped>

</style>
