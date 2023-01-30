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
    sum() {
        if (this.head == null) {
            return(0);
        }
        let sum = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            sum += currentNode.data;
            currentNode = currentNode.next;
        }
        return(sum)
    }
    contains(value){
        if(this.head.data == value){
            return(true);
        }
        let currentNode = this.head;
        while (currentNode !== null){
            if(currentNode.data == value){
                return(true)
            }
            currentNode = currentNode.next
        }
        return(false);
    }
}

single = new LinkedList;
single.addFront(18);
console.log(single)
single.addFront(5);
console.log(single)
console.log(single.contains(5));
console.log(single.contains(18));
console.log(single.contains(7));


// console.log(single.removeFront())
// single.addFront(67);
// console.log(single.front())
// console.log(single.sum())
// single.addFront(1);
// console.log(single.sum())
// for(var i = 0; i <= 99; i++){
//     single.addFront(1);
//     console.log(single.sum());
// }
// single2 = new LinkedList;
// console.log(single2.sum());

//method for removing the head. needs to set "head" to the next of the current head. head of next to null....""