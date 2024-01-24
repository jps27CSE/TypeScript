interface iUser {
  id: string;
  name: string;
}

let user: iUser;

user = {
  id: "1",
  name: "jack",
};

console.log(user);
