function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 Complete");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 Complete");
    callback();
  }, 1000);
}

// step1(() => {
//   step2(() => {
//     console.log("All step completed");
//   });
// });

// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 Complete");
//     }, 1000);
// }

// Nested Callbacks (Callback Hell)
// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All Steps Completed");
//         });
//     });
// });
