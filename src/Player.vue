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
	import props from './mixins/props'

	export default {
		name: 'nuxt-video-player',
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
			getVideoUrl (url) {
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
			}
		}
	}
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
