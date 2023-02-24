// Import stylesheets
import './style.css';

// Write Javascript code!
const sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    };
};

console.log(sum(1)(2)(3)());
