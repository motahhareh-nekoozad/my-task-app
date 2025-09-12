<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<number | null>(null)
const open = ref(false)


const props = defineProps({
    placeholder: {
        type: String,
        default: 'کیفیت مدنظر را انتخاب کنید'
    },
    options: {
        type: Array,
    }
})


const selectOption = (option: number) => {
    selected.value = option
    open.value = false
}
</script>

<template>
    <div class="relative w-64">
        <!-- Selected box -->
        <div class="bg-[#242629] text-white px-3 py-2 flex  items-center justify-between rounded-md cursor-pointer"
            @click="open = !open">
            <Icon class="flex items-center justify-center" icon="iconamoon:arrow-down-2-thin" width="16" />
            <span>
                {{ selected?.label ?? placeholder }}

            </span>
        </div>

        <!-- Dropdown -->
        <div v-if="open" class="absolute left-0 right-0 bg-[#242629] border border-gray-700 rounded-md mt-1 z-10">
            <div v-for="option in options" :key="option" @click="selectOption(option)"
                class="px-3 py-2 hover:bg-gray-700 cursor-pointer text-white">
                {{ option.label }}
            </div>
        </div>
    </div>
</template>
