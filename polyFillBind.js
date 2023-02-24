const name = {
    firstName: "Suraj",
    lastName: "Pasayat"
}

const printFullName = function (hometown, state, country) {
    console.log(this.firstName + " " + this.lastName + ", " + hometown + ", " + state + ", " + country);
}

Function.prototype.myBind = function (...args) {
    const self = this;
    const params = args.slice(1);
    return function (...args2) {
        self.apply(args[0], [...params, ...args2]);
    }
}

const printBind = printFullName.bind(name, "Raigarh");
printBind("Chhattisgarh", "India");

const printMyBind = printFullName.myBind(name, "Raigarh");
printMyBind("Chhattisgarh", "India");