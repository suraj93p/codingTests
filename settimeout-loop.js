for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

for (var i = 0; i < 5; ++i) {
  setTimeout(
    (function (a) {
      return function () {
        console.log(a);
      };
    })(i),
    i * 1000
  );
}

for (var i = 0; i < 5; ++i) {
  (function (a) {
    setTimeout(function () {
      console.log(a);
    }, i * 1000);
  })(i);
}

// continuous, not time separated
for (var i = 0; i < 5; ++i) {
  setTimeout(
    (function (a) {
      console.log(a);
    })(i),
    i * 1000
  );
}
