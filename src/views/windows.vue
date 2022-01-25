<!--
 * @Author: xkloveme
 * @Date: 2021-12-29 13:49:13
 * @LastEditTime: 2021-12-30 21:37:25
 * @LastEditors: xkloveme
 * @Description: windows loading
 * @FilePath: /OS/src/views/windows.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="w-full px-2 py-1 sm:px-0">
    <TabGroup>
      <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
          <button :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-gray-700 ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]">
            {{ category }}
            <!-- <div class="bg-cover bg-center ..." :style="{'background-image': url(...)}"></div> -->
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="[
            'bg-green-500 rounded-xl p-3',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
          ]">
          <div v-for="(post,imgIndex) in posts" :key="imgIndex" class="relative ">
            <div @click="handleClick(post.pathName)" class="group cursor-pointer">
              <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img :src="post.img" :alt="post.title" class="w-full h-full object-center object-cover">
              </div>
              <p class="mt-1 text-lg text-center font-medium text-gray-900">
                预览-{{post.title}}(点击图片即可预览)
              </p>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { useRouter } from "vue-router";
export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup () {
    let categories = ref({
      'Windows XP': [
        {
          title: 'Winxp',
          pathName: 'winxp',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/6df985a1-6e74-4e81-9753-cd977ae3b0d4.png',
        }
      ],
      'Windows 7': [
        {
          title: 'Win7',
          pathName: 'win7',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/f7d90f1d-8d0d-4e7b-b5d0-ab235b898af2.jpg',
        },
        {
          title: "Vista",
          pathName: 'vista',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/ffc7ff8d-dde5-4c23-9555-6903d77a3000.jpg',
        },
      ],
      'Windows 8': [
        {
          title: 'Win8',
          pathName: 'win8',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/40625328-fb77-4fec-80ef-52493c84a40d.jpg',
        }
      ],
      'Windows 11': [
        {
          title: 'Win11',
          pathName: 'win11',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/e2e1e45c-a5f9-4fd8-8c98-7e70e289a847.jpg',
        }
      ],
      "Mac OS": [
        {
          title: 'Macos',
          pathName: 'macos',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/46681b4f-d10c-4191-b4bd-942919675ca2.jpg',
        }
      ],
    })
    const router = useRouter();
    let handleClick = (name) => {
      console.log('🐛 ~ file: windows.vue ~ line 117 ~ handleClick ~ name', name)
      let element = document.documentElement; // 整个网页
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      router.replace({ name: name });
    }
    return { categories, handleClick }
  },
}
</script>