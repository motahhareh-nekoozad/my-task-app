<template>
    <button class="flex items-center gap-1 p-3 rounded-e rounded-s"
        :class="buttonType === 'primary' ? 'bg-primary' : 'bg-secondary'">
        <p class="font-yekan-fa font-extrabold text-white text-xs" :class="underlinedText ? 'underline' : ''">{{ label }}</p>
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
    },
    underlinedText: {
        default: false
    }
})
</script>
