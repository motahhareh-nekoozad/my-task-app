<template>
    <div class="bg-[#242629] h-16 flex items-center lg:px-[120px] px-6">
        <div class="w-full flex  items-center justify-between">
            <!-- Menu Icon -->
            <div class="flex items-center gap-2">
                <!-- responsive -->
                <div class="relative w-12 h-12 lg:hidden">
                    <div v-for="(icon, index) in icons" :key="icon"
                        class="absolute inset-0 transition-opacity duration-300"
                        :class="currentIndex === index ? 'opacity-100' : 'opacity-0'">
                        <MenuIcon :icon="icon" />
                    </div>
                </div>

                <!-- Desktop-->
                <div class="hidden lg:flex items-center gap-2">
                    <MenuIcon v-for="icon in icons" :key="icon" :icon="icon" />
                </div>

                <Icon icon="iconamoon:arrow-left-2-thin" width="16" height="16"
                    class="text-[#5A5E66] hover:cursor-pointer lg:hidden" @click="nextIcon" />
            </div>

            <div class="flex items-center justify-between">
                <!-- Menu Items -->
                <div class="flex flex-row-reverse space-x-2">
                    <div v-for="item in menuItems" :key="item" class="hover:cursor-pointer lg:flex hidden">
                        <MenuItem :item="item" />
                    </div>
                </div>
                <img src="../../assets/img/logo.png" width="128" height="40" />
                <div class="flex lg:hidden">
                    <Icon icon="ci:hamburger-md" class="text-white size-8 cursor-pointer" />

                </div>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import MenuItem from '../base/menu/MenuItem.vue'
import MenuIcon from '../base/menu/MenuIcon.vue'


const menuItems = ['دسته بندی فیلم‌ها', 'فیلم', 'سریال', 'بازیگران', 'جدیدترین دوبله‌ها']

const icons = ['ri:account-circle-line', 'mingcute:search-line', 'ph:bookmarks-simple-light', 'mingcute:notification-line']
const currentIndex = ref(0)

const nextIcon = () => {
    currentIndex.value = (currentIndex.value + 1) % icons.length
}

</script>