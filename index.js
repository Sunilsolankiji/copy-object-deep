// index.js
function copyObjectDeep(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = copyObjectDeep(obj[i]);
    }
    return arrCopy;
  }

  const objCopy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = copyObjectDeep(obj[key]);
    }
  }

  return objCopy;
}

module.exports = copyObjectDeep;
