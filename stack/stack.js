class Stack {
  constructor(...items) {
    this.items = [];
    if(items.length > 0) {
      this.items = [...items];
    }
  }

  push(...items) {
     return this.items =  [...this.items, ...items];
  }

  pop(count=0) {
    if(count === 0)
      return this.items.pop();
     else
       return this.items.splice( -count, count );
  }

  peek() {
    return this.items[this.items.length-1];
  }

  size() {
    return this.items.length;
  }

  isEmpty(){
    return this.items.length === 0;
  }

  toArray(){
    return this.items;
  }
}

const stack = new Stack(1,5,14);
stack.push(23)
stack.push(2,7,34);
stack.pop();
stack.peek();
stack.pop(3)
stack.isEmpty();
stack.size();
stack.pop(4);
stack.isEmpty();