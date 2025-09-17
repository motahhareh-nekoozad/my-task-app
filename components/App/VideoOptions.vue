<template>
    <div class="flex gap-4 mb-2">
        <div class="flex gap-2">
            <MenuIcon icon="mynaui:share" class="bg-secondary px-3 py-3" />
            <MenuIcon icon="solar:bookmark-linear" class="bg-secondary px-3 py-3" />
        </div>
        <div class="flex items-center gap-2">
            <img src="@/assets/img/imdbIcon.png" width="18" class="rounded-sm" />

            <div class="flex items-center">
                <p class="text-white font-yekan-fa font-extrabold text-2xl">{{ toPersianNumber(store.movie.user_rating)
                }}
                </p>
                <p class="text-white font-yekan-fa font-extrabold text-lg ">/{{ toPersianNumber(10) }}</p>
            </div>
        </div>
        <UserRating :movieId="store.movie.id" :initial-rating="store.movie?.user_rating || 0"
            @update-rating="handleRating" />
    </div>
</template>

<script lang="ts" setup>
import { useMovieStore } from '~/stores/movie'
import { toPersianNumber } from '@/utils/persianNumber'

const store = useMovieStore()


const props = defineProps({
    movie: { type: Object }
})



const emit = defineEmits<{
    (e: 'update-rating', value: number): void
}>()

const handleRating = (value: number) => {
    emit('update-rating', value)
}
</script>