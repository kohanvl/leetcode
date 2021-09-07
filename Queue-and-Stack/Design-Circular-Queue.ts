// Medium - https://leetcode.com/problems/design-circular-queue/
class MyCircularQueue {
  queue: number[];
  maxSize: number;
  head: number;
  tail: number;
  constructor(k: number) {
    this.queue = new Array(k);
    this.maxSize = k;
    this.head = 0;
    this.tail = -1;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.tail = (this.tail + 1) % this.maxSize;
    this.queue[this.tail] = value;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    if (this.head === this.tail) {
      this.head = 0;
      this.tail = -1;
    } else {
      this.head = (this.head + 1) % this.maxSize;
    }
    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.head];
  }

  Rear(): number {
    return this.isEmpty() ? -1 : this.queue[this.tail];
  }

  isEmpty(): boolean {
    return this.tail === -1;
  }

  isFull(): boolean {
    return !this.isEmpty() && (this.tail + 1) % this.maxSize === this.head;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
