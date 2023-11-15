class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 调用超类构造函数并传入 name 参数
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

var d = new Dog("Mitzie");
d.speak(); // 'Mitzie barks.'