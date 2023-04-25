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

class Queue {
    constructor(maxSize = Infinity) {
      this.queue = new LinkedList();
      this.maxSize = maxSize;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    hasRoom() {
      return this.size < this.maxSize;
    }
  
    enqueue(data) {
      if (this.hasRoom()) {
        this.queue.addToTail(data);
        this.size++;
      } else {
        throw new Error("Queue is full!");
      }
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        const data = this.queue.removeHead();
        this.size--;
        return data;
      } else {
        throw new Error("Queue is empty!");
      }
    }
}

module.exports = Queue;