// test.js
const copyObject = require('./index');

const original = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'gaming'],
  address: {
    city: 'New York',
    zip: '10001'
  }
};

const copy = copyObject(original);

// Modify the copy
copy.name = 'Doe';
copy.hobbies.push('swimming');
copy.address.city = 'Los Angeles';

console.log('Original:', original);
console.log('Copy:', copy);
