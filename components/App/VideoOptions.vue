<template>
    <div class="flex gap-4">
        <div class="flex gap-2">
            <MenuIcon icon="mynaui:share" class="bg-secondary px-3 py-3" />
            <MenuIcon icon="solar:bookmark-linear" class="bg-secondary px-3 py-3" />
        </div>
        <div class="flex items-center gap-2">
            <img src="@/assets/img/imdbIcon.png" width="18" class="rounded-sm" />

            <div class="flex items-center">
                <p class="text-white font-yekan-fa font-extrabold text-2xl">{{ toPersianNumber(movie?.user_rating) }}
                </p>
                <p class="text-white font-yekan-fa font-extrabold text-lg ">/{{toPersianNumber(10)}}</p>
            </div>
        </div>
        <UserRating :initialRating="movie?.user_rating" :movieId="movie.id" />
    </div>
</template>

<script lang="ts" setup>
import { toPersianNumber } from '@/utils/persianNumber'

const props = defineProps({
    movie: { type: Object }
})

</script>