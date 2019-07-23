<template>
    <div id="app">
        <div id="gallery-container">
            <img alt="Photo of a cat" class="image" v-for="cat in images" :src="cat.image" :key="cat"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  data: function () {
    return {
      images: [
        {image: require('@/assets/cat1.jpg')},
        {image: require('@/assets/cat2.jpg')},
        {image: require('@/assets/cat3.jpg')},
        {image: require('@/assets/cat4.jpg')},
        {image: require('@/assets/cat5.jpg')},
        {image: require('@/assets/cat6.jpg')},
        {image: require('@/assets/cat7.jpg')},
        {image: require('@/assets/cat8.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
    #app {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 2rem 0 2rem 0;
        background: #F7F7F7;
    }
    #gallery-container {
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        width: 60%;
        height: auto;
    }
    .image {
        box-sizing: content-box;
        width: 150px;
        height: 150px;
        margin: 30px;
        color: #d3d3d3;
        border: 1px solid #d3d3d3;
    }
</style>
