<template>
  <div class="mid" :style="{ background: '#fff', padding: '24px' }">
    <swiper
        v-bind="swiperOptions"
        class="movie-swiper"
    >
      <swiper-slide
          v-for="(item, index) in 3"
          :key="index">
        {{ item }}
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.css';


const swiperOptions = {

}
</script>

<style scoped lang="scss">
.mid {
  height: auto;
}
</style>
