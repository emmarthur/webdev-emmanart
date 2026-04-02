// function useTweets(errorData, data) {
//     const tweets = JSON.parse(data);
// }

// function immediately() { ... }

// function printHello() { ... }

// function blockfor500ms() { ... }

// setTimeout(printHello, 0)

// fs.readFile('./tweets.json', useTweets)

// blockfor500ms()

// console.log('test')

// setImmediate(immediately);

// //////////////////////////////

// const num = 3;

// function square(input) {
//     const result = input * input;
//     return result;
// }

// const output1 = square(num);
// const output2 = square(12);

// ///////////////////////

// function outer() {

//     function square(input) {
//         return input * input;
//     }
//     return square;
// }

// const generated = outer();
// const result = generated(3);

// /////////////////////////////

// function outer() {
//     let counter = 0;

//     function increment() {
//         counter++;
//     }
//     increment()
// }

// outer();

////////////////////////

function outer() {
  let counter = 0;

  function increment() {
    counter++;
  }

  return increment();
}

const newFun = outer();

newFun();
newFun();
