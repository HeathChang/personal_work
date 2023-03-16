<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo" />
      <ComponentHeaderIndex/>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <ComponentSubheaderIndex/>
      <ComponentMidContent/>
    </a-layout-content>
    <ComponentFooterIndex/>
  </a-layout>
</template>

<script setup>
import ComponentHeaderIndex from "@/components/main/ComponentHeaderIndex.vue";
import ComponentSubheaderIndex from "@/components/main/ComponentSubheaderIndex.vue";
import ComponentMidContent from "@/components/main/ComponentMidIndex.vue";
import ComponentFooterIndex from "@/components/main/ComponentFooterIndex.vue";
</script>



<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>