class HashSet {
	constructor(size = 16) {
		this.totalSize = size;
		this.totalEntries = 0;
		this.loadFactor = 0.75;
		this.buckets = Array(this.totalSize)
			.fill(null)
			.map(() => []);
	}

	hash(key) {
		let hashCode = 0;
		let primeNumber = 31;

		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.totalSize;
		}

		return hashCode;
	}

	add(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i] === key) {
				return;
			}
		}
		bucket.push(key);
		this.totalEntries++;

		let capacity = this.totalEntries / this.totalSize;
		if (capacity > this.loadFactor) {
			this._resize();
		}
	}

	contains(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i] === key) {
				return true;
			}
		}
		return false;
	}

	remove(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i] === key) {
				bucket.splice(i, 1);
				this.totalEntries--;
				return true;
			}
		}

		return false;
	}
	size() {
		return this.totalEntries;
	}
	clear() {
		this.buckets.forEach((bucket, index) => {
			this.buckets[index] = [];
		});
		this.totalEntries = 0;
	}
	_resize() {
		this.totalSize *= 2;
		let oldBuckets = this.buckets;
		this.buckets = Array(this.totalSize)
			.fill(null)
			.map(() => []);
		this.totalEntries = 0;
		oldBuckets.forEach((bucket) => {
			for (let key of bucket) {
				this.add(key);
			}
		});
	}
}

let hashset = new HashSet();

hashset.add("shahid");
console.log(hashset);
