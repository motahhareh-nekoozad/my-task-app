<template>
    <button class="flex items-center gap-1 p-3 rounded-e rounded-s"
        :class="buttonType === 'primary' ? 'bg-primary' : 'bg-secondary'">
        <p class="font-extrabold text-white text-xs">{{ label }}</p>
    </button>
</template>

<script setup>
const props = defineProps({
    loading: {
        default: false
    },
    loadingColor: {
        default: '#FFF'
    },
    isDisabled: {
        default: false
    },
    label: {
    },
    buttonType: {
        default: 'primary'
    }
})
</script>
