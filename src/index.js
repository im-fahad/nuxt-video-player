import Player from './Player'

const install = (Vue) => {
    Vue.component('nuxt-video-player', Player)
}

export default { Player, install }

export { Player, install }
