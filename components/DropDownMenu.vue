<template>
    <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5" :class="visible ? 'block' : 'hidden'">
        <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span class="flex flex-row items-center content-center">
                    <share-2-icon size="1x" class="mr-3"></share-2-icon>
                    <span>
                        Share
                    </span>
                </span>
            </div>
            <div class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span class="flex flex-row items-center content-center">
                      
                      <archive-icon size="1x" class="mr-3"></archive-icon>

                    <span>
                        View archives
                    </span>
                </span>
            </div>
            <div class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span class="flex flex-row  items-center content-center">
                      <columns-icon size="1x" class="mr-3"></columns-icon>

                    <span>
                        Compare
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { Share2Icon } from 'vue-feather-icons'
import { ArchiveIcon } from 'vue-feather-icons'
import { ColumnsIcon } from 'vue-feather-icons'



    export default {
          components: {
    Share2Icon,
    ArchiveIcon,
    ColumnsIcon
  },
        props: ["visible"]
    }
</script>

<style lang="scss" scoped>

</style>