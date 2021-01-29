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
        }
    }
}

export default mixin
