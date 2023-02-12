// there a certain ways to create a maps and hashmaps.

// A map can be implemented by using the Map class
const map = new Map<string, string>();
map.set("first", "first");

// Creating a hashmap means obviously to treat the hashmap as a huge object while the keys are the attributes (an indexable type)
// In addition it is possible to provide a type for the key, if it is a string, number etc.
// Objects are not possible as an hash value
const hashMap: { [key: string]: string } = {};
hashMap["1"] = "1";
