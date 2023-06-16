<template>
  <div class="ca-select">
    <div
      @click.stop="toggleMenu"
      v-clickoutside="handleClose"
      class="ca-select-container"
      :class="{
        'is-disabled': disabled,
      }"
    >
      <input
        type="text"
        v-model="selected"
        autocomplete="off"
        readonly
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <i
        class="ca-icon-arrow-down ca-icon-arrow"
        :class="visible ? 'ca-select__open' : 'ca-select__close'"
      ></i>
    </div>
    <Transition name="ca">
      <div class="select-menu" v-show="visible" :style="[menuStyle]">
        <div class="ca-scrollbar">
          <ul>
            <li
              @click="changeSelect"
              class="select-option"
              v-for="(item, index) in list"
              :value="item[optionsValueKey]"
              :key="index"
            >
              {{ item[optionsLabelKey] }}
            </li>
          </ul>
        </div>
        <div class="popper__arrow"></div>
      </div>
    </Transition>
  </div>
</template>
<script>
import Clickoutside from "../../../utils/clickoutside";

export default {
  name: "CaSelect",
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    options: {
      type: Array,
      default: () => [],
    },
    optionsLabelKey: {
      type: String,
      default: "label",
    },
    optionsValueKey: {
      type: String,
      default: "value",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  directives: { Clickoutside },
  data() {
    return {
      visible: false,
      menuStyle: {},
      selected: "",
    };
  },
  mounted() {},
  methods: {
    changeSelect(e) {
      this.selected = e.target.innerText;
      this.$emit("input", e.target.getAttribute("value"));
    },
    toggleMenu(e) {
      if (this.disabled) return;
      this.visible = !this.visible;
      this.setSelectMenuStyle(e);
    },
    setSelectMenuStyle(e) {
      let selectDomHeight = e.target.offsetHeight;
      this.menuStyle = {
        top: selectDomHeight + 10 + "px",
      };
    },
    handleClose() {
      this.visible = false;
    },
    handleOpen() {
      this.visible = true;
    },
  },
  computed: {
    list() {
      return this.options;
    },
  },
};
</script>
<style lang="scss" scoped>
.ca-select {
  position: relative;
}
.ca-select-container {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}
input {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  cursor: pointer;
}
.ca-icon-arrow {
  cursor: pointer;
  height: 40px;
  line-height: 40px;
}
.ca-select__open {
  transform: rotate(-180deg);
  transition: 0.5s;
}
.ca-select__close {
  transition: 0.5s;
}
.select-menu {
  position: absolute;
  border: 1px solid #dcdfe6;
  left: 0px;
  right: 0px;
  background: white;
  border-radius: 4px;
  z-index: 1;
  .ca-scrollbar {
    max-height: 150px;
    overflow: auto;
  }
}
.ca-enter-active,
.ca-leave-active {
  transition: opacity 0.5s ease;
}

.ca-enter-from,
.ca-leave-to {
  opacity: 0;
}
ul,
li {
  width: 100%;
  padding: 0px;
  margin: 0px;
  list-style: none;
  width: 100%;
  box-sizing: border-box;
}
.select-option {
  padding: 5px 15px;
  cursor: pointer;
}
.select-option:hover {
  background: #f5f7fa;
}
.popper__arrow {
  position: absolute;
  top: -6px;
  left: 30px;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 6px;
  border-top-width: 0;
  border-bottom-color: #dcdfe6;
}
.popper__arrow::after {
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 6px;
  border-top-width: 0;
  border-bottom-color: #fff;
  margin-left: -6px;
  position: absolute;
  top: 1px;
}
.is-disabled {
  background: #f7f7f7;
}
.is-disabled:hover {
  cursor: not-allowed;
}
.is-disabled {
  input,
  .ca-icon-arrow {
    cursor: not-allowed;
  }
}
</style>
