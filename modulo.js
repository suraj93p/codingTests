process.stdin.resume();
process.stdin.setEncoding("utf-8");

var input_ = "";

process.stdin.on("data", function (data) {
  input_ += data.toString().trim();
  input_ += "\n";
});

function Solve(num) {
  var i = 1;
  while ((i * 11111111) % 10000000 !== num) {
    ++i;
  }
  var my_string = i.toString(10);
  while (my_string.length < 7) {
    my_string = "0" + my_string;
  }
  return i;
}

process.stdin.on("end", function () {
  input_ = input_.replace(/\n$/, "");
  input_ = input_.split("\n");
  var T = parseInt(input_[0], 10);
  for (var t_i = 0; t_i < T; t_i++) {
    process.stdout.write("input:" + input_[1] + "\n");
    var n = parseInt(input_[1], 10);
    var res = Solve(n);
    process.stdout.write("" + res);
    // output.write('\n');
  }

  process.exit();
});
