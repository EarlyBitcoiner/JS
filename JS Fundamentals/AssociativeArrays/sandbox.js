let map = new Map();
map.set("key1", "value1");
map.set("key3", "value3");
map.set("key2", "value2");

let array = Array.from(map); // Convert Map to Array
let sortedArray = array.sort(); // Sort the Array

map = new Map(sortedArray); // Convert the sorted Array back to Map

console.log(map);
// Output:
// Map { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
