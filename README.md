# nuxt-video-player

### Intro

This video-player designed for play online and offline videos in any vue or nuxt base web page. You can play video from youtube, vimeo, offline path, and other online video URL.

### Install

```bash
npm install --save nuxt-video-player
```

### How to

```vue
import VideoPlayer from 'nuxt-video-player'

components: {
    VideoPlayer
}
```

```vue
<video-player src="your video url or path" />
```

### Props

All props are optional.

| Name             | Type    | Default      | Required | Description |
| ---              | ---     | ---          | ---      |---          |
| id               | String  | v-player     | false    | With id you can set a unique identifier for each video-player.  |
| src              | String  | null         | true     | In src, you need to enter your video URL or file path for play video. |
| allow            | String  | clipboard-write; encrypted-media; gyroscope; picture-in-picture | false | With this, you can set which options in youtube video support. |
| allowFullscreen  | Boolean | true         | false    | You can set full-screen mode support or not. |
| containerStyles  | String  | v-player     | false    | You can set a class for custom styling for player container. |
| playerStyles     | String  | v-player__iframe  | false | I create this player with iframe, you can add a class for adding custom styles. |

