let test:String = "Hello";
console.log(`Is Hello == hello? | Predict False \n${test == "hello"}`);
console.log(`Is Hello != hello? | Predict True \n${test != "hello"}`);
console.log(`Is Hello.toLowerCase() == hello? | Predict True \n${test.toLowerCase() == "hello"}`);
let num:Number = 23;
console.log(`23 > 20 | Predict True \n${num > 20}`);
console.log(`23 < 20 | Predict False \n${num < 20}`);
console.log(`23 >= 20 | Predict True \n${num >= 20}`);
console.log(`23 <= 20 | Predict False \n${num <= 20}`);
console.log(`23 == 20 | Predict False \n${num == 20}`);
console.log(`23 != 20 | Predict True \n${num != 20}`);

let a:String = "Hello";
let b:Number = 10;
console.log(`a == "Hello" || b == 15 | Predict True \n${a == "Hello" || b == 15}`);
console.log(`a == "Hello" && b == 15 | Predict False \n${a == "Hello" && b == 15}`);

let arr:Number[] = [10,12,13,14];
console.log(`Is 12 in array? | Predict True \n${arr.includes(12)}`);
console.log(`Is 15 in array? | Predict False \n${arr.includes(15)}`);
