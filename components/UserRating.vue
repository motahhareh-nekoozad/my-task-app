<template>
    <div class="flex items-center gap-2">
        <svg v-for="star in maxStars" :key="star" @mouseenter="!isVoted && (hoverValue = star)"
            @mouseleave="!isVoted && (hoverValue = 0)" @click="!isVoted && rate(star)"
            :class="['cursor-pointer transition-colors', isVoted ? 'opacity-50 !cursor-not-allowed' : '']" width="30"
            height="30" viewBox="0 0 24 24" fill="none" stroke="#F3B209" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <polygon :fill="starFill(star)" points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useMovieStore } from '~/stores/movie'

const props = defineProps({
    movieId: { type: [String, Number], required: true },
    initialRating: { type: Number, default: 0 },
    maxStars: { type: Number, default: 5 }
})

const emit = defineEmits<{
    (e: 'update-rating', value: number): void
}>()

const store = useMovieStore()
const hoverValue = ref(0)
const ratingValue = ref(props.initialRating)
const isVoted = ref(false)
const votedKey = `voted-${props.movieId}`

// Display rating for UI
const displayRating = computed(() => (hoverValue.value ? hoverValue.value : ratingValue.value).toFixed(1))

// Fill logic for stars
const starFill = (star: number) => {
    const value = hoverValue.value || ratingValue.value
    return star <= value ? '#F3B209' : 'transparent'
}

// Check if user already voted
onMounted(() => {
    const localVote = localStorage.getItem(votedKey)
    if (localVote === 'true' || store.voted) {
        isVoted.value = true
    }
})

// Click handler
const rate = async (star: number) => {
    if (isVoted.value) return

    ratingValue.value = star
    isVoted.value = true
    localStorage.setItem(votedKey, 'true')

    // Call store API method
    await store.onStarUpdate(props.movieId, star)

    // Update local rating from store (server might return new_rating)
    ratingValue.value = store.movie.user_rating || ratingValue.value

    // Emit to parent
    emit('update-rating', ratingValue.value)
}

// Keep in sync with parent prop
watch(() => props.initialRating, (val) => {
    ratingValue.value = val
})
</script>

<style scoped>
svg polygon {
    transition: fill 0.2s;
}
</style>
