<template>
    <div class="mx-auto px-4 py-6 min-h-screen">
        <div class="flex justify-between mb-2">
            <BaseButton class="mb-4" button-type="secondary" label="بازگشت" icon="iconamoon:arrow-left-2-thin" />

            <div class="flex gap-2 lg:hidden">
                <MenuIcon icon="mynaui:share" class="bg-secondary px-3 py-3" />
                <MenuIcon icon="solar:bookmark-linear" class="bg-secondary px-3 py-3" />
            </div>

        </div>

        <div class="flex flex-col-reverse lg:flex-row gap-8 items-stretch  min-h-full">
            <!-- Sidebar: Episodes -->
            <div v-loading="store?.movieInfoLoading" class="w-full lg:w-1/3 flex flex-col h-full">
                <!-- VideoOptions emits updateRating -->
                <VideoOptions class="hidden lg:flex" @update-rating="handleRating" />

                <!-- Video list -->
                <div class="flex-1 flex flex-col gap-2 overflow-y-auto max-h-[440px] hide-scrollbar">
                    <VideoItem v-for="episode in store.movie.episodes" :key="episode.id" :video="episode"
                        :movie="store.movie" />
                </div>
                <!-- Bottom button -->
                <div class="mt-4 flex justify-center">
                    <button class="flex items-end gap-2 px-4 py-2 text-white font-semibold rounded-md transition">
                        <Icon icon="solar:arrow-left-outline" width="20" height="20" />
                        <p class="font-extrabold text-sm font-yekan-fa">مشاهده همه فیلم‌ها</p>
                    </button>
                </div>
            </div>

            <!-- Main Column: Video Player + Info -->
            <div v-loading="store.movieLoading" class="lg:w-2/3 flex flex-col gap-4 h-full">

                <VideoPlayerContainer :movie="store.movie" :video="store.video" class="flex-1" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '~/stores/movie'
import VideoItem from '~/components/VideoItem.vue'
import VideoPlayerContainer from '~/components/base/container/VideoPlayerContainer.vue'

const route = useRoute()
const store = useMovieStore()

onMounted(async () => {
    const id = route.params.id
    await store.fetchMovie(id)
    await store.fetchVideo(id)
})

const handleRating = async (star: number) => {
    const movieId = store.movie.id

    await store.onStarUpdate(movieId, star)
}
</script>


<style>
/* global.css یا scoped اگر میخوای */
.hide-scrollbar {
    -ms-overflow-style: none;
    /* IE 10+ */
    scrollbar-width: none;
    /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
}
</style>