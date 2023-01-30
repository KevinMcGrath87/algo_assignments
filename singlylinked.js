class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new Node(val);
        if (!this.head){
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront(){
        if (this.head) {
            let new_head = this.head.next;
            this.head = null;
            this.head = new_head;
            return(this);
        }
        return(null)
    }
    front(){
        return(this.head.data)
    }
}


single = new LinkedList;
single.addFront(18);
console.log(single)
single.addFront(5);
console.log(single)


console.log(single.removeFront())
single.addFront(67);
console.log(single.front())


//method for removing the head. needs to set "head" to the next of the current head. head of next to null....""