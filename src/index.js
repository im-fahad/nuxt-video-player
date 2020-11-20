import Player from "@/components/Player";

const NuxtVideoPlayer ={
    install(Vue){
        Vue.component('nuxt-video-player', Player)
    }
};

if (typeof window !== 'undefined' && window.Vue){
    window.Vue.use(NuxtVideoPlayer)
}

export default NuxtVideoPlayer