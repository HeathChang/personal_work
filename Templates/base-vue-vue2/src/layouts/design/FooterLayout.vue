<template>
  <div class="footerLayout">
    <ul>
      <li v-for="(item, index ) in footer"
          :key="index"
          @click="fnRoute(item.url)"
          :style="`width:calc(100%/${footer.length})`"
      >
        <img :src="item.image" alt="">
        <h2>{{ item.title }}</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerLayout",
  computed:{
    footer(){
      return this.$FooterControl
    }
  },
  methods:{
    fnRoute(url){
      this.$router.push(url)
    }

  }
}
</script>

<style scoped>
.footerLayout{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  padding:0.5rem;
  z-index: 1;
  background-color: white;
  border-top: 2px solid rgba(238, 238, 238, 0.74);
}
.footerLayout ul {
  display: flex;
  height: 100%;
  width: 100%;
}
.footerLayout li{
  height: 100%;
  /*border: 1px gray solid;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footerLayout img{
  width: 70%;
  height: 70%;
  margin-bottom: 0.5rem;
}
</style>