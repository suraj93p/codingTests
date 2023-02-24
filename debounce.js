function debounce(func, timeout = 300) {
    let timer;
    let context = this;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(context, args);
        }, timeout);
    };
}

function debounce_leading(func, timeout = 300) {
    let timer;
    let context = this;
    return function (...args) {
        if (!timer) {
            func.apply(context, args);
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            timer = undefined;
        }, timeout);
    };
}