class HashMap {
	constructor(size = 16) {
		this.size = size;
		this.buckets = Array(this.size)
			.fill(null)
			.map(() => []);
	}

	hash(key) {
		let hashCode = 0;
		let primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
		}
		return hashCode;
	}

	set(key, value) {
		let index = this.hash(key);
		let bucket = this.buckets[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				bucket[i][1] = value;
				return;
			}
		}
		bucket.push([key, value]);
	}

}

let hashMap = new HashMap();
/* hashMap.set("shahid", "afridi");
hashMap.set("shahi", "khan");
console.log(hashMap.getBuckets()); */
