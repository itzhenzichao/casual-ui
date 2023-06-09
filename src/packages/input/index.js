import CaInput from "./src/main";

/* istanbul ignore next */
CaInput.install = function (Vue) {
  Vue.component(CaInput.name, CaInput);
};

export default CaInput;
