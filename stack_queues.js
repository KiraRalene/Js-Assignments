//in a stack the last object added is the first object output
//while in a queue the first object added is the first object out

class Stack {
  constructor() {
    this.stack = [];
  }

  add(element) { //add element to end of the stack array and returns element
    this.stack.push(element);
    return element;
  }

  remove() {
    return this.stack.pop(); //removes last element from array and automatically return it
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }

  add(element) {
    this.queue.push(element); //adds element to end of the queue array and returns element
    return element;
  }

  remove() {
    return this.queue.splice(1,1).join("") //returns and removes first element in the queue array
    //returns right element but as an array therefore we use join
  }
}

//TESTING
stack1 = new Stack
console.log(stack1.add("hello"))
console.log(stack1.add("hi"))
console.log(stack1.remove()) //should return hi

queue1 =  new Queue
console.log(queue1.add("hello"))
console.log(queue1.add("hi"))
console.log(queue1.remove()) //should return hello
