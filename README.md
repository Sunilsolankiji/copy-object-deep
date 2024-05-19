# copy-object-deep

A lightweight npm package to create a deep copy of an object in JavaScript. The new object is entirely independent and not related to the original object.

## Installation

You can install the package using npm:

```sh
npm install copy-object-deep
```

## Usage

First, import the package into your project:

```javascript
const deepClone = require('copy-object-deep');
```

Then, you can use the deepClone function to create a deep copy of an object:

```javascript
const originalObject = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown'
  },
  hobbies: ['reading', 'gaming']
};

const clonedObject = deepClone(originalObject);

console.log(clonedObject);
// Output:
// {
//   name: 'John',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'Anytown'
//   },
//   hobbies: ['reading', 'gaming']
// }
```

### API

### `deepClone(object)`
Creates a deep copy of the given object.

### Parameters
object (Object): The object to be cloned.

### Returns
Object: A deep copy of the original object.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Contributing
If you would like to contribute to this project, please submit a pull request or open an issue.

### Author
**Sunil Solanki**
