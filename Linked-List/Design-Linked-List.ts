interface MyNode {
  val: number;
  next: MyNode | null;
}

class MyLinkedList {
  head: MyNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  getNode(index: number): MyNode | null {
    if (index < 0 || index > this.length) return null;
    let nodeIndex = 0;
    let node = this.head;
    while (nodeIndex < index) {
      node = node.next;
      nodeIndex++;
    }
    return node;
  }

  get(index: number): number {
    const node = this.getNode(index);
    if (!node) return -1;
    return node.val;
  }

  addAtHead(val: number): void {
    const next = this.head;
    this.head = {val, next};
    this.length++;
  }

  addAtTail(val: number): void {
    if (!this.length) return this.addAtHead(val);
    const node = this.getNode(this.length - 1);
    node.next = {val, next: null};
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);

    const prev = this.getNode(index - 1);
    prev.next = {val, next: prev.next};
    this.length++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index > this.length - 1 || !this.length) return;
    if (index === 0) this.head = this.head.next;
    else {
      const prev = this.getNode(index - 1);
      prev.next = prev.next?.next || null;
    }
    this.length--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
