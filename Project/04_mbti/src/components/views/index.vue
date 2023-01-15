<template>
  <div>
    <teleport to="#body">
      <spinner></spinner>
    </teleport>
    <div class="wrap" id="wrap">
      <div class="body">
        <router-view v-slot="{Component}">
          <!--          head-->
          <header-bar/>
          <!--          body-->
          <transition name="fade">
            <component :is="Component"/>
          </transition>
          <!--          foot-->
          <footer-bar/>
        </router-view>
      </div>

      <!--      모달팝업:modal component => v-for이후, component-->

      <teleport to="#wrap">
        <component/>
      </teleport>
    </div>
  </div>

</template>

<script>
import Spinner from '@/components/common/layouts/spinner/index'
import HeaderBar from '@/components/common/layouts/TheHeader'
import FooterBar from '@/components/common/layouts/TheFooter'

export default {
  name : "wrap-index",
  components : { Spinner, HeaderBar, FooterBar}
}
</script>

<style scoped>

</style>