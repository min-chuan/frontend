class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 1. 实现可迭代对象：可迭代协议要求拥有Symbol.iterator方法，用于获取迭代器
  [Symbol.iterator](){
    
    let keys = Object.keys(this)
    let index = 0
    let that = this // 解决this指向问题
    // 2. 实现迭代器：迭代器是拥有 next() 方法的对象
    return {
      // 3. 实现next(): next返回类型 {value: any, done: Boolean} 的结构
      next(){
        if (index < keys.length) {
            return {value: that[keys[index++]], done: false};
        } else {
            return {done: true};
        }
      },
    }
  }
}

const zs = new Person('zs', 18)

// 4. 使用for..of遍历可迭代对象
for(let item of zs){
  console.log(item)
}
