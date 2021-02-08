# nuxt-video-player

### Intro

This video-player designed for playing online and offline videos in any vue or nuxt base web page. You can play video
from youtube, vimeo, offline path, and other online video URL.

### Install

```bash
npm install --save nuxt-video-player
```

### How to

```javascript
import VideoPlayer from 'nuxt-video-player'

require('nuxt-video-player/src/assets/css/main.css')

components: {
    VideoPlayer
}
```

```vue

<video-player src="your video url or path"/>
```

### Props

All props are optional.

| Name             | Type    | Default      | Required | Description |
| ---              | ---     | ---          | ---      |---          |
| id               | String  | v-player     | false    | With id you can set a unique identifier for each video-player.  |
| src              | String  | null         | true     | In src, you need to enter your video URL or file path for play video. |
| allow (youtube)           | String  | clipboard-write; encrypted-media; gyroscope; picture-in-picture | false | With this, you can set which options in youtube video support. |
| allowFullscreen (youtube)  | Boolean | true         | false    | You can set full-screen mode support or not. |
| containerStyles  | String  | v-player     | false    | You can set a class for custom styling for player container. |
| playerStyles     | String  | v-player__iframe  | false | I create this player with iframe, you can add a class for adding custom styles. |
| autoplay     | Boolean  | false  | false | You can set video autoplay with this. |
| loop     | Boolean  | false  | false | with this, you can set video play again after the end or not. |
| muted     | Boolean  | false  | false | You can enable disable audio with this. |
| poster     | String  | null  | false | You can set custom video poster with this. |
| preload     | String  | 'auto'  | false | You can set video preload with this. |

