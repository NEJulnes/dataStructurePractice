class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  SetData(data) {
    this.data = data;
	}
  SetPositionData(index, data) {
		let n = this;
		for(index; index > 0; --index) n = n.next;
		if(n != null) n.SetData(data);
		else console.log('Index does not exist.');
	}
  AddNode(data) {
    let n = this;
    while(n.next != null) n = n.next;
    n.next = new Node(data);
  }
  Print() {
    let n = this;
    console.log('Printing nodes...');
    while(n.next != null) {
      console.log(n.data);
      n = n.next;
    }
    console.log(n.data);
  }
}
