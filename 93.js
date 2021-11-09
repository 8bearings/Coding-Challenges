// Linked list

class Node{

    constructor(value){
        this.value = value
        this.next = null
        this.previous = null
    
    }
   
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    append(value){
        if(!this.tail){
            this.tail = this.head = new Node(value)
        }else{
            // store reference to current tail of the list
            let oldTail = this.tail
            // move tail to new node
            this.tail = new Node(value)
            // create next pointer to our new tail
            oldTail.next = this.tail
            // create previous pointer to our previous tail
            this.tail.previous = oldTail
        }
    }

print(){
    let current = this.head
while(current != null){
    console.log(current.value)
    current = current.next
        }
    }

}

const list = new LinkedList()
list.append(1)
list.append(5)
list.append(8)

list.print()
