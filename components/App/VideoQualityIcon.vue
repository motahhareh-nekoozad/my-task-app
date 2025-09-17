<template>
    <div class="inline-flex flex-col items-center bg-[#AB070F] rounded-md p-1 w-16">
        <!-- Quality box -->
        <div class="w-full bg-white rounded-sm text-center ">
            <span class="text-[#AB070F] font-bold text-md">
                {{ selectedQuality }}
            </span>
        </div>

        <!-- Ref / source -->
        <div class="mt-1">
            <span class="text-white font-yekan-en text-xs font-semibold">
                WebDl
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface VideoData {
    quality: string
    ref: string
}

const props = defineProps<{
    videoData?: VideoData,
    selectedQuality?: string
}>()

// Default value if prop not provided
const videoData = props.videoData ?? { quality: '1080', ref: 'WebDl' }
</script>
