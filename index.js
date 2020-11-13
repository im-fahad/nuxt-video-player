import vuePlayer from "./Player";

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("v-player", vuePlayer);
}

const plugin = {
    install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

vuePlayer.install = install;

export default vuePlayer;