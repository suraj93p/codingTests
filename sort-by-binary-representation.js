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
  var inputLines = input.split("\n"),
    testCases = parseInt(inputLines[0]),
    lineCounter = 1,
    no2binaryMap = {},
    i = 0,
    noOfTasks = 0,
    dayTaskLine = "",
    dayTaskList = [],
    taskObjArray = [],
    j = 0,
    taskObj = {},
    currTask = 0,
    binaryRep = "",
    taskRep = 0;
  for (i = 0; i < testCases; ++i) {
    noOfTasks = parseInt(inputLines[lineCounter++]);
    dayTaskLine = inputLines[lineCounter++];
    dayTaskList = dayTaskLine.split(" ");
    taskObjArray = [];
    for (j = 0; j < noOfTasks; ++j) {
      taskObj = {};
      currTask = parseInt(dayTaskList[j]);
      if (no2binaryMap[currTask]) {
        taskObj.task = no2binaryMap[currTask];
        taskObj.number = currTask;
      } else {
        binaryRep = (currTask >>> 0).toString(2);
        taskRep = (binaryRep.match(/0/g) || []).length;
        taskObj.task = taskRep;
        taskObj.number = currTask;
        no2binaryMap[taskObj.number] = taskObj.task;
      }
      taskObjArray.push(taskObj);
    }
    taskObjArray.sort(function (a, b) {
      return b.task - a.task;
    });
    process.stdout.write(
      taskObjArray
        .map(function (obj) {
          return obj.number;
        })
        .join()
        .replace(new RegExp(/,/g), " ") + "\n"
    );
  }
}
