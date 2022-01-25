<template>
  <nav class="t-transition-effect nav-style px-2 md:px-0">
    <div class="t-main-set flex justify-between items-center">
      <h1 class="font-bold text-primary cursor-pointer" @click="goToHome">
        <font-awesome-icon :icon="['fas', 'fish']" class="mr-1" />
        浑水
      </h1>
      <div class="hidden md:block">
        <router-link :to="{ name: 'Home' }" class="nav-link t-transition-effect">首页
        </router-link>
         <router-link :to="{ name: 'Black' }" class="nav-link t-transition-effect"> 全屏色
        </router-link>
        <router-link :to="{ name: 'windows' }" class="nav-link t-transition-effect"> 摸鱼
        </router-link>
        <a class="
            t-transition-effect
            py-2
            px-4
            ml-4
            font-heading
            rounded
            cursor-pointer
            bg-error
            hover:bg-opacity-75
          " v-if="user" @click="signOutUser">登出
        </a>
        <router-link :to="{ name: 'Login' }" v-else class="nav-link t-transition-effect">
          登录
        </router-link>
        <a href="https://github.com/xkloveme/os" target="_blank" class="t-transition-effect ml-4">
          <font-awesome-icon :icon="['fab', 'github']" class="mr-2 font-20" />
        </a>
      </div>
      <!-- <div class="hidden md:block" >
        <router-link :to="{ name: 'Home' }" class="nav-link t-transition-effect"
          >首页
        </router-link>
        <router-link
          :to="{ name: 'Login' }"
          class="nav-link t-transition-effect"
        >
          登录
        </router-link>
      </div> -->
      <div class="block md:hidden">
        <Menu />
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthState, useSignOut } from "@/firebase";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import Menu from "./Menu.vue";
export default defineComponent({
  components: { Menu },
  setup () {
    const { user } = useAuthState();
    const router = useRouter();
    const signOutUser = async () => {
      await useSignOut();
      await router.replace({ name: "Login" });
    };
    const goToHome = () => {
      router.push({ name: "Home" });
    };
    return { user, signOutUser, goToHome };
  },
});
</script>

<style lang="postcss" scoped>
.nav-style {
  @apply py-4 px-2 top-0 z-10 sticky
  shadow-md bg-black
  bg-opacity-20
  backdrop-filter backdrop-blur-sm;
}
.nav-link {
  @apply py-2 px-4 ml-2 font-heading rounded
  hover:bg-primary;
}
</style>