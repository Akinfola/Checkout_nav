class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    getSize(): number {
        return this.items.length;
    }
}

class CheckoutFlow {
    private navigationStack = new Stack<string>();
    
navigateTo(step: string): void {
    this.navigationStack.push(step);
    const prevStep = this.navigationStack.peek();
    console.log(`Entered: ${prevStep}`);
}

goBack(): void {
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