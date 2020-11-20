<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <player src="https://www.youtube.com/watch?v=Mir3b9yo6MM"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Player from "@/components/Player";
export default {
  name: 'Home',
    components: {Player},
}
</script>
