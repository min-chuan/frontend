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