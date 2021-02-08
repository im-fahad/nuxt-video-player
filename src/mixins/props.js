/**
 * Component props
 */
const mixin = {
    props: {
        id: {
            type: String,
            required: false,
            default: 'v-player'
        },
        src: {
            required: true
        },
        allow: {
            required: false,
            type: String,
            default: 'clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        },
        allowFullscreen: {
            required: false,
            type: Boolean,
            default: true
        },
        containerStyles: {
            required: false,
            type: String
        },
        playerStyles: {
            required: false,
            type: String
        },
        autoplay: {
            required: false,
            type: Boolean,
            default: false
        },
        loop: {
            required: false,
            type: Boolean,
            default: false
        },
        muted: {
            required: false,
            type: Boolean,
            default: false
        },
        poster: {
            required: false,
            type: String,
            default: null
        },
        preload: {
            required: false,
            type: String,
            default: 'auto'
        },
    }
}

export default mixin
