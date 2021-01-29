<template>
    <div :id="id" class="v-player" :class="containerStyles">
        <iframe :src="getVideoUrl(src)"
                :allow="allow"
                :allowfullscreen="allowFullscreen"
                :id="id+'-iframe'"
                class="v-player__iframe"
                :class="playerStyles">
        </iframe>
    </div>
</template>

<script>
import props from '../mixins/props'
require('../../dist/vue-video-player.css')

export default {
    name: 'video-player',
    mixins: [props],
    computed: {
        // isValidVideoUrl() {
        //     return this.src &&
        //         (
        //             this.src.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/) ||
        //             this.src.match(/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/i)
        //         );
        // },
    },
    methods: {
        getVideoUrl(url) {
            if (!url) return null
            const vimeo = 'https://vimeo.com'
            const youtube = 'youtube.com'

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
                    return url.replace(
                        videType.watch,
                        videType.embed
                    )
                }

                if (url.includes(videType.feature)) {
                    url = url.split(videType.feature)[0]
                    return url.replace(
                        videType.watch,
                        videType.embed
                    )
                }

                if (url.includes(videType.t)) {
                    url = url.split(videType.t)[0]
                    return url.replace(
                        videType.watch,
                        videType.embed
                    )
                }

                if (url.includes(videType.watch)) {
                    return url.replace(
                        videType.watch,
                        videType.embed
                    )
                }

                if (url.includes(videType.youtuBe)) {
                    const embedLink = 'youtube.com/embed/'
                    return url.replace(
                        videType.youtuBe,
                        embedLink
                    )
                }
            }

            if (url.includes(vimeo)) {
                const vimeoCode = url.split('/')[3]
                return 'https://player.vimeo.com/video/' + vimeoCode
            }

            return url
        },
    }
}
</script>

<style scoped>
.v-player {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    background-color: #000;
    border-radius: 5px;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 15%);
}

.v-player__iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border-radius: 5px;
    background-color: #000;
}
</style>
