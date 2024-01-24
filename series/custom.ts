type myCustomDataType = {
  name: string;
  age: number;
  address: string;
  salary: number;
};

let userData: myCustomDataType[] = []; // Explicitly specify the type as an array

let newUser: myCustomDataType = {
  name: "jack",
  age: 22,
  address: "dhaka",
  salary: 20000,
};

userData.push(newUser);

console.log(userData);
