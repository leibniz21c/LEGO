class Hashtable {
  constructor() {
    this.items = {};
  }
  static newFrom(items) {
    const hashtable = new Hashtable();
    hashtable.items = items;
    return hashtable;
  }
  put(key, value) {
    this.items[key] = value;
  }
  get(key) {
    return this.items[key];
  }
  containsKey(key) {
    return this.items.hasOwnProperty(key);
  }
  remove(key) {
    delete this.items[key];
  }
  firstKey() {
    for (const k in this.items) {
      if (this.items.hasOwnProperty(k)) {
        return k;
      }
    }
    return null;
  }
  keys(result) {
    result.length = 0;
    for (const k in this.items) {
      if (this.items.hasOwnProperty(k)) {
        result.push(k);
      }
    }
  }
  values(result) {
    result.length = 0;
    for (const k in this.items) {
      if (this.items.hasOwnProperty(k)) {
        result.push(this.items[k]);
      }
    }
  }
  clear() {
    for (const k in this.items) {
      if (this.items.hasOwnProperty(k)) {
        delete this.items[k];
      }
    }
  }
}
//# sourceMappingURL=jshashtable.js.map
