<template>
    <div class="relative w-36 h-36">
        <!-- Image -->
        <img :src="src" alt="video cover" class="w-full h-full object-cover rounded-md" />

        <!-- Icons overlay -->
        <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div class="bg-[#43B100] rounded-md w-6 h-6 text-white p-1 ">
                <Icon icon="ion:mic-outline" />
            </div>
            <div class="bg-[#245DEF] rounded-md w-6 h-6 text-white p-1  ">
                <Icon icon="mingcute:subtitle-line" />

            </div>
            <div class="bg-[#FB7800] rounded-md w-6 h-6 text-white p-1 ">
                <Icon icon="bi:fire" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'BaseImageItem' })
const { src } = defineProps<{ src: string }>()
</script>
