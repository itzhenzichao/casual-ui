<template>
  <div class="home">
    <Swiper>
      <div
        slot="swiper-item"
        class="swiper-item"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item }}
      </div>
    </Swiper>
  </div>
</template>

<script>
import Swiper from "@/lib/swiper/src/main.vue";
export default {
  name: "Home",
  data() {
    return {
      list: [1, 2, 3, 4],
    };
  },
  components: {
    Swiper,
  },
};
</script>
