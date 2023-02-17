<template>
  <div id="layout-wrapper">
    <the-header></the-header>
    <slot></slot>
    <the-nav></the-nav>
  </div>
</template>

<script>
export default {
  name: 'default-base'
}
</script>

<script setup>
import {ref} from "vue";
import TheNav from "@/components/common/layouts/TheNav.vue";
import TheHeader from "@/components/common/layouts/TheHeader.vue";


</script>

<style></style>