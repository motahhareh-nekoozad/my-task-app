<script setup lang="ts">
import { ref, watch } from 'vue'

defineOptions({
    name: 'BaseSelect'
})

const selected = ref<any>(null)
const open = ref(false)

const props = defineProps({
    placeholder: {
        type: String,
        default: 'کیفیت مدنظر را انتخاب کنید'
    },
    options: {
        type: Array,
        default: () => []
    },
    modelValue: {
        type: [Object, String, Number],
        default: null
    }
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


<template>
    <div class="relative w-58">
        <!-- Selected box -->
        <div class="bg-[#242629] text-white px-3 py-3.5 flex items-center justify-center rounded-md cursor-pointer"
            @click="open = !open">
            <Icon class="flex items-center justify-center text-white" icon="iconamoon:arrow-down-2-thin" width="14" />
            <span class="font-yekan-en">
                {{ selected?.label ?? placeholder }}

            </span>
        </div>

        <!-- Dropdown -->
        <div v-if="open" class="absolute left-0 right-0 bg-[#242629] border border-gray-700 rounded-md mt-1 z-10">
            <div v-for="option in options" :key="option" @click="selectOption(option)"
                class="px-3 py-2 hover:bg-gray-700 cursor-pointer text-white font-yekan-en">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>
