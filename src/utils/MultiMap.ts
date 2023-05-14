export default class MultiMap<K extends Record<string, any>, V> {
  private map: Map<string, V>;

  constructor() {
    this.map = new Map();
  }

  set(keys: K, value: V): this {
    const key = JSON.stringify(keys);
    this.map.set(key, value);
    return this;
  }

  get(keys: K): V | undefined {
    const key = JSON.stringify(keys);
    return this.map.get(key);
  }
}
