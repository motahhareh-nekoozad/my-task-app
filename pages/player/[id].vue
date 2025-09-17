<template>
    <div class="mx-auto px-4 py-6 min-h-screen">
        <BaseButton class="mb-4" button-type="secondary" label="بازگشت" icon="iconamoon:arrow-left-2-thin">
            <template>
                <Icon icon="iconamoon:arrow-left-2-thin" width="    16" height="16"
                    class="text-[#5A5E66] hover:cursor-pointer" />
            </template>
        </BaseButton>
        <div class="flex flex-col lg:flex-row gap-8 items-stretch min-h-full">

            <!-- Sidebar: Episodes -->
            <div class="w-full lg:w-1/3 flex flex-col h-full ">
                <VideoOptions :movie="movie" />

                <!-- Video list -->
                <div class="flex-1 flex flex-col gap-2 overflow-y-auto hide-scrollbar max-h-[440px]">
                    <VideoItem v-for="episode in movie.episodes" :key="episode.id" :video="episode" :movie="movie" />
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
            <div class="lg:w-2/3 flex flex-col gap-4 h-full ">
                <VideoPlayerContainer :movie="movie" :video="video" class="flex-1 " />
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

<style scoped>
/*   hide scroll */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
}

.hide-scrollbar {
    -ms-overflow-style: none;
    /* IE 10+ */
    scrollbar-width: none;
    /* Firefox */
}
</style>
