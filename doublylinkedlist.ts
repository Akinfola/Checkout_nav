class DoublyLinkedListNode {
    value: number;
    head: DoublyLinkedListNode | null = null;
    tail: DoublyLinkedListNode | null = null;

    constructor(value: number) {
        this.value = value;
        this.head = null; 
        // Initialize head and tail as needed, or set to null if appropriate
    }

}