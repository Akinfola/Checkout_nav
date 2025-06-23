"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    getSize() {
        return this.items.length;
    }
}
class CheckoutFlow {
    constructor() {
        this.navigationStack = new Stack();
    }
    navigateTo(step) {
        this.navigationStack.push(step);
        const prevStep = this.navigationStack.peek();
        console.log(`Entered: ${prevStep}`);
    }
    goBack() {
        if (this.navigationStack.getSize() > 1) {
            this.navigationStack.pop();
            const prevStep = this.navigationStack.peek();
            console.log(`Back to: ${prevStep}`);
        }
    }
}
const checkout = new CheckoutFlow();
checkout.navigateTo('Cart');
checkout.navigateTo('Shipping');
checkout.navigateTo('Payment');
checkout.goBack();
checkout.goBack();
