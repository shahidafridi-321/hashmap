# HashMap Implementation in JavaScript

This project is a simple implementation of a **HashMap** data structure in JavaScript. It provides basic operations for managing key-value pairs, including adding, retrieving, updating, and removing entries, as well as utility functions to interact with the map.

## Features

- **Set**: Add or update a key-value pair in the hash map.
- **Get**: Retrieve the value associated with a given key.
- **Has**: Check if a specific key exists in the hash map.
- **Remove**: Remove a key-value pair by key.
- **Length**: Get the total number of key-value pairs in the hash map.
- **Clear**: Remove all key-value pairs from the hash map.
- **Keys**: Get an array of all keys in the hash map.
- **Values**: Get an array of all values in the hash map.
- **Entries**: Get an array of all key-value pairs in the hash map.

## Project Structure

```plaintext
HashMap/
├── test.mjs         # Contains testing code 
└── hashmap.mjs      # Contains the HashMap class with all methods
```

## HashMap Class (hashmap.mjs)

The `HashMap` class manages a collection of key-value pairs with efficient operations and dynamic resizing. Below are the methods included:

### Constructor

- `constructor(size = 16)`: Initializes the hash map with a given size (default is 16).

### Methods

- `hash(key)`: Computes and returns a hash code for the given key.

- `resizeArray()`: Doubles the size of the hash map's bucket array and rehashes all entries.

- `set(key, value)`: Adds or updates a key-value pair in the hash map.

- `get(key)`: Retrieves the value associated with the given key. Returns `null` if the key does not exist.

- `has(key)`: Checks if the given key exists in the hash map.

- `remove(key)`: Removes the key-value pair associated with the given key. Returns `true` if successful, or `false` otherwise.

- `length()`: Returns the number of key-value pairs in the hash map.

- `clear()`: Removes all key-value pairs from the hash map.

- `keys()`: Returns an array of all keys in the hash map.

- `values()`: Returns an array of all values in the hash map.

- `entries()`: Returns an array of all key-value pairs in the hash map.

## Usage

1. **Installation**: Clone the repository and navigate to the project directory.
   ```bash
   git clone git@github.com:shahidafridi-321/hashmap.git
   cd hash-map
   ```

2. **Import the Class**: In your JavaScript file, import the `HashMap` class.
   ```javascript
   import { HashMap } from './hashmap.mjs';
   ```

3. **Example Usage**:
   ```javascript
   const map = new HashMap();

   map.set('key1', 'value1');
   map.set('key2', 'value2');

   console.log(map.get('key1'));  // 'value1'
   console.log(map.has('key2'));  // true
   console.log(map.length());     // 2

   map.remove('key1');
   console.log(map.has('key1'));  // false

   console.log(map.keys());       // ['key2']
   console.log(map.values());     // ['value2']
   console.log(map.entries());    // [['key2', 'value2']]
   ```

## Contributing

Feel free to submit issues or contribute to the project. To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
