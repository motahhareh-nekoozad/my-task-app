<template>
    <div class="flex flex-row-reverse items-center gap-2">
        <!-- Icon -->
        <div class="flex items-center">
            <VideoQualityIcon :videoData="movie" />
        </div>

        <!-- Text container -->
        <div class="flex flex-col justify-between items-stretch gap-1 text-right">
            <p class=" text-lg font-black text-white leading-tight">
                {{ movie?.title_en }}
            </p>
            <p class=" text-sm font-normal text-white leading-tight">
                {{ movie?.title_fa }}
            </p>
        </div>
    </div>
</template>



<script setup lang="ts">
import VideoQualityIcon from '../App/VideoQualityIcon.vue'

const props = defineProps({
    movie: {
        type: Object as () => VideoData,
        default: () => ({ quality: '1080', ref: 'WebDl', persianName: 'ال کامینو', englishName: 'EL CAMINO' })
    }
})

</script>
