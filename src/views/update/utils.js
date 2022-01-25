/*
 * @Author: xkloveme
 * @Date: 2021-12-30 20:25:37
 * @LastEditTime: 2021-12-30 20:30:39
 * @LastEditors: xkloveme
 * @Description: utils 工具
 * @FilePath: /OS/src/utils.js
 * @Copyright © xkloveme
 */
export default function AddNumbers () {
  var num = 0;
  var t = setInterval(function () {
    num++;
    if (num == 100) {
      clearInterval(t);
    }
    return `${num}%`;
  }, 100000);
}