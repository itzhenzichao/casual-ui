import CaSelect from "./src/main";

/* istanbul ignore next */
CaSelect.install = function (Vue) {
  Vue.component(CaSelect.name, CaSelect);
};

export default CaSelect;
