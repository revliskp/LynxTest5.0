<template>
    <div id="app">
        <div id="text-video">
            <p v-for="textVideo in showText" v-bind:key="textVideo">
                {{textVideo.text}}
            </p>
        </div>
        <div id="section-video">
            <youtube :video-id="videoId" ref="youtube" @playing="playVideo"></youtube>
        </div>
    </div>

</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  name: 'VideoGallery',
  data: function () {
    return {
      showText: [
        { text: 'White color is often associated with purity, light and good.' },
        { text: 'Pets give a person a feeling of comfort and joy.' },
        { text: 'Content with cats is one of the most popular on the Internet.' },
        { text: 'This is how the idea of a White Clouds was born.' }
      ],
      videoId: 'twAm73RcKbY'
    }
  },
  methods: {
    playVideo () {
      this.player.playVideo()
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style scoped>
    #app {
        display: flex;
        width: 100%;
        height: auto;
        padding: 2rem 0 1rem 0;
    }
    #text-video {
        width: 100%;
        height: 300px;
        text-align: center;
        padding-top: 100px;
    }
    #section-video {
        display: flex;
        width: 100%;
        height: auto;
        color: #d3d3d3;
        align-items: center;
        justify-content: center;
    }
</style>
