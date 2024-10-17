export class Games {
  extent: number; // 明确声明属性的类型
  board: number[][];
  constructor() {
    this.extent = 4; // 在构造函数中初始化属性
    // this.board = Array(this.extent).fill(Array(this.extent).fill(0));
    this.board = [
      [2, 0, 0, 2],
      [4, 2, 2, 0],
      [8, 4, 4, 0],
      [4, 0, 2, 8],
    ];
  }

  createBoard() {
    this.extent = 4; // 修改属性
  }
  // 左移
  moveLeft() {
    for (let i = 0; i < this.extent; i++) {
      let row = this.board[i];
      let next = false;
      // 向右合并等值
      // const list: number[] = row
      //   .filter((item: number) => item) // 类型守卫，确保 item 是 number
      //   .reduce((pre: number[], cur: number) => {
      //     const last = pre[pre.length - 1];
      //     if (last === cur) {
      //       pre[pre.length - 1] = last + cur;
      //     } else {
      //       pre.push(cur);
      //     }
      //     return pre;
      //   }, []);



      const list1 = (item: number[]) => {
        const arr = item
          .filter((item: number) => item) // 类型守卫，确保 item 是 number
          .reduce((pre: number[], cur: number) => {
            const last = pre[pre.length - 1];
            if (last === cur) {
              pre[pre.length - 1] = last + cur;
              next = true
            } else {
              pre.push(cur);
            }
            return pre;
          }, []);
        if (next) {
          list1(arr)
        } else {
          return arr
        }
      }
      const list: number[] = list1(row)
      this.board[i] = [...list, ...Array(this.extent - list.length).fill(0)];
    }
  }
  // 右移
  moveRight() {
    for (let i = 0; i < this.extent; i++) {
      let row = this.board[i];
      // console.log(row.filter((item: number) => item));
      // 向右合并等值
      const list: number[] = row
        .filter((item: number) => item) // 类型守卫，确保 item 是 number
        .reduceRight((pre: number[], cur: number) => {
          const first = pre[0];
          if (first === cur) {
            pre[0] = first + cur;
          } else {
            pre.unshift(cur);
          }
          return pre;
        }, []);
      this.board[i] = [...Array(this.extent - list.length).fill(0), ...list];
    }
  }
}