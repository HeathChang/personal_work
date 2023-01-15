<template>
  <div class="spinner-wrapper" v-if="spinner.isActive">
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" :stroke="`${spinner.spinnerColor}`" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  beforeMount() {
    document.body.style.overflow='hidden'
  },
  beforeDestroy() {
    document.body.style.overflow=''
  },
  computed:{
    spinner(){
      return this.$store.getters['layout/getSpinner']
    }
  }
}
</script>

<style scoped>

  @keyframes rotate {
    100% {transform: rotate(360deg);}
  }
  @keyframes dash {
    0% {stroke-dasharray: 1, 150;stroke-dashoffset: 0;}
    50% {stroke-dasharray: 90, 150;stroke-dashoffset: -35;}
    100% {stroke-dasharray: 90, 150;stroke-dashoffset: -124;}
  }
.spinner {  animation: rotate 2s linear infinite; width: 50px; height: 50px; }
.spinner .path { stroke-linecap: round; animation: dash 1.5s ease-in-out infinite; }
.spinner-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 3;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>