import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  const movie = ref<any>({ episodes: [], user_rating: 0 })
  const video = ref<any>({})
  const voted = ref(false)
  const currentRating = ref(0)
  const loading = ref(false)

  const fetchMovie = async (id: string | number) => {
    loading.value = true
    try {
      const res = await $fetch(`https://ylnk.site/test/?action=info&id=${id}`)
      movie.value = res
      currentRating.value = res.user_rating || 0
    } finally {
      loading.value = false
    }
  }
  const fetchVideo = async (id: string | number) => {
    loading.value = true
    try {
      const res = await $fetch(`https://ylnk.site/test/?action=stream&id=${id}`)
      video.value = res
    } finally {
      loading.value = false
    }
  }

const onStarUpdate = async (movieId: string | number, value: number) => {
  if (voted.value) return
  voted.value = true

  try {
    const res = await $fetch(`https://ylnk.site/test/?action=rate&id=${movieId}`, {
      method: 'POST',
      body: { rate: value } 
    })

    if (res?.new_rating !== undefined) {
      movie.value.user_rating = res.new_rating
      currentRating.value = res.new_rating
    }
  } catch (error) {
    console.error('Failed to submit rating:', error)
    voted.value = false
  }
}


  return { movie, video, voted, currentRating,loading, fetchMovie, fetchVideo, onStarUpdate }
})
