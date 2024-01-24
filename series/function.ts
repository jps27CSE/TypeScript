let myfunction: (data: number | string) => void;

myfunction = (data: number | string) => {
  console.log(data);
};

myfunction("jack");

let sumFunction: (number1: number, number2: number) => number;

sumFunction = (number1: number, number2: number) => {
  return number1 + number2;
};

console.log(sumFunction(1, 2));
