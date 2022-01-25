<!--
 * @Author: xkloveme
 * @Date: 2021-12-30 09:11:00
 * @LastEditTime: 2022-01-15 20:09:49
 * @LastEditors: xkloveme
 * @Description: Mac OS
 * @FilePath: /OS/src/views/update/macos.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="mac">
    <div class="tip">
        <img
          class="logo"
          src="https://gitee.com/zyanggc/oss/raw/master/works/fake.update.mac.logo.png"
        />
        <img
          class="progress"
          src="https://gitee.com/zyanggc/oss/raw/master/works/fake.update.mac.progress.gif"
        />
      </div></div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.mac{
    position: relative;
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  .tip {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      width: 5.6rem;
    }
    .progress {
      margin-top: 5rem;
    }
  }
}
</style>