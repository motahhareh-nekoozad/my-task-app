<template>
    <div class="flex flex-col">
        <div class="flex justify-between mb-2">
            <BaseSelect :options="videoQualities" :modelValue="{ label: '1080p - webdl  کیفیت ', value: '1080' }" />
            <VideoContainerTitle :movie="movie" />
        </div>
        <div class="w-full">
            <VideoPlayer :video="video" class=" mb-2" />
            <div class="flex flex-row-reverse gap-2 justify-between">
                <div class="flex flex-row-reverse gap-2">
                    <BaseButton label="پلیر تلوزیون های سامسونگ" />
                    <BaseButton buttonType="secondary" label="پلیر تلوزیون های قدیمی" />
                    <BaseButton buttonType="secondary" label="پلیر تلوزیون های قدیمی" />
                </div>

                <div class="flex items-center gap-2">
                    <BaseButton :underlinedText="true" buttonType="secondary" label="اعلام مشکل" />

                    <p class="text-[#9DA5B2] text-xs font-bold font-yekan-fa"> حین تماشا با مشکلی رو به رو شدید؟</p>
                </div>
            </div>
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
