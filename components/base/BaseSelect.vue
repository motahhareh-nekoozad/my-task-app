<template>
    <div class="relative  w-58"> <!-- relative container -->
        <!-- Selected box -->
        <div class="bg-[#242629] text-white px-2 py-3.5 flex items-center justify-between rounded-md cursor-pointer"
            @click="open = !open">
            <Icon class="flex items-center justify-center text-white" icon="iconamoon:arrow-down-2-thin" width="14" />
            <span class="font-yekan-en">{{ selected?.label ?? placeholder }}</span>
        </div>

        <!-- Dropdown -->
        <div v-show="open"
            class="absolute left-0 px-1 top-full mt-1 bg-[#242629] border border-gray-700 rounded-md z-10 overflow-hidden max-h-60  scroll-py-1">
            <div v-for="option in options" :key="option.value ?? option.label" @click="selectOption(option)"
                class="px-3 py-2 hover:bg-gray-700 cursor-pointer text-white font-yekan-en text-right">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'

defineOptions({
    name: 'BaseSelect'
})

const selected = ref<any>(null)
const open = ref(false)

const props = defineProps({
    placeholder: { type: String, default: 'کیفیت مدنظر را انتخاب کنید' },
    options: { type: Array, default: () => [] },
    modelValue: { type: [Object, String, Number], default: null }
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: any): void
}>()

watch(
    () => props.modelValue,
    (newVal) => {
        selected.value = newVal
    },
    { immediate: true }
)

const selectOption = (option: any) => {
    selected.value = option
    emit('update:modelValue', option)
    open.value = false
}
</script>
