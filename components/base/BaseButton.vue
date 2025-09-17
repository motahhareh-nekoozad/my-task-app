<template>
    <button class="flex items-center gap-1 p-3 rounded-e rounded-s transition-transform  duration-200
           disabled:opacity-50 disabled:cursor-not-allowed
           hover:scale-105 hover:shadow-md"
        :class="buttonType === 'primary' ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'"
        :disabled="isDisabled || loading">
        <div class="flex items-center gap-2 justify-start">
            <!-- icon -->
            <Icon v-if="icon" :icon="icon" :class="classIcon ?? 'text-white'" />

            <!-- text -->
            <p class="font-yekan-fa font-extrabold text-white text-xs" :class="underlinedText ? 'underline' : ''">
                {{ label }}
            </p>
        </div>
    </button>
</template>

<script setup>
const props = defineProps({
    loading: { default: false },
    loadingColor: { default: '#FFF' },
    isDisabled: { default: false },
    label: {},
    buttonType: { default: 'primary' },
    underlinedText: { default: false },
    icon: {},
    classIcon: {}
})
</script>
