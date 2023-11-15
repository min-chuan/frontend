// 声明类
// 实例
// 1. 实例属性在构造函数中初始化
// 2. 实例方法卸载类中
class Person {
  constructor(name, cb){
    this.name = name
    this.cb = cb
  }

  introduceSelf(){
    console.log(`你好！我是 ${this.name}。`);
  }

  static displayName = 'person'
  static say(){
    console.log('I am a ' + Person.displayName)
  }
}

Person.prototype.residence = '地球'

// 实例
const salva = new Person("Salva");
console.log("实例属性：name-" + Object.hasOwn(salva, 'name'))
console.log(salva.name)

// 静态
console.log("静态属性：displayName-" + Object.hasOwn(Person, 'displayName'))
console.log("静态方法：say-" + Object.hasOwn(Person, 'say'))
console.log(Person.displayName)
Person.say()

// 公共
console.log("公共属性：residence-" + Object.hasOwn(salva.__proto__, 'residence'))  // introduceSelf是公共方法
console.log("公共方法：introduceSelf-" + Object.hasOwn(salva.__proto__, 'introduceSelf'))  // introduceSelf是公共方法
salva.introduceSelf();
