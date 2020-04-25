class Queue {
  constructor(...items) {
    this.items = [];
    this.enqueue(...items);
  }
 
   enqueue(...items) {
     return this.items = [...this.items, ...items];
   }
 
   dequeue(count=1) {
     return this.items.splice(0,count);
  }
 
   peek() {
     return this.items[0];
   }
 
   size() {
     return this.items.length;
   }
 
   isEmpty() {
     return this.items.length === 0;
   }
 }

const queue = new Queue(1,5,14);
queue.enqueue(2,7,34);
queue.dequeue();
queue.dequeue(3);
queue.isEmpty();
queue.size();
