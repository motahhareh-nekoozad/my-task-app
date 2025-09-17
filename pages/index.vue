<template>
    <div class="flex items-center justify-center min-h-screen">
        <BaseButton @handleClick="handleClick" label="بریم ویدیو رو ببینیم" />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = () => {
    router.push('/player/2501')
}
</script>