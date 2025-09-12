<script setup lang="ts">
import Header from '~/components/base/Header.vue'
</script>

<template>
    <div class="bg-[#1b1c1f] min-h-screen ">
        <Header />
        <div class="bg-[#1b1c1f] min-h-screen p-4 px-[120px]">
            <slot /> <!-- page content injected here -->
        </div>
    </div>
</template>