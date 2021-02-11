class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  //Time O(1) | space O(1)
  peek() {
    return this.stack[this.stack.length - 1];
  }
  //Time O(1) | space O(1)
  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }
  //Time O(1) | space O(1)
  push(number) {
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}
