<template>
  <div style="z-index: 99999999999; position: relative;">
    <div class="pop_cover"></div>
    <div class="pop_loading">
      <div class="lds-css ng-scope">
        <div style="width:100%;height:100%" class="lds-rolling">
          <div></div>
          <img src="@/assets/logo.png" class="loading_logo" alt="Loading.."/>
          <p>당신의 MBTI 는?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>