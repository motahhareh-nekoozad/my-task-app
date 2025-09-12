<template>
    <div class="bg-[#242629] h-16 flex items-center px-[120px]">
        <div class="w-full flex items-center  justify-between">
            <!-- Menu Icon -->
            <div class="flex items-center gap-2">
                <div v-for="icon in icons" :key="icon">
                    <MenuIcon :icon />

                </div>
                <Icon icon="iconamoon:arrow-left-2-thin" width="16" height="16"
                    class="text-[#5A5E66] hover:cursor-pointer" />
            </div>
            <div class="flex items-center justify-center">
                <!-- Menu Items -->
                <div class="flex space-x-2">
                    <div v-for="item in menuItems" :key="item" class="hover:cursor-pointer">
                        <MenuItem :item="item" />
                    </div>
                </div>
                <img src="../../assets/img/logo.png" width="128" height="40" />
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import MenuItem from '../base/menu/MenuItem.vue'
import MenuIcon from '../base/menu/MenuIcon.vue'


const menuItems = ['دسته بندی فیلم‌ها', 'فیلم', 'سریال', 'بازیگران', 'جدیدترین دوبله‌ها']

const icons = ['ri:account-circle-line', 'mingcute:search-line', 'ph:bookmarks-simple-light', 'mingcute:notification-line']

</script>