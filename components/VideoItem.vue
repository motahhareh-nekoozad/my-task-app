<template>
    <div
        class="w-full p-2 flex flex-row-reverse items-start gap-3 rounded-lg hover:shadow-lg hover:bg-gray-800 transition cursor-pointer">
        <!-- Image  with overlay icons -->
        <div class="relative flex-shrink-0 w-24 h-24">
            <BaseImageItem :src="video?.poster" class="w-full h-full rounded-md object-cover" />
        </div>

        <div class="flex-1 gap-1 text-right flex flex-col  justify-between">
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
                    <span class="text-white font-extrabold text-sm font-yekan-en">{{ movie?.user_rating || '3.5' }}</span>
                    <span class="text-[#9DA5B2] text-sm font-yekan-fa">{{ video?.score || '(۱۲رای)' }}</span>
                </div>
                <span class="text-[#9DA5B2] text-sm font-yekan-en">{{ movie?.year || '۲۰۲۳' }}</span>
            </div>

            <!--Different Application Rating-->
            <div class="flex justify-between">
                <div class="flex items-center gap-1">
                    <img src="../assets/img/metacriticIcon.png" class="rounded-md" width="18" />
                    <span class="text-white font-extrabold text-sm">{{ movie?.metacritic || '3.5' }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <img src="../assets/img/rattenIcon.png" width="18" class="rounded-md" />
                    <span class="text-white font-extrabold text-sm">{{ movie?.rotten || '3.5' }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <img src="../assets/img/imdbIcon.png" width="18" class="rounded-md" />
                    <span class="text-white font-extrabold text-sm">{{ movie?.imdb || '3.5' }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'VideoItem' })

const { video, movie } = defineProps<{ video: any, movie: object }>()


</script>
