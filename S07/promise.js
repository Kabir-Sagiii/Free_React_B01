function step1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Step1 Executed");
    }, 3000);
  });
}

function step2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Step2 Executed");
    }, 2000);
  });
}

async function f1() {
  var data = await step1();
  console.log(data);
  var d = await step2();
  console.log(d);
}

f1();

// step1()
//   .then((data) => {
//     console.log(data);
//     step2()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch(() => {
//         console.log("error 2");
//       });
//   })
//   .catch(() => {
//     console.log("error 1");
//   });
