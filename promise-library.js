var promiseFn = function (url) {
  this.url = url;
  var self = this;

  this.cb_success = null;
  this.cb_error = null;

  setTimeout(function () {
    self.cb_success();
  }, 1000);

  return this;
};

promiseFn.prototype.then = function (successCallback) {
  this.cb_success = successCallback;
  return this;
};

promiseFn.prototype.error = function (failureCallback) {
  this.cb_error = failureCallback;
  return this;
};

var successFunction = function () {
  console.log("success");
};
var failureFunction = function () {
  console.log("failure");
};

var promiseObj = promiseFn("www.google.com");
console.log(promiseObj);
promiseObj.then(successFunction).error(failureFunction);
