<!--
 * @Author: xkloveme
 * @Date: 2021-12-29 13:39:42
 * @LastEditTime: 2022-01-15 20:33:51
 * @LastEditors: xkloveme
 * @Description: xp loading
 * @FilePath: /OS/src/views/update/winxp.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="xp"  :style="{cursor: `url(http://cuijiahua.com/xxx/cursor_1.png), default`}">
    <div class="logo"></div>
    <div class="txt">
      <span class="line">
        Installing Windows Updates...
        {{num}}
      </span>
      <span class="line">Do not turn off or unplug your computer.</span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup () {
    let num = ref('1%')
    let str = 1
    var t = setInterval(function () {
      str++;
      if (str == 100) {
        clearInterval(t);
      }
      num.value = `${str}%`;
    }, 100000);
    const keyCodeMap = {
      // 91: true, // command
      61: true,
      107: true, // 数字键盘 +
      109: true, // 数字键盘 -
      173: true, // 火狐 - 号
      187: true, // +
      189: true, // -
    };
    // 覆盖ctrl||command + ‘+’/‘-’
    document.onkeydown = function (event) {
      window.event.returnValue = false;
      if (window.event.keyCode == 27) {
        window.event.keyCode = 0;
        window.event.returnValue = false;
      }
      const e = event || window.event;
      const ctrlKey = e.ctrlKey || e.metaKey;
      if (ctrlKey && keyCodeMap[e.keyCode]) {
        e.preventDefault();
      } else if (e.detail) { // Firefox
        event.returnValue = false;
      }
    };
    // 覆盖鼠标滑动
    document.body.addEventListener('wheel', (e) => {
      if (e.ctrlKey) {
        if (e.deltaY < 0) {
          e.preventDefault();
          return false;
        }
        if (e.deltaY > 0) {
          e.preventDefault();
          return false;
        }
      }
    }, { passive: false });

    window.oncontextmenu = function (e) {
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
      //取消默认的浏览器自带右键 很重要！！
      e.preventDefault();
    }
    return { num };
  },
};
</script>

<style lang="postcss" scoped>
* {
	cursor: url(cur/Handwriting.cur), default;
}
.xp {
  position: relative;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  background-image: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/1bebd824-4a0c-4cd6-992d-6f9ca9d9b3d5.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding-right: 40%;
  text-align: right;
  color: #fff;
  user-select: none;
  cursor: url(http://cuijiahua.com/xxx/cursor_1.png), default;
}
.logo {
  width: 142px;
  height: 93px;
  background-position: 164px 0px;
  background-image: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/723ec2e9-2858-4bff-afc9-d55b50a7f021.png');
}
.tip {
  position: relative;
  /* width: 35rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -1rem;
  margin-right: -8rem;
}
.txt {
  display: flex;
  flex-direction: column;
}
.line {
  font-family: Tahoma, Arial;
  font-size: 20px;
  color: #fff;
  font-weight: normal;
  line-height: 1.5;
  text-align: right;
  white-space: nowrap;
}
</style>