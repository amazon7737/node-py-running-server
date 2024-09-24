const { spawn } = require("child_process");

function run(path: String) {
  const python = spawn("python", [path]);

  python.stdout.on("data", (data: String) => {
    console.log("python 스크립트 실행: ", Buffer.from(data).toString());
  });
}

export default { run };
