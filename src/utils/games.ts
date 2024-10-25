export class Games {
  extent: number; // 明确声明属性的类型
  board: number[][];
  styleState: boolean;

  constructor() {
    this.extent = 4; // 在构造函数中初始化属性
    this.board = Array(this.extent).fill(Array(this.extent).fill(0));
    this.styleState = false
    // this.board = [
    //   [2, 2, 0, 2],
    //   [4, 2, 2, 0],
    //   [4, 4, 4, 2],
    //   [8, 0, 2, 8],
    // ];
  }

  createBoard() {
    this.extent = 4; // 修改属性
  }

  private mergeRow(row: number[]): number[] {
    let next = true;
    return row
      .filter((item: number) => item !== 0) // 过滤掉零值
      .reduce((acc: number[], cur: number) => {
        if (acc.length > 0 && acc[acc.length - 1] === cur && next) {
          acc[acc.length - 1] *= 2;
          next = false;
        } else {
          acc.push(cur);
          next = true;
        }
        return acc;
      }, []);
  }

  private transposeBoard(): number[][] {
    return this.board[0].map((_, i) => this.board.map(row => row[i]));
  }

  private reverseBoard(): number[][] {
    return this.board.map(row => [...row].reverse());
  }

  private updateBoard(newBoard: number[][]): void {
    this.board = newBoard;
  }

  // 左移
  moveLeft() {
    for (let i = 0; i < this.extent; i++) {
      const row = this.mergeRow(this.board[i]);
      this.board[i] = [...row, ...Array(this.extent - row.length).fill(0)];
    }
    this.addOne()
  }

  // 右移
  moveRight() {
    this.updateBoard(this.reverseBoard());
    this.moveLeft();
    this.updateBoard(this.reverseBoard());
  }

  // 上移
  moveUp() {
    this.updateBoard(this.transposeBoard());
    this.moveLeft();
    this.updateBoard(this.transposeBoard());
  }

  // 下移
  moveDown() {
    this.updateBoard(this.transposeBoard());
    this.moveRight();
    this.updateBoard(this.transposeBoard());
  }


  private getCoordinate(number: number): any {
    const quotient = Math.floor(number / 4); // 计算除以4的商
    const remainder = number % 4; // 计算除以4的余数
    return { x: quotient, y: remainder }; // 返回商和余数的数组
  }

  // 增加一位数
  addOne() {
    // 获取是0的数，并随机替换一个
    const list: number[] = [];
    this.board.flat().forEach((item, index) => {
      if (item === 0) list.push(index);
    });
    // 生成一个随机整数
    const randomIndex = Math.floor(Math.random() * list.length);
    console.log(this.getCoordinate(randomIndex));
    const coordinate = this.getCoordinate(list[randomIndex]);
    this.board[coordinate.x][coordinate.y] = 2
    // setTimeout(() => {
    //   this.styleState = false
    // }, 1000);

    this.styleState = true
    setTimeout(() => {
      this.styleState = false
    }, 200);
  }
}
