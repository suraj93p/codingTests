function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("walking");
};
Person.prototype.sayHello = function () {
  console.log("hello");
};

function Student() {
  Person.call(this, "suraj");
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.sayHello = function () {
  console.log("student says good morning");
};

Student.prototype.sayGoodBye = function () {
  console.log("student says goodbye");
};

var student1 = new Student();
student1.sayHello();
student1.walk();
student1.sayGoodBye();

console.log(student1 instanceof Person);
console.log(student1 instanceof Student);
