const strings = ['a', 'b', 'c', 'd'];
// If we are on a 32-bit system (4 shelves)
// 4 items - each taking 4 shelves
// 4*4 = 16 bytes of storage

// Grab the nth item from the Array

strings[2];

// push
// add something at the end of the array

strings.push('e'); // O(1)


// pop
// take out the last item of the array
// fetched by index - computer know the last index

strings.pop(); // O(1))
strings.pop(); // O(1))


// unshift
// add an item at the beginning of the array
// iterates through the whole array and 'unshift' the indexes to match the new position of the  items

strings.unshift('x'); // O(n)


// splice
// adds an item at a specific index number
// takes the index number(a) to add item to, the number of following consecutive indexes(x) to delete and lastly takes the item to insert at the index(a) mentioned at the first step

strings.splice(2, 0, 'alien'); // O(n)

console.log(strings);


// Static Arrays = Speciefied number indexes
// Dynamic Arrays = Automatically allocates memory in JS

// How Arrays work

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length -1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  // Take the index of a data and assign the data in the next index to it
  shiftItems(index) {
    for (let i = index; i < this.length-1; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
//newArray.pop();
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);
