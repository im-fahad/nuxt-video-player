<template>
    <div :id="id" class="v-player" :class="containerStyles">
        <iframe v-if="isValidUrl && urlType == 'iframe'" :src="getVideoUrl(src)"
                :allow="allow"
                :allowfullscreen="allowFullscreen"
                :id="id+'-iframe'"
                class="v-player__iframe"
                :class="playerStyles">
        </iframe>
        <video v-if="isValidUrl && urlType == 'video'" class="v-player__video" controls :autoplay="autoplay"
               :loop="loop"
               :muted="muted"
               :poster="poster"
               :preload="preload"
               name="media">
            <source :src="getVideoUrl(src)">
        </video>

        <div v-if="!isValidUrl" class="v-player__content">
            <!--            <h1 class="v-player__content-icon">&#9888;</h1>-->
            <strong class="v-player__content-strong">Sorry,</strong>
            <p class="v-player__content-text">The given video URL is not valid or unsupported.</p>
            <p class="v-player__content-link">({{ getVideoUrl(src) }})</p>
        </div>
    </div>
</template>

<script>
import props from '../mixins/props'

require('../assets/css/main.css')

export default {
    name: 'video-player',
    mixins: [props],
    data() {
        return {
            isValidUrl: true,
            urlType: 'iframe'
        }
    },
    methods: {
        getVideoUrl(url) {
            if (!url) return null

            const vimeo = /(?:https?:\/\/(?:www\.)?)?vimeo.com\/(?:channels\/|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
            const youtube = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            let isValidYoutubeUrl = url.match(youtube);

            if (isValidYoutubeUrl) {
                this.urlType = 'iframe'
                return 'https://www.youtube.com/embed/' + isValidYoutubeUrl[1];
            }

            let isValidVimeoUrl = url.match(vimeo);
            if (isValidVimeoUrl) {
                this.urlType = 'iframe'
                return 'https://player.vimeo.com/video/' + isValidVimeoUrl[3]
            }

            return this.isValidVideoUrl(url);
        },
        isValidVideoUrl(url) {
            // let videoTypes = ['.mp4', '.avi', '.mov', 'mpg', '.wmv', '.flv', '.webm', '.mkv', '.ogv', '.3gp', '.3g2']
            let videoTypes = ['.mp4', '.ogg', '.webm']

            for (let i in videoTypes) {
                if (url.includes(videoTypes[i])) {
                    this.urlType = 'video'
                    return url
                }
            }
            this.isValidUrl = false
            return url
        },
    }
}
</script>
