<template>
  <div class="contentsLayout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ContentsLayout"
}
</script>

<style scoped>
  .contentsLayout{
    width: 100vw;
    margin-top: 50px;
    height: calc(100vh - 150px);
    padding:1rem;
    overflow-y: auto;
  }
</style>