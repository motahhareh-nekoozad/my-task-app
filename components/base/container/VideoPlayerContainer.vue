<template>
    <div class="flex flex-col h-full">
        <div class="flex justify-between items-center mb-2">
            <BaseSelect @update:modelValue="selectQuality" class="hidden lg:flex lg:w-full" :options="videoQualities"
                :modelValue="{ label: '1080p - webdl  کیفیت ', value: '1080' }" />
            <VideoContainerTitle class="flex w-auto  lg:w-full" :selectedQuality :movie="movie" />
        </div>
        <div class="w-full flex-1 h-full flex flex-col">
            <VideoPlayer :video="video" class="flex-1 mb-2" />

            <div class="flex lg:flex-row-reverse flex-col-reverse gap-2 justify-between">
                <div class="flex flex-row-reverse gap-2">
                    <BaseButton label="پلیر تلوزیون های سامسونگ" />
                    <BaseButton buttonType="secondary" label="پلیر تلوزیون های قدیمی" />
                    <BaseButton buttonType="secondary" label="پلیر تلوزیون های قدیمی" />
                </div>

                <div class="flex items-center gap-2 justify-between">
                    <BaseButton :underlinedText="true" buttonType="secondary" label="اعلام مشکل" />
                    <p class="text-[#9DA5B2] text-xs font-bold font-yekan-fa">
                        حین تماشا با مشکلی رو به رو شدید؟
                    </p>
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

const selectedQuality = ref('1080')


const selectQuality = (value: string) => {
    selectedQuality.value = value.value
}
const videoQualities = [
    { label: '1080p - webdl  کیفیت ', value: '1080' },
    { label: '720p - webdl  کیفیت ', value: '720' },
    { label: '480p - webdl  کیفیت ', value: '480' },
    { label: '240p - webdl  کیفیت ', value: '240' }
]
</script>
