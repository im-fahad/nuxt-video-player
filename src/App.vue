<template>
    <div id="app">
        <video-player src="https://www.youtube.com/watch?v=K1XSun-Qe08"/>
        <video-player class="mt-3" src="https://vimeo.com/389509769"/>
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
