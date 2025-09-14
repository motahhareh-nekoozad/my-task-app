<template>
    <div class="flex flex-col">
        <div class="flex justify-between mb-4">
            <BaseSelect :options="videoQualities" :modelValue="{ label: '1080p - webdl  کیفیت ', value: '1080' }" />
            <VideoContainerTitle :movie="movie" />
        </div>
        <div class="w-full">
            <VideoPlayer :video="video" />
        </div>
    </div>
</template>

<script setup lang="ts">
import VideoPlayer from '../VideoPlayer.vue'
import VideoContainerTitle from '../VideoContainerTitle.vue'

const props = defineProps<{
    movie: object
    video: object
}>()

const videoQualities = [
    { label: '1080p - webdl  کیفیت ', value: '1080' },
    { label: '720p - webdl  کیفیت ', value: '720' },
    { label: '480p - webdl  کیفیت ', value: '480' },
    { label: '240p - webdl  کیفیت ', value: '240' }
]
</script>
