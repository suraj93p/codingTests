const inputString = '20220420201001'
// Please format the inputString with two solutions and then design a benchmark test to compare the two solutions' performance.

// input
// the input format is correct, no verification is required; the length of the string still is 14.

// expect outputString: 2022Y04M20D 20:10:01

// solution one:
function format1(inputString) {
  const year = inputString.substring(0, 4); // 2022
  const month = inputString.substring(4, 6); // 04
  const date = inputString.substring(6, 8); // 20
  const hour = inputString.substring(8, 10); // 20
  const minutes = inputString.substring(10, 12); // 10
  const seconds = inputString.substring(12, 14); // 01

  return `${year}Y${month}M${date}D ${hour}:${minutes}:${seconds}`;
}

// solution two:
function format2(inputString) {
  const regexParse = /([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})/;
  const regexMatches = inputString.match(regexParse);
  return `${regexMatches[1]}Y${regexMatches[2]}M${regexMatches[3]}D ${regexMatches[4]}:${regexMatches[5]}:${regexMatches[6]}`;
}

// benchmark test
// You need to design a benchmark to compare the performance of the two solutions.

function analyseFunc(funcName, func, inputString) {
  let numberOfIterations = 100;

  performance.mark('start');
  for (let i = 0; i < numberOfIterations; ++i) {
    func.call(null, inputString);
  }
  performance.mark('end');
  console.log(performance.measure(funcName, 'start', 'end'));
}

analyseFunc("format1", format1, inputString);
analyseFunc("format2", format2, inputString);