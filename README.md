HashMap Class
Overview

The HashMap class is a JavaScript implementation of a hash map data structure, which allows you to store key-value pairs with efficient lookup, insertion, and deletion operations. The hash map uses separate chaining with an array of buckets to handle collisions.
Features

    Hashing Function: Converts keys to a hash code to determine their position in the bucket array.
    Dynamic Resizing: Automatically resizes the hash map when the number of entries exceeds a predefined load factor.
    Basic Operations: Provides methods to add, retrieve, check, remove, and clear key-value pairs.
    Utility Methods: Methods to get the number of entries, list all keys, values, and key-value pairs.

Installation

You can include the HashMap class in your project by copying the code and saving it in a file, e.g., HashMap.js.

javascript

import { HashMap } from './HashMap';

Usage

Here is a brief overview of how to use the HashMap class:
Creating a HashMap

javascript

const map = new HashMap();

Adding Key-Value Pairs

javascript

map.set('key1', 'value1');
map.set('key2', 'value2');

Retrieving Values

javascript

const value = map.get('key1'); // 'value1'

Checking for Key Presence

javascript

const hasKey = map.has('key1'); // true

Removing Key-Value Pairs

javascript

const removed = map.remove('key1'); // true if the key was removed

Getting the Number of Entries

javascript

const size = map.length(); // Returns the number of key-value pairs

Clearing All Entries

javascript

map.clear();

Listing All Keys

javascript

const keys = map.keys(); // ['key2']

Listing All Values

javascript

const values = map.values(); // ['value2']

Listing All Key-Value Pairs

javascript

const entries = map.entries(); // [['key2', 'value2']]

Methods
constructor(size = 16)

    Initializes the hash map with a given size (default is 16).

hash(key)

    Computes and returns a hash code for the given key.

resizeArray()

    Resizes the hash map's bucket array when the load factor exceeds a threshold.

set(key, value)

    Adds or updates the key-value pair in the hash map.

get(key)

    Retrieves the value associated with the given key, or null if the key does not exist.

has(key)

    Checks if the given key exists in the hash map.

remove(key)

    Removes the key-value pair associated with the given key and returns true if successful, or false otherwise.

length()

    Returns the number of key-value pairs in the hash map.

clear()

    Removes all key-value pairs from the hash map.

keys()

    Returns an array of all keys in the hash map.

values()

    Returns an array of all values in the hash map.

entries()

    Returns an array of all key-value pairs in the hash map.

Notes

    The HashMap implementation is based on a hash table with separate chaining for collision resolution.
    The hash function uses a prime number and modulo operation to distribute keys uniformly across the bucket array.
    The class automatically resizes itself to maintain performance as the number of entries grows.

License

This project is licensed under the MIT License.