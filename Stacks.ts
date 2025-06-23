// class StackNode<T> {
//     value: T;
//     next: StackNode<T> | null;

//     constructor(value: T) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack<T> {
//     top: StackNode<T> | null;
//     bottom: StackNode<T> | null;
//     length: number;

//     constructor() {
//         this.top = null;
//         this.bottom = null;
//         this.length = 0;
//     }

//     push(value: T) {
//         const newNode = new StackNode(value);
//         if (this.isEmpty()) {
//             this.bottom = newNode;
//             this.top = newNode;
//         } else {
//             const holdingNode = this.top
//             this.top = newNode;
//             this.top.next = holdingNode;
//             this.length++;
//         }
//     }

//     isEmpty() {
//         return this.length === 0;
//     }
// }


// class Stacks<T> {
//     stacks: Stack<T>[];

//     constructor() {
//         this.stacks = [];
//     }

//     pop(): T | undefined {
//         if (this.stacks.length === 0) {
//             throw new Error("No stacks available to pop from.");
//         }
//         const lastStack = this.stacks[this.stacks.length - 1];
//         if (lastStack.isEmpty()) {
//             this.stacks.pop();
//             return this.pop(); 
//         }
//         const value = lastStack.top?.value;
//         if (lastStack.top !== null && value !== undefined) {
//             lastStack.top = lastStack.top.next;
//             lastStack.length--;
//             return value;
//         }
//         throw new Error("No value to pop from the stack.");
//     }

//     getStacks() {
//         return this.stacks;
//     }

//     getStack(index: number) {
//         return this.stacks[index];
//     }
// }
// console.log("Stacks module loaded successfully");