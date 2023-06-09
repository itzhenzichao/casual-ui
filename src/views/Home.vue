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
    {{ value }}
    <Input
      @change="handleChange"
      @input="handleInputChange"
      v-model="value"
      suffix-icon=""
      prefix-icon=""
      clearable
      type=""
    />
  </div>
</template>

<script>
import Swiper from "@/packages/swiper/src/main.vue";
import Input from "@/packages/input/src/main.vue";
import "@/lib/theme-chalk/icon.css";
import "@/lib/theme-chalk/ca-icon.css";
export default {
  name: "Home",
  data() {
    return {
      list: [1, 2, 3, 4],
      value: "",
    };
  },
  components: {
    Swiper,
    Input,
  },
  methods: {
    handleChange(val) {
      console.log("handleChange", val);
    },
    handleInputChange(val) {
      console.log("handleInputChange", val);
    },
  },
};
</script>
