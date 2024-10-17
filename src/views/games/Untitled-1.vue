<script setup lang="ts">
// import { Games } from "@/utils/games";
class Games {
  extent: number; // 明确声明属性的类型
  board: number[][];
  constructor() {
    this.extent = 4; // 在构造函数中初始化属性
    // this.board = Array(this.extent).fill(Array(this.extent).fill(0));
    this.board = [
      [2, 0, 0, 2],
      [4, 2, 2, 0],
      [8, 4, 4, 0],
      [4, 0, 2, 4],
    ];
  }

  createBoard() {
    this.extent = 4; // 修改属性
  }
  // 左移
  moveLeft() {
    for (let i = 0; i < this.extent; i++) {
      let row = this.board[i];
      // console.log(row);
      // 向右合并等值
      const list: number[] = row
        .filter((item: number) => item) // 类型守卫，确保 item 是 number
        .reduce((pre: number[], cur: number) => {
          const last = pre[pre.length - 1];
          if (last === cur) {
            pre[pre.length - 1] = last + cur;
          } else {
            pre.push(cur);
          }
          return pre;
        }, []);
      this.board[i] = list;
    }
  }
}
const game = new Games();

console.log(game);
game.createBoard();
</script>
<template>
  <div class="container">
    <div class="up">上移</div>
    <div class="down">下移</div>
    <div class="left" @click="game.moveLeft">左移</div>
    <div class="right">右移</div>

    <div class="board">
      <template v-for="(row, x) in game.board" :key="x">
        <p
          v-for="(cell, y) in row"
          class="item"
          :class="`color${game.board[x][y]}`"
          :key="y"
        >
          {{ game.board[x][y] ? game.board[x][y] : "" }}
        </p>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
div,
p {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
.btn {
  line-height: 30px;
  cursor: pointer;
  width: 60px;
  position: absolute;
}
.container {
  padding: 30px 60px;
  position: relative;

  .left {
    .btn();
    left: 0;
    top: 165px;
  }
  .right {
    .btn();
    right: 0;
    top: 165px;
  }
  .up {
    .btn();
    left: 175px;
    top: 0;
  }
  .down {
    .btn();
    left: 175px;
    bottom: 0;
  }
}
.board {
  height: 290px;
  width: 290px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // background-color: #bbad9f;
  gap: 10px;
  padding: 10px;
  border-radius: 4px;
  .item {
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    // background-color: #ccc1b2;
    border-radius: 4px;
    // color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
  // .color2 {
  //   background-color: #efe5db;
  // }
  // .color4 {
  //   background-color: #ece0c8;
  // }
  // .color8 {
  //   background-color: #f1b179;
  // }
  // .color16 {
  //   background-color: #f59664;
  // }
  // .color32 {
  //   background-color: #f67c5f;
  // }
  // .color64 {
  //   background-color: #f55d3c;
  // }
  // .color128 {
  //   background-color: #edce72;
  // }
  // .color256 {
  //   background-color: #edcc61;
  // }
  // .color512 {
  //   background-color: #edc850;
  // }
  // .color1024 {
  //   background-color: #d4b038;
  // }
  // .color2048 {
  //   background-color: #b89c32;
  // }
}
</style>
