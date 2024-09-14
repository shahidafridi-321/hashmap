// A HASHMAP CLASS

export class HashMap {
	constructor(size = 16) {
		this.totalSize = size;
		this.buckets = Array(this.totalSize) // creates an array of given size then fill the array with null so the map array method should iterate over it and returns an empty array for all the elements
			.fill(null)
			.map(() => []);
		this.totalEntries = 0;
		this.loadFactor = 0.75;
	}

	// take a string and generates and returns a hashCode for that string,the primeNumber is used to reduce the likely hood, the modulo operator is used to reduce a long hashCode to be inside the array index
	hash(key) {
		let hashCode = 0;
		let primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.totalSize;
		}
		return hashCode;
	}

	// resizes the array/doubles the size
	resizeArray() {
		this.totalSize *= 2;

		let oldBuckets = this.buckets; // copy the existing buckets array
		this.buckets = Array(this.totalSize) // resize the array to double of previous
			.fill(null)
			.map(() => []);

		this.totalEntries = 0;
		oldBuckets.forEach((bucket) => {
			for (let [key, value] of bucket) {
				this.set(key, value); // reinserts the old entries in the new array
			}
		});
	}

	// take key and a value,the key is converted to an index,at that index in buckets array ,if the key is already here then update the value otherwise put key value pair at that index
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
		this.totalEntries++;

		let capacity = this.totalEntries / this.totalSize;
		if (capacity > this.loadFactor) {
			this.resizeArray();
		}
	}

	// takes a key and return a value at that bucket if found otherwise returns null
	get(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				return bucket[i][1];
			}
		}
		return null;
	}

	// checks if key is in the hashmap returns true other wise false
	has(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				return true;
			}
		}
		return false;
	}

	// removes an entry at the given key/index
	remove(key) {
		let index = this.hash(key);
		let bucket = this.buckets[index];
		for (let i = 0; i < bucket.length; i++) {
			if (bucket[i][0] === key) {
				bucket.splice(i, 1);
				return true;
			}
		}
		return false;
	}

	// returns total number of keys
	length() {
		return this.buckets.reduce((total, bucket) => total + bucket.length, 0);
	}

	// clears all the entries in the hash map
	clear() {
		//this.buckets = this.buckets.map(() => []); createds new array
		this.buckets.forEach((bucket, index) => {
			// modify the existed one
			this.buckets[index] = [];
		});
	}

	// returns an array containing all the keys inside the hash map
	keys() {
		let keys = this.buckets.reduce((total, bucket) => {
			bucket.forEach((enter) => {
				total.push(enter[0]);
			});
			return total;
		}, []);
		return keys;
	}
	// returns an array containing all the values.
	values() {
		let values = this.buckets.reduce((total, bucket) => {
			bucket.forEach((enter) => {
				total.push(enter[1]);
			});
			return total;
		}, []);
		return values;
	}

	//returns an array that contains each key, value pair.
	entries() {
		let values = this.buckets.reduce((total, bucket) => {
			bucket.forEach((enter) => {
				total.push(enter);
			});
			return total;
		}, []);
		return values;
	}
}
