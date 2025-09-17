<script setup>

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    class: 
})

</script>

<template>
    <div class="flex items-center bg-[#1B1C1F] p-3.5 rounded-md hover:cursor-pointer hover:bg-gray-700" :class="class">
        <Icon :icon width="24" height="24" class="text-white" />
    </div>
</template>
