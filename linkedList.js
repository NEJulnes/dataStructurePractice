class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
	set (data) {
		this.data = data;
        return data;
	}
    length () {
        let n = this, count = 0;
        while (n != null) {
            n = n.next;
            ++count;
        }
        return count;
    }
    at (index = 0) {
        let n = this;
        const length = n.length();
        if (index < -length || index >= length) return undefined;
        if (index < 0) index += length;
        if (index === 0) return n;
        for(index; index > 0; --index) {
            if(n.next != null) n = n.next;
            else return undefined;
        }
        return n;
    }
	splice (start = 0, deleteCount = 0, ...items) {
		let n = this, out, temp, i;
        const length = this.length(), array = [];
        for(i = 0; i < length; ++i) {
            array.push(n.data);
            if(n.next != null) n = n.next;
        }
        out = array.splice(start, deleteCount, ...items);
        n = this;
        if (array.length > 0) n.data = array[0];
        for(i = 1; i < array.length; ++i) {
            n.next = new Node(array[i]);
            n = n.next;
        }
        return out;
	}
	push (data) {
		let n = this;
		while(n.next != null) n = n.next;
		n.next = new Node(data);
        return this.length();
	}
    every (predicate, thisArg) {
        let n = this, array = [];
        while(n != null) {
            array.push(n.data);
            n = n.next;
        }
        return array.every(predicate, thisArg);
    }
    fill (value, start, end) {
        let n = this, array = [];
        while(n != null) {
            array.push(n.data);
            n = n.next;
        }
        array.fill(value, start, end)
        n = this;
        for(let i = 0; i < array.length; ++i) {
            if (n.data != array[i]) n.data = array[i];
            if (n.next === null) if (i + 1 < array.length) n.next = new Node(array[i + 1]);
            n = n.next;
        }
        return this;
    }
    pop () {
        let n = this, out;
		while(n.next.next != null) n = n.next;
        out = n.next;
        n.next = null;
        return out;
    }
	print () {
		let n = this, index = 0, out = '';
		while(n.next != null) {
            out += `node${index}:${n.data}, `
			n = n.next;
            ++index;
		}
		out += `node${index}:${n.data}`;
        return out;
	}
    toString() {
        if(this.next != null) return `data: ${this.data}, next: ${this.next.data}`;
        else return `data: ${this.data}, next: ${this.next}`;
    }
}
