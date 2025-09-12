<template>
    <div class="flex flex-col items-start space-y-4">
        <BaseSelect :options="videoQualities" modelValue="1080" />
        <VideoPlayer class="w-full" :videoUrl="videoUrl" :subtitleUrl="subtitleUrl" />
    </div>


</template>

<script setup lang="ts">
import VideoPlayer from '../VideoPlayer.vue';

const props = defineProps<{
    videoUrl: string
    subtitleUrl?: string
}>()

const videoQualities = [{ label: '1080p - webdl  کیفیت ', value: '1080' }, { label: '720p - webdl  کیفیت ', value: '720' }, { label: '480p - webdl  کیفیت ', value: '480' }, { label: '240p - webdl  کیفیت ', value: '240' }]
</script>
