<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { Games } from "@/utils/games";

const game = reactive(new Games());
const { board: boardList } = toRefs(game);
</script>
<template>
  <div class="container">
    <div class="up">上移</div>
    <div class="down">下移</div>
    <div class="left" @click="game.moveLeft">左移</div>
    <div class="right" @click="game.moveRight">右移</div>

    <div class="board">
      <template v-for="(row, x) in boardList" :key="x">
        <p
          v-for="(cell, y) in row"
          class="item"
          :class="`color${cell}`"
          :key="y"
        >
          {{ cell ? cell : "" }}
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
