<template>
  <div class="parent-container">
    <Swiper @slide-change="handleSlideChange">
      <div class="swiper-slide">
        <ChildComponent1 />
      </div>
      <div class="swiper-slide">
        <ChildComponent2 />
      </div>
      <div class="swiper-slide">
        <ChildComponent3 />
      </div>
    </Swiper>
  </div>
</template>

<script setup>
import Swiper from '@/components/views/swiper/Swiper.vue';
import ChildComponent1 from '@/components/views/swiper/child/child-component1.vue';
import ChildComponent2 from '@/components/views/swiper/child/child-component2.vue';
import ChildComponent3 from '@/components/views/swiper/child/child-component3.vue';
import { ref } from 'vue';

const activeSlideIndex = ref(0);

const handleSlideChange = (index) => {
  activeSlideIndex.value = index;
};
</script>
