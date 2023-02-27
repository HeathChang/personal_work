<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script setup>
import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  on: {
    slideChange: () => {
      // Emit event to notify parent component of current slide index
      emit('slide-change', swiper.activeIndex);
    },
  },
});
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}
</style>
