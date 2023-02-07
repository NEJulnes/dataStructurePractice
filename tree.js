class Tree {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	Add(data) {
			let scope = this;
			while(true) {
				if(data < scope.data) {
					if(scope.left == null) {
						scope.left = new Tree(data);
						break;
					}
					else {
						scope = scope.left;
					}
				}
				else {
					if(scope.right == null) {
						scope.right = new Tree(data);
						break;
					}
					else {
						scope = scope.right;
					}
				}
			}
	}
	Print(node, level = 0) {
		let s = "";
		for(let i = level; i > 0; --i) s += " ";
		++level;
		if(node != null) {
			console.log(s + node.data);
			this.Print(node.left, level);
			this.Print(node.right, level);
		}
	}
}
