<template>
  <div
    class="ca-input"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <!-- 前置 -->
    <span class="ca-input__prefix" v-if="prefixIcon">
      <i :class="prefixIcon"></i>
    </span>
    <input
      class="ca-input__inner"
      v-bind="$attrs"
      :class="{
        'ca-input--suffix': suffixIcon,
        'ca-input--prefix': prefixIcon,
        'is-disabled': disabled,
      }"
      ref="input"
      :readonly="readonly"
      :disabled="disabled"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :value="value"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="updateVal"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
    <!-- 后置 -->
    <span
      class="ca-input__suffix"
      v-if="suffixIcon || clearable || showPwdVisible || showWordLimit"
    >
      <i :class="suffixIcon" v-if="suffixIcon"></i>
      <i
        class="icon-cursor-pointer ca-icon-circle-close"
        v-if="showClear"
        @click="clear"
      ></i>
      <i
        class="icon-cursor-pointer"
        :class="passwordVisible ? 'ca-icon-view' : 'ca-icon-hide'"
        v-if="showPwdVisible"
        @click="handlePasswordVisible"
      ></i>
      <i v-if="showWordLimit">{{ textLength }}/{{ upperLimit }}</i>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    prefixIcon: {
      type: String,
      default: "",
    },
    suffixIcon: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
  },
  name: "CaInput",
  data() {
    return {
      hovering: false,
      focused: false,
      passwordVisible: false,
    };
  },
  methods: {
    isKorean(text) {
      const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
      return reg.test(text);
    },
    handleCompositionStart(e) {
      console.log("handleCompositionStart");
      this.isComposing = true;
    },
    handleCompositionUpdate(e) {
      const text = e.target.value;
      const lastCharacter = text[text.length - 1] || "";
      this.isComposing = !this.isKorean(lastCharacter);
      console.log(
        "nUpdate===",
        text,
        lastCharacter,
        this.isKorean(lastCharacter)
      );
    },
    handleCompositionEnd(e) {
      this.isComposing = false;
      console.log("handleCompositionEnd");
    },
    //回车或者失去焦点时触发
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    updateVal(e) {
      this.$emit("input", e.target.value);
    },
    //清空
    clear() {
      this.$emit("input", "");
      this.$nextTick(() => {
        this.focus();
      });
    },
    handleFocus() {
      this.focused = true;
    },
    handleBlur() {
      this.focused = false;
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    //密码查看切换
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
      this.$nextTick(() => {
        this.focus();
      });
    },
  },
  mounted() {},
  computed: {
    showClear() {
      return (
        this.clearable &&
        this.value &&
        !this.readonly &&
        (this.focused || this.hovering)
      );
    },
    showPwdVisible() {
      return (
        this.showPassword && !this.readonly && (this.value || this.focused)
      );
    },
    upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength() {
      return this.value.length;
    },
  },
};
</script>
<style lang="scss" scoped>
// @import "@/lib/theme-chalk/variable.scss";

.ca-input {
  position: relative;
  .ca-input__prefix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    color: #c0c4cc;
  }
  .ca-input__suffix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    color: #c0c4cc;
    i {
      margin-left: 4px;
    }
    .icon-cursor-pointer {
      cursor: pointer;
    }
  }
}
.ca-input__inner {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 15px;
  box-sizing: border-box;
  cursor: pointer;
}
.ca-input--suffix {
  padding-right: 30px;
}
.ca-input--prefix {
  padding-left: 30px;
}
.ca-input__inner:focus {
  outline: none;
  border-color: #4a36fa;
}

.is-disabled:hover {
  cursor: not-allowed;
}
</style>
