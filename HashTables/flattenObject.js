// we will loop through the key/value pairs in that
// object until we have pulled out all of our individual
// values and assigned them to an appropriate key.

const obj = {
  KeyA: 1,
  KeyB: {
    c: 2,
    d: 3,
    e: {
      f: 7,
      "": 2,
    },
  },
};

function flattenObject(oldObject) {
  const newObject = {};

  flattenHelper(oldObject, newObject, "");

  return newObject;

  function flattenHelper(currentObject, newObject, previousKeyName) {
    for (let key in currentObject) {
      let value = currentObject[key];
      //if the constructor for our value is Object. If I just used typeof that would also return true if it was an Array, this way I am sure that I am only checking for object literals. If it is not an object, then we have to check to see if our previousKeyName was null or an empty string. If they were then we assign our value to our current key in our new object. Effectively just moving it over to the new object without changing anything.
      if (value.constructor !== Object) {
        if (previousKeyName == null || previousKeyName == "") {
          newObject[key] = value;
        } else {
          if (key == null || key == "") {
            newObject[previousKeyName] = value;
          } else {
            newObject[previousKeyName + "." + key] = value;
          }
        }
      } else {
        if (previousKeyName == null || previousKeyName == "") {
          flattenHelper(value, newObject, key);
        } else {
          flattenHelper(value, newObject, previousKeyName + "." + key);
        }
      }
    }
  }
}
console.log(flattenObject(obj));
