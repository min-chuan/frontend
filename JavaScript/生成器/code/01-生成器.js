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

// 使用生成器改写上述代码
// 生成器的创建
// 1. 使用function*定义生成器
// 2. 函数体中通过循环计算value，并通过yield返回

// 生成器使用原理
// 1. 最初调用生成器返回一个迭代器
// 2. 调用迭代器的next()方法会执行生成器的函数体,直到yield停止
// 3. 同时返回类似 {value: any, done: Boolean} 的结构，value取值为yield 后面的结果

class Person2 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  // 1. 实现可迭代对象：可迭代协议要求拥有Symbol.iterator方法，用于获取迭代器
  *[Symbol.iterator](){
    const keys = Object.keys(this)
    for(let i = 0; i < keys.length; i++) {
      yield this[keys[i]]
    }
  }
}

const p = new Person2('zs', 18)

// 遍历
for(const key of p){
  console.log(key)
}

// 展开语法
const keys = [...p]
console.log(keys)

// 解构赋值
const [k1, k2] = p
console.log(k1, k2)