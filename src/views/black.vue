<!--
 * @Author: xkloveme
 * @Date: 2022-01-15 20:16:56
 * @LastEditTime: 2022-01-15 20:34:58
 * @LastEditors: xkloveme
 * @Description: 全黑屏
 * @FilePath: /OS/src/views/black.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="t-main-set">
    <section id="colors-list" class="p-4 t-page-position bg-secondary">
      <div class="color-wrap">
        <button
          class="color black"
          @click="changeColor('#000000')"
          data-color="#000000"
        ></button>
        <div class="color-description">屏幕变黑</div>
      </div>
      <div class="color-wrap">
        <button
          class="color white"
          @click="changeColor('#ffffff')"
          data-color="#ffffff"
        ></button>
        <div class="color-description">屏幕变白</div>
      </div>
      <div class="color-wrap">
        <button
          class="color green"
          @click="changeColor('#008000')"
          data-color="#008000"
        ></button>
        <div class="color-description">屏幕变绿</div>
      </div>
      <div class="color-wrap">
        <button
          class="color blue"
          @click="changeColor('#0000ff')"
          data-color="#0000ff"
        ></button>
        <div class="color-description">屏幕变蓝</div>
      </div>
      <div class="color-wrap">
        <button
          class="color red"
          @click="changeColor('#ff0000')"
          data-color="#ff0000"
        ></button>
        <div class="color-description">屏幕变红</div>
      </div>
      <div class="color-wrap">
        <button
          class="color purple"
          @click="changeColor('#800080')"
          data-color="#800080"
        ></button>
        <div class="color-description">屏幕变紫</div>
      </div>
    </section>
    <div id="fullscreenelement"></div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
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
    let color = ref("");
    let iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    function allscreen() {
      if (iOS) {
        if (!vid) {
          let e = document.createElement("video");
          e.src = color.substring(1) + ".mp4?v=2";
          e.autoplay = true;
          e.loop = true;
          e.playsInline = true;
          e.controls = true;
          document.body.appendChild(e);
          e.addEventListener(
            "loadedmetadata",
            function () {
              e.webkitEnterFullscreen();
            },
            false
          );
          vid = e;
        } else {
          vid.src = color.substring(1) + ".mp4?v=2";
          vid.addEventListener(
            "loadedmetadata",
            function () {
              vid.webkitEnterFullscreen();
            },
            false
          );
        }
      }

      if (fullscreenelement.requestFullscreen) {
        fullscreenelement.requestFullscreen();
      } else if (fullscreenelement.webkitRequestFullscreen) {
        /* Safari */
        fullscreenelement.webkitRequestFullscreen();
      } else if (fullscreenelement.msRequestFullscreen) {
        /* IE11 */
        fullscreenelement.msRequestFullscreen();
      }
    }
    function changeColor(color) {
      let fullscreenelement = document.getElementById("fullscreenelement");
      fullscreenelement.style.backgroundColor = color;
      allscreen(color);
    }
    return { changeColor };
  },
};
</script>
<style lang="postcss" scoped>
#colors-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  max-width: 95%;
  margin: 0 auto;
}
.color {
  width: 180px;
  height: 100px;
  border-radius: 19px;
  border: 2px solid #e3e3e3;
  cursor: pointer;
}
.color.black {
  background: #000;
}
.color.white {
  background: #ffffff;
}
.color.green {
  background: #008000;
}
.color.blue {
  background: #0000ff;
}
.color.red {
  background: #ff0000;
}
.color.purple {
  background: #800080;
}
.color-wrap {
  margin: 20px 0;
  display: flex;
  align-items: center;
}
.color-description {
  margin-left: 30px;
  font-size: 20px;
}
section {
  padding: 15px;
}
h1 {
  text-align: center;
  font-size: 44px;
  margin: 30px 0 27px;
}
h2 {
  text-align: center;
  margin: 42px 0;
  font-size: 27px;
}
.top-section .image {
  display: flex;
  justify-content: center;
}
.info {
  text-align: center;
  margin: 0 0 37px 0;
}
.info-title {
  font-weight: bold;
  font-size: 18px;
  margin: 9px 0;
}
footer {
  text-align: center;
  padding: 17px 0;
}
video {
  width: 0;
  height: 0;
}
@media (min-width: 561px) {
  h1 {
    margin-top: 35px;
  }
  .color {
    width: 340px;
  }
}
</style>
