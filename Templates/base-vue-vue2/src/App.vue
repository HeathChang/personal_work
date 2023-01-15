<template>
  <div id="app">
    <div class="contentsLayout">
      <HeaderLayout/>
      <ContentsLayout/>
<!--      <FooterLayout/>-->
    </div>
  </div>
</template>

<script>
import HeaderLayout from "@/layouts/design/HeaderLayout"
import ContentsLayout from "@/layouts/design/ContentsLayout"
import FooterLayout from "@/layouts/design/FooterLayout"
export default{
  components:{
    HeaderLayout,
    ContentsLayout,
    // FooterLayout
  }
}
</script>
