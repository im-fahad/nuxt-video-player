<template>
    <div id="app" style="padding: 50px">
        <video-player class="mb_-2" src="https://www.youtube.com/watch?v=9nhg2Y84rmY"/>
        <video-player class="mb_-2" src="https://vimeo.com/389509769"/>
        <video-player src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
    </div>
</template>

<script>
import VideoPlayer from './components/Player'

export default {
    name: 'App',
    components: {
        VideoPlayer
    }
}
</script>
<style scoped>
.mb_-2{
    margin-bottom: 20px;
}
</style>
