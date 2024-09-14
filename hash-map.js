// A HASHMAP CLASS
class HashMap {
	constructor(size = 16) {
		this.size = size;
		this.buckets = Array(this.size) // creates an array of given size then fill the array with null so the map array method should iterate over it and returns an empty array for all the elements
			.fill(null)
			.map(() => []);
	}

	// take a string and generates and returns a hashCode for that string,the primeNumber is used to reduce the likely hood, the modulo operator is used to reduce a long hashCode to be inside the array index
	hash(key) {
		let hashCode = 0;
		let primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
		}
		return hashCode;
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
	}
}

let hashMap = new HashMap();
/* hashMap.set("shahid", "afridi");
hashMap.set("shahi", "khan");
console.log(hashMap.getBuckets()); */
