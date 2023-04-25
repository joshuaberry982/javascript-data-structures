class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  
    setNextNode(node) {
      if (node instanceof Node || node === null) {
        this.next = node;
      } else {
        throw new Error('Next node must be a member of the Node class.');
      }
    }
  
    getNextNode() {
      return this.next;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addToHead(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
      this.head = newHead;
      if (currentHead) {
        this.head.setNextNode(currentHead);
      }
    }
  
    addToTail(data) {
      let tail = this.head;
      if (!tail) {
        this.head = new Node(data);
      } else {
        while (tail.getNextNode() !== null) {
          tail = tail.getNextNode();
        }
        tail.setNextNode(new Node(data));
      }
    }
  
    removeHead() {
      const removedHead = this.head;
      if (!removedHead) {
        return;
      }
      this.head = removedHead.getNextNode();
      return removedHead.data;
    }
  
    printList() {
      let currentNode = this.head;
      let output = '<head> ';
      while (currentNode !== null) {
        output += currentNode.data + ' ';
        currentNode = currentNode.getNextNode();
      }
      output += '<tail>';
      console.log(output);
    }
  
}

class Stack {
    constructor(maxSize = Infinity) {
      this.stack = new LinkedList();
      this.maxSize = maxSize;
      this.size = 0;
    }
  
    hasRoom() {
      return this.size < this.maxSize;
    }
    
    isEmpty() {
      return this.size === 0;
    }
  
    push(value) {
      if (this.hasRoom()) {
        this.stack.addToHead(value);
        this.size++;
      } else {
        throw new Error('Stack is full');
      }
    }
  
    pop() {
      if (!this.isEmpty()) {
        const value = this.stack.removeHead();
        this.size--;
        return value;
      } else {
        throw new Error('Stack is empty');
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.stack.head.data;
      } else {
        return null;
      }
    }
  
}

module.exports = Stack;