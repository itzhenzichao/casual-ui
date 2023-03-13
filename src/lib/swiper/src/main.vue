<template>
  <div class="swiper-container" :class="`scroll-${type}`">
    <slot name="swiper-item"></slot>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  props: {
    type: {
      type: String,
      default: "x",
    },
  },
  data() {
    return {
      scrollEvent: null,
      index: 1,
      timer: null,
      //方向
      direction: null,
    };
  },
  methods: {
    scrollListener() {
      let _this = this;
      let box = document.querySelector(".swiper-container");
      box.addEventListener("mousewheel", function (e) {
        if (_this.timer) {
          return false;
        }
        _this.direction = e.wheelDelta;
        if (_this.direction < 0) {
          box.scrollLeft = 300 * _this.index;
          _this.index++;
          _this.timer = setTimeout(() => {
            _this.timer = null;
          }, 1000);
        } else {
          _this.index--;
          box.scrollLeft = 300 * (_this.index - 1);
          _this.timer = setTimeout(() => {
            _this.timer = null;
          }, 1000);
        }
      });
      // box.addEventListener("scroll", function (e) {
      //   let scrollLeft = e.target.scrollLeft;
      //   // let clientWidth = e.target.clientWidth;
      //   // let scrollWidth = e.target.scrollWidth;
      //   console.log("scroll", scrollLeft, e);
      //   if (_this.direction < 0 && scrollLeft > 300 * (_this.index - 1) + 20) {
      //     box.scrollLeft = 300 * _this.index;
      //     _this.index++;
      //     console.log("+++");
      //   } else if (_this.direction > 0 && scrollLeft < 300 * _this.index - 20) {
      //     _this.index--;
      //     box.scrollLeft = 300 * (_this.index - 1);
      //     console.log("---");
      //   }
      //   console.log("log", _this.index, _this.direction);
      // });
    },
  },
  mounted() {
    this.scrollListener();
  },
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 300px;
  height: 200px;
  white-space: nowrap;
  transition: all 5s ease;

  .swiper-item {
    width: 100%;
    height: 100%;
    white-space: nowrap;
    background: #ccc;
    // transition: all 2s ease;
  }
  // 奇数样式
  .swiper-item:nth-child(odd) {
    background: #f00;
  }
}
.scroll-x {
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 10px;
  .swiper-item {
    display: inline-block;
  }
}
.scroll-y {
  overflow-y: scroll;
  padding-bottom: 0px;
  .swiper-item {
    display: block;
  }
}
</style>
