<template>
    <div class="w-full h-full " v-if="video?.video_url">
        <video ref="videoRef" controls class="w-full h-full bg-black rounded-lg"></video>

        <!-- Subtitle toggle -->
        <button v-if="video.subtitle" @click="toggleSubtitle"
            class="mt-2 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
            {{ showSubtitle ? 'Hide Subtitles' : 'Show Subtitles' }}
        </button>

        <!-- Time / Duration display -->
        <div class="text-white mt-1 text-sm">
            {{ Math.floor(currentTime) }} / {{ Math.floor(duration) }} seconds
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Hls from 'hls.js'

const props = defineProps<{
    video?: { video_url: string; subtitle?: string }
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
const showSubtitle = ref(true)
const currentTime = ref(0)
const duration = ref(0)
let trackEl: HTMLTrackElement | null = null

// Setup video player with HLS and subtitles
const setupVideo = (videoObj?: { video_url: string; subtitle?: string }) => {
    if (!videoRef.value || !videoObj?.video_url) return
    const video = videoRef.value

    // Clear previous source and track
    video.src = ''
    if (trackEl) video.removeChild(trackEl)
    trackEl = null

    // HLS playback
    if (Hls.isSupported() && videoObj.video_url.endsWith('.m3u8')) {
        const hls = new Hls()
        hls.loadSource(videoObj.video_url)
        hls.attachMedia(video)
    } else {
        video.src = videoObj.video_url
    }

    // Subtitles
    if (videoObj.subtitle) {
        trackEl = document.createElement('track')
        trackEl.kind = 'subtitles'
        trackEl.label = 'English'
        trackEl.srclang = 'en'
        trackEl.src = videoObj.subtitle
        trackEl.default = showSubtitle.value
        video.appendChild(trackEl)
    }

    // Update current time / duration
    video.addEventListener('timeupdate', () => {
        currentTime.value = video.currentTime
        duration.value = video.duration
    })
}

// Toggle subtitles
const toggleSubtitle = () => {
    if (trackEl) trackEl.mode = showSubtitle.value ? 'disabled' : 'showing'
    showSubtitle.value = !showSubtitle.value
}

// Watch for changes in video object (async API)
watch(
    () => props.video,
    (newVideo) => {
        setupVideo(newVideo)
    },
    { immediate: true }
)
</script>
