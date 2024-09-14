class HashMap {
	constructor(size = 16) {
		this.size = size;
	}
	hash(key) {
		let hashCode = 0;
		let primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
		}
		return hashCode;
	}
}

let hashMap = new HashMap();
console.log(hashMap.hash("shahid"));
