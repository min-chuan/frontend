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

// Function构造函数是所有构造函数的构造函数
console.log(salva.constructor) // Person构造
console.log(salva.constructor.constructor) // Function构造

// Function构造函数的对象原型就是Function原型
console.log(Function.__proto__ === Function.prototype) // true

// Object原型是所有原型的对象原型
console.log(Person.prototype.__proto__) // Object原型
console.log(Function.prototype.__proto__) // Object原型

// Object原型的对象原型是null
console.log(Object.prototype.__proto__) // null
