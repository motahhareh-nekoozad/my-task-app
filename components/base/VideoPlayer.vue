<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Hls from 'hls.js'

// Props
const props = defineProps<{
    videoUrl: string
    subtitleUrl?: string
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const showSubtitle = ref(true)
const currentTime = ref(0)
const duration = ref(0)

onMounted(() => {
    if (!videoRef.value) return

    const video = videoRef.value

    // Initialize HLS if needed
    if (Hls.isSupported() && props.videoUrl.endsWith('.m3u8')) {
        const hls = new Hls()
        hls.loadSource(props.videoUrl)
        hls.attachMedia(video)
    } else {
        // Fallback for browsers that support HLS natively (Safari)
        video.src = props.videoUrl
    }

    // Load subtitle track
    if (props.subtitleUrl) {
        const track = document.createElement('track')
        track.kind = 'subtitles'
        track.label = 'English'
        track.srclang = 'en'
        track.src = props.subtitleUrl
        track.default = showSubtitle.value
        video.appendChild(track)
    }

    // Update time / duration
    video.addEventListener('timeupdate', () => {
        currentTime.value = video.currentTime
        duration.value = video.duration
    })
})
</script>

<template>
    <div class="video-player w-full max-w-3xl">
        <video ref="videoRef" controls class="w-full bg-black"></video>

        <!-- Subtitle toggle -->
        <button v-if="props.subtitleUrl" @click="showSubtitle = !showSubtitle"
            class="mt-2 px-3 py-1 bg-gray-800 text-white rounded">
            {{ showSubtitle ? 'Hide Subtitles' : 'Show Subtitles' }}
        </button>

        <!-- Time / Duration display -->
        <div class="text-white mt-1">
            {{ Math.floor(currentTime) }} / {{ Math.floor(duration) }} seconds
        </div>
    </div>
</template>
