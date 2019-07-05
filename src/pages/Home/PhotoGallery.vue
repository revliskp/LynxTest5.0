<template>
    <div id="app">
        <div id="gallery-container">
            <img alt="Photo of a cat" class="pic" :src="cat"/>
            <img alt="Photo of a cat" class="pic" :src="cat"/>
            <img alt="Photo of a cat" class="pic" :src="cat"/>
            <img alt="Photo of a cat" class="pic" :src="cat"/>
            <img alt="Photo of a cat" class="pic" :src="cat"/>
            <img alt="Photo of a cat" class="pic" :src="cat"/>
            <img alt="Photo of a cat" class="pic" :src="cat"/>
            <img alt="Photo of a cat" class="pic" :src="cat"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoGallery",
        data: function() {
            return {
                cat: require('@/assets/cat.jpg')
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
    .pic {
        box-sizing: content-box;
        width: 150px;
        height: 150px;
        margin: 30px;
        color: #d3d3d3;
        border: 1px solid #d3d3d3;
    }
</style>