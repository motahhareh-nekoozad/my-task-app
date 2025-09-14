<template>
    <div class="mx-auto px-4 py-6">
        <div class="flex flex-col lg:flex-row gap-8 items-start lg:items-stretch">

            <!-- Sidebar: Episodes -->
            <div class="w-1/3 flex flex-col h-full">
                <!-- Video list (scrollable) -->
                <div class="flex-1 overflow-y-auto flex flex-col gap-2">
                    <VideoItem v-for="episode in movie.episodes" :key="episode.id" :video="episode" :movie />
                </div>

                <!-- Bottom button -->
                <div class="mt-4 flex justify-center">
                    <button class="flex items-end gap-2 px-4 py-2  text-white font-semibold rounded-md transition">
                        <Icon icon="solar:arrow-left-outline" width="20" height="20" />
                        <p class="font-extrabold text-sm">مشاهده همه فیلم‌ها</p>
                    </button>
                </div>
            </div>


            <!-- Main Column: Video Player + Info -->
            <div class="lg:w-2/3 flex flex-col gap-4">
                <VideoPlayerContainer :movie="movie" :video="video" />
            </div>

        </div>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import VideoItem from '~/components/VideoItem.vue'
import VideoPlayerContainer from '~/components/base/container/VideoPlayerContainer.vue'

const route = useRoute()
const movie = ref<any>({ episodes: [] })
const video = ref<any>({})

onMounted(async () => {
    const id = route.params.id

    // Fetch movie info
    const res = await fetch(`https://ylnk.site/test/?action=info&id=${id}`)
    movie.value = await res.json()

    // Fetch video stream info
    const vRes = await fetch(`https://ylnk.site/test/?action=stream&id=${id}`)
    video.value = await vRes.json()
})
</script>
