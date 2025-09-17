<template>
    <div
        class="w-full p-2 flex flex-row-reverse justify-between  gap-3 rounded-lg hover:shadow-lg hover:bg-gray-800 transition cursor-pointer">
        <!-- Image  with overlay icons -->
        <div class="relative flex-shrink-0 w-48 h-48 bg-transparent rounded-md overflow-hidden">
            <BaseImageItem :src="video?.poster" class="w-full h-full object-contain rounded-md" />
        </div>
        <div class="flex-1 gap-1 text-right flex flex-col justify-between">
            <!-- Titles -->
            <div class="flex flex-col gap-1">
                <h3 class="text-lg font-yekan-en text-white font-extrabold leading-tight">
                    {{ video?.title }}
                </h3>
                <h4 class="text-sm font-normal font-yekan-en text-[#9DA5B2]">
                    {{ video?.secondTitle || '6.5 per meter' }}
                </h4>
                <h4 class="text-sm font-normal font-yekan-fa text-[#9DA5B2]">
                    {{ video?.genre || 'اجتماعی،سیاسی، هیجانی' }}
                </h4>
            </div>

            <!-- Rating + Year -->
            <div class="flex justify-between mt-2 items-center">
                <div class="flex items-center gap-1">
                    <icon icon="material-symbols:star-rounded" color="#F3B209" width="18" />
                    <span class="text-white font-extrabold text-sm font-yekan-en">{{ toPersianNumber(movie?.user_rating)
                        || toPersianNumber(3.5)
                    }}</span>
                    <span class="flex items-start text-[#9DA5B2] text-sm font-yekan-fa">
                        (<span class="mr-1">رای</span>

                        <span>{{ toPersianNumber(12) }}</span>)
                    </span>
                </div>
                <span class="text-[#9DA5B2] text-sm font-yekan-fa">{{ toPersianNumber(movie?.year) ||
                    toPersianNumber(2023) }}</span>
            </div>

            <!--Different Application Rating-->
            <div class="flex justify-between">
                <div class="flex items-center gap-1">
                    <img src="../assets/img/metacriticIcon.png" class="rounded-sm" width="18" />
                    <span class="text-white font-extrabold text-sm">{{ toPersianNumber(movie?.metacritic) ||
                        toPersianNumber('3.5')
                        }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <img src="../assets/img/rattenIcon.png" width="18" class="rounded-sm" />
                    <span class="text-white font-extrabold text-sm">{{ toPersianNumber(movie?.rotten) ||
                        toPersianNumber('3.5') }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <img src="../assets/img/imdbIcon.png" width="18" class="rounded-sm" />
                    <span class="text-white font-extrabold text-sm">{{ toPersianNumber(movie?.imdb)
                        || toPersianNumber('3.5') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toPersianNumber } from '@/utils/persianNumber'

defineOptions({ name: 'VideoItem' })

const { video, movie } = defineProps<{ video: any, movie: object }>()


</script>
