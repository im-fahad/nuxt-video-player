<template>
    <iframe :src="getVideoUrl(src)"
            :allow="allow"
            :allowfullscreen="allowFullscreen"
            :id="id"
            class="v-player"
            :class="playerClass">
    </iframe>
</template>

<script>
export default {
    name: 'Player',
    props: {
        id: {
            type: String,
            required: false,
            default: 'v-player'
        },
        src: {
            required: true,
        },
        allow: {
            required: false,
            type: String,
            default: 'accelerometer; encrypted-media; gyroscope; picture-in-picture'
        },
        allowFullscreen: {
            required: false,
            type: Boolean,
            default: true
        },
        playerClass: {
            required: false,
            type: String,
        },
    },
    computed: {
        isValidVideoUrl() {
            return this.src &&
                (
                    this.src.match(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/) ||
                    this.src.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i)
                );
        },
    },
    methods: {
        getVideoUrl(url) {
            if (!url) return null
            const vimeo = "https://vimeo.com"
            const youtube = "youtube.com"

            if (url.includes(youtube)) {
                const videType = {
                    watch: 'watch?v=',
                    youtuBe: 'youtu.be',
                    list: '&list',
                    t: '&t',
                    feature: '&feature',
                    embed: 'embed/'
                }

                if (url.includes(videType.list)) {
                    url = url.split(videType.list)[0]
                    const embedUrl = url.replace(
                        videType.watch,
                        videType.embed
                    )
                    return embedUrl
                }

                if (url.includes(videType.feature)) {
                    url = url.split(videType.feature)[0]
                    const embedUrl = url.replace(
                        videType.watch,
                        videType.embed
                    )
                    return embedUrl
                }

                if (url.includes(videType.t)) {
                    url = url.split(videType.t)[0]
                    const embedUrl = url.replace(
                        videType.watch,
                        videType.embed
                    )
                    return embedUrl
                }

                if (url.includes(videType.watch)) {
                    const embedUrl = url.replace(
                        videType.watch,
                        videType.embed
                    )
                    return embedUrl
                }

                if (url.includes(videType.youtuBe)) {
                    const embedLink = "youtube.com/embed/"
                    const embedUrl = url.replace(
                        videType.youtuBe,
                        embedLink
                    )
                    return embedUrl
                }

            }

            if (url.includes(vimeo)) {
                const vimeoCode = url.split('/')[3]
                return 'https://player.vimeo.com/video/' + vimeoCode
            }

            return url
        },
    }
};
</script>

<style>
.v-player {
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border-radius: 5px;
}
</style>