export abstract class Collection<T> {
  constructor() {
    return new Proxy(this, {
      get(target, key) {
        return target[key]
      },
      set(target, key, value) {
        return Reflect.set(target, key, value)
      }
    })
  }

  public get(index: number): T {
    return this[index]
  }

  public asArray() {
    return Object.getOwnPropertyNames(this).map(e => this[e])
  }
}
