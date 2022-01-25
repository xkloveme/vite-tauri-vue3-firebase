<!--
 * @Author: xkloveme
 * @Date: 2021-12-29 13:39:42
 * @LastEditTime: 2022-01-15 20:12:16
 * @LastEditors: xkloveme
 * @Description: win7 loading
 * @FilePath: /OS/src/views/update/vista.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="vista">
   <div className="tip">
        <img
          className="loading"
          src="//gitee.com/zyanggc/oss/raw/master/works/fake.update.win7.loading.gif"
        />
        <div className="txt">
          <span className="line">
            Installing Updates 5 of 68 -
            <span className="percent">
              {{num}}
            </span>
            complete.
          </span>
          <span className="line">Do not turn off your computer</span>
        </div>
      </div>
      <img
        className="logo"
        src="https://gitee.com/zyanggc/oss/raw/master/works/fake.update.win.vista.logo.png"
      /></div>
</template>


<script>
import { ref } from "vue";
export default {
  setup() {
    let num = ref("1%");
    let str = 1;
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
      } else if (e.detail) {
        // Firefox
        event.returnValue = false;
      }
    };
    // 覆盖鼠标滑动
    document.body.addEventListener(
      "wheel",
      (e) => {
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
      },
      { passive: false }
    );

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
    };
    return { num };
  },
};
</script>

<style lang="postcss" scoped>
.vista{
   position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('https://gitee.com/zyanggc/oss/raw/master/works/fake.update.win.vista.bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  .tip {
    position: relative;
    /* width: 35rem; */
    display: flex;
    align-items: center;
    margin-top: -2rem;
    .loading {
      margin-right: 1rem;
      position: absolute;
      left: -4rem;
      top: 50%;
      transform: translateY(-50%);
    }
    .txt {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      font-family: Segoe UI, Arial;
      line-height: 1.4;
      .line {
        text-align: center;
        white-space: nowrap;
      }
    }
  }
  .logo {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>