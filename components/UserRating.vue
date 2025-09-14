<template>
    <div class="flex items-center gap-1">
        <svg v-for="n in maxStars" :key="n" :class="[
            'w-6 h-6 cursor-pointer',
            n <= Math.round(currentRating) ? 'text-yellow-400' : 'text-gray-300'
        ]" fill="currentColor" viewBox="0 0 20 20" @click="rate(n)">
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.963a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.374 2.454a1 1 0 00-.364 1.118l1.286 3.963c.3.921-.755 1.688-1.54 1.118l-3.374-2.454a1 1 0 00-1.176 0l-3.374 2.454c-.784.57-1.838-.197-1.539-1.118l1.285-3.963a1 1 0 00-.364-1.118L2.038 9.39c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.963z" />
        </svg>
        <span class="ml-2">{{ currentRating.toFixed(1) }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const props = defineProps({
    movieId: { type: [String, Number], required: true },
    initialRating: { type: Number, default: 0 },
    maxStars: { type: Number, default: 5 }
})

const currentRating = ref(props.initialRating)
const votedKey = `voted-${props.movieId}`
const voted = useLocalStorage(votedKey, false)

const rate = async (value: number) => {
    if (voted.value) return
    currentRating.value = (currentRating.value + value) / 2
    voted.value = true
    // Send to API
    await fetch(`https://ylnk.site/test/?action=rate&id=${props.movieId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rate: value })
    })
}
</script>
