<template>
    <div class="bg-[#242629] h-16 flex items-center lg:px-[120px] px-6">
        <div class="w-full flex items-center justify-between">

            <!--Icon & left Navbar-->
            <div class="flex items-center gap-2">

                <!-- Mobile Icon Slider -->
                <div class="relative w-12 h-12 lg:hidden">
                    <div v-for="(icon, index) in icons" :key="icon"
                        class="absolute inset-0 transition-opacity duration-300"
                        :class="currentIndex === index ? 'opacity-100' : 'opacity-0'">
                        <MenuIcon :icon="icon" />
                    </div>
                </div>

                <!-- Desktop Icons -->
                <div class="hidden lg:flex items-center gap-2">
                    <MenuIcon v-for="icon in icons" :key="icon" :icon="icon" />
                </div>

                <!-- Mobile slider next button -->
                <Icon icon="iconamoon:arrow-left-2-thin" width="16" height="16"
                    class="text-[#5A5E66] hover:cursor-pointer lg:hidden" @click="nextIcon" />
            </div>

            <!--Icons & right navbar-->
            <div class="flex items-center justify-between gap-4 relative">

                <!-- Desktop Menu Items -->
                <div class="hidden lg:flex flex-row-reverse gap-4 items-center">
                    <MenuItem v-for="item in menuItems" :key="item" :item="item" />
                </div>

                <!-- Logo -->
                <img src="../../assets/img/logo.png" width="128" height="40" />

                <!-- Mobile Hamburger -->
                <div class="flex lg:hidden">
                    <Icon icon="ci:hamburger-md" class="text-white size-8 cursor-pointer" @click="toggleDrawer" />
                </div>
            </div>
        </div>

        <!-- Drawer for mobile with slide animation -->
        <div class="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300"
            :class="isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'"
            @click="toggleDrawer">
            <!-- Drawer panel -->
            <div class="fixed top-0 right-0 h-full w-96 bg-[#242629] shadow-lg p-4 transform transition-transform duration-300"
                :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-full'" @click.stop>
                <div class="flex flex-col gap-4 mt-10 text-right">
                    <div v-for="item in menuItems" :key="item" class="hover:cursor-pointer text-white text-lg">
                        <MenuItem :item="item" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuItem from '../base/menu/MenuItem.vue'
import MenuIcon from '../base/menu/MenuIcon.vue'
import { Icon } from '@iconify/vue'

const menuItems = [
    'دسته بندی فیلم‌ها',
    'فیلم',
    'سریال',
    'بازیگران',
    'جدیدترین دوبله‌ها'
]

const icons = [
    'ri:account-circle-line',
    'mingcute:search-line',
    'ph:bookmarks-simple-light',
    'mingcute:notification-line'
]

const currentIndex = ref(0)
const isDrawerOpen = ref(false)

// change icon in mobile mode
const nextIcon = () => {
    currentIndex.value = (currentIndex.value + 1) % icons.length
}

// handle visibility for drawer in mobile mode
const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value
}
</script>
