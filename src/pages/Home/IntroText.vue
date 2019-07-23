<template>
    <div id="app">
        <div id="intro-text">
            <p v-for="textIntro in showText" v-bind:key="textIntro">
                {{textIntro.text}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IntroText',
  data: function () {
    return {
      showText: [
        { text: 'Just take a look at these fascinating creatures' },
        { text: 'They look as if they came down to us from heaven' },
        { text: 'Their fur still hold parts of clouds' },
        { text: 'White clouds' }
      ]
    }
  }
}
</script>

<style scoped>
    #app {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    #intro-text {
        text-align: center;
        padding: 3% 15%;
    }
</style>
