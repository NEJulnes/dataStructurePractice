// generic implementation
class Queue {
	constructor() {
		this.items = { };
		this.front = 0;
		this.back = 0;
	}
	Enqueue(item) {
		this.items[this.back] = item;
		this.back++;
	}
	Dequeue() {
		const temp = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return temp;
	}
	Peek() {
		return this.items[this.front];	
	}
	Print() {
		return this.items;	
	}
	get length() {
		return this.back - this.front;	
	}
	get isEmpty() {
		return this.length === 0;	
	}
}
// using node class implementation
class Queue {
	constructor() {
		this.count = 0;
		this.items = null;
	}
	enqueue(item) {
		if(this.items != null) this.items.push(item);
		else this.items = new Node(item);
		this.count++;
	}
	dequeue() {
		const temp = this.items.data;
		this.items = this.items.next;
		this.count--;
		return temp;
	}
	peek() {
		if(this.items != null) return this.items.data;
		else return console.log('Nothing in queue...')
	}
	print() {
		return this.items.print();
	}
	get length() {
		return this.count;
	}
	get isEmpty() {
		return this.length === 0;
	}
}
