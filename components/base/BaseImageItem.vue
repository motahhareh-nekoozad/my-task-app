<template>
    <div class="relative w-96 h-96 rounded-md">
        <!-- Image -->
        <img :src="src" alt="video cover" class="w-full h-full object-contain object-center rounded-md" />

        <!-- Icons overlay -->
        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 ">
            <div class="bg-[#43B100] rounded-md flex items-center justify-center p-2 text-white">
                <Icon icon="ion:mic-outline" class="w-4 h-4" />
            </div>
            <div class="bg-[#245DEF] rounded-md text-white items-center justify-center p-2">
                <Icon icon="mingcute:subtitle-line" class=" w-4 h-4" />

            </div>
            <div class="bg-[#FB7800] rounded-md items-center justify-center p-2 text-white ">
                <Icon icon="bi:fire" class=" w-4 h-4" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'BaseImageItem' })
const { src } = defineProps<{ src: string }>()
</script>
