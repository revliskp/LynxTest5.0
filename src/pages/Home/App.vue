<template>
    <div id="app">
        <navbar />
        <intro-text />
        <photo-gallery />
        <video-gallery />
        <bottom-nav />
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar"
    import IntroText from "@/pages/Home/IntroText"
    import PhotoGallery from "@/pages/Home/PhotoGallery"
    import VideoGallery from "@/pages/Home/VideoGallery"
    import BottomNav from "@/components/BottomNav"

    export default {
        name: 'app',
        components: {
            PhotoGallery,
            Navbar,
            IntroText,
            VideoGallery,
            BottomNav
        }
    }
</script>

<style>
    html, body {
        font-family: Arial, Helvetica, sans-serif;
        height: 100%;
        margin: 0;
    }
</style>