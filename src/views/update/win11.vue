<!--
 * @Author: xkloveme
 * @Date: 2021-12-29 13:39:42
 * @LastEditTime: 2022-01-15 20:09:58
 * @LastEditors: xkloveme
 * @Description: win11 loading
 * @FilePath: /OS/src/views/update/win11.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="win11">
    <div class="center">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="txt">
        <span class="line">Configuring Windows Updates</span>
        <span class="line"> {{ num }} complete. </span>
        <span class="line">Do not turn off your computer.</span>
      </div>
    </div>
    <div class="tip">Your PC will restart several times</div>
  </div>
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
.win11 {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #006dae;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  user-select: none;
  font-family: Segoe UI Light, Segoe UI, Arial;
  font-size: 23px;
  color: #fff;
  font-weight: normal;
  .loading {
    position: relative;
    width: 34px;
    height: 34px;
    margin: auto;
  }
  .loading span {
    position: absolute;
    width: 30px;
    height: 30px;
    opacity: 0;
    transform: rotate(225deg);
    animation-iteration-count: infinite;
    animation-name: load;
    animation-duration: 5.5s;
    &:after {
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background: #fff;
    }
  }
  .loading span:last-child {
    margin-right: 0px;
  }
  @-webkit-keyframes load {
    0% {
      transform: rotate(225deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    7% {
      transform: rotate(345deg);
      animation-timing-function: linear;
    }
    30% {
      transform: rotate(455deg);
      animation-timing-function: ease-in-out;
    }
    39% {
      transform: rotate(690deg);
      animation-timing-function: linear;
    }
    70% {
      transform: rotate(815deg);
      opacity: 1;
      animation-timing-function: ease-out;
    }
    75% {
      transform: rotate(945deg);
      animation-timing-function: ease-out;
    }
    76% {
      transform: rotate(945deg);
      opacity: 0;
    }
    100% {
      transform: rotate(945deg);
      opacity: 0;
    }
  }
  .loading span:nth-child(1) {
    -webkit-animation-delay: 0.13s;
  }
  .loading span:nth-child(2) {
    -webkit-animation-delay: 0.26s;
  }
  .loading span:nth-child(3) {
    -webkit-animation-delay: 0.39s;
  }
  .loading span:nth-child(4) {
    -webkit-animation-delay: 0.52s;
  }
  .loading span:nth-child(5) {
    -webkit-animation-delay: 0.65s;
  }
  .center {
    position: relative;
    /* width: 35rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2rem;
    .txt {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      .line {
        line-height: 1.3;
        text-align: center;
        white-space: nowrap;
      }
    }
  }
  .tip {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
