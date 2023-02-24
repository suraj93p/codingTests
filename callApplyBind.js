// Write Javascript code!
const name = {
  firstName: 'Suraj',
  lastName: 'Pasayat',
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + ' ' + this.lastName + ' from ' + hometown + ', ' + state
  );
};

printFullName.call(name, 'Raigarh', 'Chhattisgarh');

const name2 = {
  firstName: 'Sachin',
  lastName: 'Tendulkar',
};

printFullName.call(name2, 'Mumbai', 'Maharashtra');
printFullName.apply(name2, ['Mumbai', 'Maharashtra']);

// bind
const name3 = {
  firstName: 'Rahul',
  lastName: 'Dravid',
};
let printFuncCopy = printFullName.bind(name3, 'Bangalore', 'Karnataka');

printFullName = function (hometown, state) {
  console.log(
    'Copy ' +
      this.firstName +
      ' ' +
      this.lastName +
      ' from ' +
      hometown +
      ', ' +
      state
  );
};
console.log(printFuncCopy);
printFuncCopy();
printFullName.call(name2, 'Mumbai', 'Maharashtra');
