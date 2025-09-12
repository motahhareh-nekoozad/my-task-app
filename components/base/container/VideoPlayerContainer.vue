<template>
    <div>
        <div class="flex justify-between ">
            <BaseSelect :options="videoQualities" :modelValue="{ label: '1080p - webdl  کیفیت ', value: '1080' }" />
            <VideoContainerTitle :videoData />
        </div>
        <div>
            <VideoPlayer class="w-full" :videoUrl="videoUrl" :subtitleUrl="subtitleUrl" />

        </div>
    </div>
</template>

<script setup lang="ts">
import VideoPlayer from '../VideoPlayer.vue';
import VideoContainerTitle from '../VideoContainerTitle.vue'

const props = defineProps<{
    videoUrl: string
    subtitleUrl?: string
    videoData: object
}>()

const videoQualities = [{ label: '1080p - webdl  کیفیت ', value: '1080' }, { label: '720p - webdl  کیفیت ', value: '720' }, { label: '480p - webdl  کیفیت ', value: '480' }, { label: '240p - webdl  کیفیت ', value: '240' }]
</script>
