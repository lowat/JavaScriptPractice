class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while(currentNode.next !== null){
      if(currentNode.next.value === currentNode.value){
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }
    return linkedList;
  }