<template>
    <div class="flex flex-row-reverse w-full items-center gap-2">
        <!-- Icon -->
        <div class="items-center hidden lg:flex">
            <VideoQualityIcon :selectedQuality :videoData="movie" />
        </div>

        <!-- Text container -->
        <div class="lg:flex flex flex-col justify-between items-stretch gap-1 text-right">
            <div class="flex flex-col justify-between items-stretch gap-1 text-right">
                <p class="font-yekan-en text-lg font-black text-white leading-tight">
                    {{ movie?.title_en }}
                </p>
                <p class="font-yekan-fa text-sm font-normal text-white leading-tight">
                    {{ movie?.title_fa }}
                </p>

            </div>
            <div class=" flex justify-between items-center lg:hidden">
                <!-- IMDb -->
                <div class="flex items-center gap-2">
                    <img src="@/assets/img/imdbIcon.png" width="18" class="rounded-sm" />
                    <div class="flex items-center">
                        <p class="text-white font-yekan-fa font-extrabold text-2xl">
                            {{ toPersianNumber(store.movie.user_rating) }}
                        </p>
                        <p class="text-white font-yekan-fa font-extrabold text-lg">
                            /{{ toPersianNumber(10) }}
                        </p>
                    </div>
                </div>

                <!--UserRating -->
                <div class="flex-shrink-0">
                    <UserRating :movieId="store.movie.id" :initial-rating="store.movie?.user_rating || 0"
                        @update-rating="handleRating" />
                </div>
            </div>
        </div>

    </div>
</template>



<script setup lang="ts">
import VideoQualityIcon from '../App/VideoQualityIcon.vue'
import { useMovieStore } from '~/stores/movie'
import { toPersianNumber } from '@/utils/persianNumber'

const props = defineProps({
    movie: {
        type: Object as () => VideoData,
        default: () => ({ quality: '1080', ref: 'WebDl', persianName: 'ال کامینو', englishName: 'EL CAMINO' })
    },
    selectedQuality: { type: String }
})



const emit = defineEmits<{
    (e: 'update-rating', value: number): void
}>()

const handleRating = (value: number) => {
    emit('update-rating', value)
}


const store = useMovieStore()



</script>
