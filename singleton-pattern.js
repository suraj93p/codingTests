var myNameSpace = {};

myNameSpace.Singleton = (function () {
  var singleTonInstance;
  function constructor() {
    var privateVar1 = "privateVar";
    function privateMethod() {
      console.log(this.privateVar1);
    }

    return {
      attribute1: "singleTon Class",
      publicMethod: function () {
        return privateMethod();
      },
    };
  }

  return {
    getInstance() {
      if (!singleTonInstance) {
        singleTonInstance = constructor();
      }
      return singleTonInstance;
    },
  };
})();

MyNameSpace.Singleton.getinstance().publicMethod();

var employee = {
  name: "Nishant",
  getName: function () {
    return this.name();
  },
};

var emp1 = Object.create(employee);

console.log(emp1.getname());
