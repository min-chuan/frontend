// 声明构造函数
function Person(name) {
  this.name = name;
  this.introduceSelf = () => {
    console.log(`你好！我是 ${this.name}。`);
  };
}

// 使用构造函数创建对象
const salva = new Person("Salva");
salva.name;
salva.introduceSelf();

const fcConstructor = Person.constructor
const fcPrototype = fcConstructor.prototype

// Person原型链：Person -> Person原型 -> Object原型 -> null
console.log(salva.__proto__) // Person原型
console.log(salva.__proto__.__proto__) // Object原型
console.log(salva.__proto__.__proto__.__proto__) // null