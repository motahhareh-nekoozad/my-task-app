<template>
    <div class="flex justify-start items-center gap-2">


        <!-- Render only if StarRating is loaded -->
        <component v-if="StarRating" :is="StarRating" :show-rating="false" :star-size="25" active-color="#F3B209"
            :padding="5" :rounded-corners="true"
            :star-points="[50, 0, 61, 35, 98, 35, 68, 57, 79, 91, 50, 70, 21, 91, 32, 57, 2, 35, 39, 35]"
            :increment="0.25" :rating="initialRating / 2" :max-rating="5" @rating-selected="onStarUpdate" />
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const StarRating = ref<any>(null)

onMounted(async () => {
    const module = await import('vue-star-rating')
    StarRating.value = module.default
})

const props = defineProps({
    movieId: { type: [String, Number], required: true },
    initialRating: { type: Number, default: 0 }
})

const currentRating = ref(props.initialRating)
const votedKey = `voted-${props.movieId}`
const voted = useLocalStorage(votedKey, false)

const onStarUpdate = async (value: number) => {
    if (voted.value) return
    currentRating.value = (props.initialRating + value * 2) / 2
    voted.value = true

    await fetch(`https://ylnk.site/test/?action=rate&id=${props.movieId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rate: value * 2 })
    })
}
</script>
