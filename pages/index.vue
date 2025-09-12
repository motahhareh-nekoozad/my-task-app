<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VideoPlayerContainer from '~/components/base/container/VideoPlayerContainer.vue'
definePageMeta({
    layout: 'default'  // optional, since default layout is used automatically
})

const videoUrl = ref('')
const subtitleUrl = ref('')

onMounted(async () => {
    try {
        const res = await fetch('https://ylnk.site/test/?action=stream&id=2501')
        const data = await res.json()
        videoUrl.value = data.video_url
        subtitleUrl.value = data.subtitle
    } catch (error) {
        console.error('Failed to fetch video info:', error)
    }
})
</script>

<template>
    <div class="grid grid-cols-2 gap-2">
        <div>

        </div>
        <div>
            <VideoPlayerContainer v-if="videoUrl" :video-url="videoUrl" :subtitle-url="subtitleUrl" :video />
        </div>
    </div>

</template>