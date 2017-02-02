class Hash {
  constructor(obj) {
    Object.assign(this, obj);
  }

  isEmpty() {
    return Object.keys(this).length === 0;
  }

  merge(hash) {
    return Object.assign({}, this, hash['obj']);
  }

  hasKey(key) {
    return Object.keys(this).indexOf(key) === -1
  }

  invert() {
    let inverted = new Hash({});
    for (let property in this) {
      inverted[this[property]] = property;
    }
    return inverted;
  }

  inspect() {
    let inspected = "{";
    let i = 1;
    for (let property in this) {
      if (i === Object.keys(this).length) {
        inspected += property +" => " + this[property] + "}";
      } else {
        inspected += property + " => " + this[property] + ", ";
      }
      i++;
    }
    return inspected;
  }

  keys() {
    let keys = []
    for (let property in this) {
      keys.push(property);
    }
    return keys;
  }

  values() {
    let values = []
    for (let property in this) {
      values.push(this[property]);
    }
    return values;
  }

}

let testHash = new Hash({a: 1, b: 2, c: 3});

console.log("TEST .ISEMPTY");
console.log(testHash.isEmpty());

console.log("TEST .MERGE");
let merge = testHash.merge(new Hash({bob: 'yo', jane: 'ya'}));
console.log(merge);

console.log("TEST .HASKEY");
console.log(testHash.hasKey('a'));

console.log("TEST .INVERT");
console.log(testHash.invert());

console.log("TEST .INSPECT");
console.log(testHash.inspect());

console.log("TEST .KEYS");
console.log(testHash.keys());

console.log("TEST .VALUES");
console.log(testHash.values());
