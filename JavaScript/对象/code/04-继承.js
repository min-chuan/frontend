// 声明构造函数
function Person(name) {
  this.name = name;
  // this.introduceSelf = function(){
  //   console.log(`你好！我是 ${this.name}。`)
  // }
}

Person.prototype.introduceSelf = function(){
  console.log(`你好！我是 ${this.name}。`)
}


// 方法一：
// 1. 设子类原型为父类实例（继承父类属性，方法）
// 问题：创建子类时候，无法初始化父类构造中的参数
function Man() {
  this.gender = 'male'
}

Man.prototype = new Person()

const man1 = new Man() // 无法初始化父类构造中的参数
console.log(man1.name)
man1.introduceSelf()

// 方法二：
// 1. 设子类原型为父类实例（继承父类属性，方法及原型）
// 2. 子类构造中调父类构造函数（获取父类属性，方法）
// 问题：Man2原型的construstor指向的不是Man2
function Man2(name){
  Person.call(this, name)
  this.gender = 'male'
}

Man2.prototype = new Person()

const man2 = new Man2('zs')
console.log(man2.name)
man2.introduceSelf()
console.log(Man2.prototype.constructor)

// 方法三：
// 1. 设子类原型为父类实例（继承父类属性，方法及原型）
// 2. 子类构造中调父类构造函数（获取父类属性，方法）
// 3. 子类原型构造函数指回子类（确保三角关系完整）
function Man3(name){
  Person.call(this, name)
  this.gender = 'male'
}

Man3.prototype = new Person()
Man3.prototype.constructor = Man3

const man3 = new Man3('zs')
console.log(man3.name)
man3.introduceSelf()
console.log(Man3.prototype.constructor) 


