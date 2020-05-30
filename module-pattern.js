var HTMLChanger = (function () {
  var contents = "contents";

  return {
    callChangeHTML: function () {
      console.log(contents);
    },
  };
})();

HTMLChanger.callChangeHTML(); // Outputs: 'contents'
console.log(HTMLChanger.contents); // undefined
