<template>
    <div class="text-white text-base  items-center font-semibold px-4 py-2  hover:bg-gray-700 rounded cursor-pointer">
        {{ item }}
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    item: string
}>()
</script>