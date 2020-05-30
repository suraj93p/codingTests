process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  var str = input.split("\n")[1],
    i,
    count,
    j,
    allSubstr;
  var allPrefixStrArr = getAllPrefixStrings(str);
  for (i = 0; i < allPrefixStrArr.length; ++i) {
    allSubstr = [];
    allSubstr = allSubstr.concat(getAllSubstrings(allPrefixStrArr[i]));
    count = 0;
    for (j = 0; j < allSubstr.length; ++j) {
      if (checkPalindrom(allSubstr[j])) {
        if (allSubstr[j].length > count) {
          count = allSubstr[j].length;
        }
      }
    }
    process.stdout.write(" " + count);
  }
}

function getAllPrefixStrings(str) {
  var j,
    result = [];
  var strLen = str.length;
  for (j = 1; j < strLen + 1; ++j) {
    var tempStr = str.slice(0, j);
    if (result.indexOf(tempStr) === -1) {
      result.push(tempStr);
    }
  }

  return result;
}

function getAllSubstrings(str) {
  var i,
    j,
    result = [];
  var strLen = str.length;
  for (i = 0; i < strLen; ++i) {
    for (j = i + 1; j < strLen + 1; ++j) {
      var tempStr = str.slice(i, j);
      if (result.indexOf(tempStr) === -1) {
        result.push(tempStr);
      }
    }
  }

  return result;
}

function checkPalindrom(palindrom) {
  palindrom = palindrom + "";
  return palindrom === palindrom.split("").reverse().join("");
}
