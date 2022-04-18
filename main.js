function runProgram(input) {
    input=input.trim().split("\n");
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n=+input[line];
        line++;
        var str=input[line];
        line++;
        var bag="";
        var t=0;
        for(var j=0;j<n;j++){
            if(j%2!=0){
                t=Number(str[j]);
            for(var k=0;k<t;k++){
                bag+=str[j-1];
            }
            }
           
        }
                console.log(bag);
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  