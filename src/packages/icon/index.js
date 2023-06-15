import CaIcon from "./src/main";

/* istanbul ignore next */
CaIcon.install = function (Vue) {
  Vue.component(CaIcon.name, CaIcon);
};

export default CaIcon;
