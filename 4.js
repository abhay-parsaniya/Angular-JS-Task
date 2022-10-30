import _ from "lodash";

//shallow copy means we just change the object value not a nested object value
//deep copy means we change the value of nested object value
//problem
console.log("problem for shallow copy");

let obj1 = { name: "Abhay" };
let obj2 = obj1;
obj2.name = "Patel"; //here we get this outpu bcz obj1 and obj2 memroy location is same,its pass by the refrence not the value
console.log("obj1", obj1);
console.log("obj2", obj2);

//soluton 1 for shallow copy
console.log("after using object assign");

obj1 = { name: "Abhay" };
obj2 = Object.assign({}, obj1);
obj2.name = "Patel";
console.log("obj1", obj1);
console.log("obj2", obj2);

//soluton 2 for shallow copy
console.log("after using spread operator");

obj1 = { name: "Abhay" };
obj2 = { ...obj1 };
obj2.name = "Patel";
console.log("obj1", obj1);
console.log("obj2", obj2);

// problem when we will try to do deep copy
console.log("problem for deep copy");

obj1 = {
  name: "Abhay",
  address: {
    city: "Rajkot",
    State: "Gujarat",
  },
};
obj2 = { ...obj1 };
obj2.address.city = "Ahemdabad";
console.log("obj1", obj1); //again here we get the changes in the both objects
console.log("obj2", obj2);

//solution for deep copy
console.log("after using json stringfy");

obj1 = {
  name: "Abhay",
  address: {
    city: "Rajkot",
    State: "Gujarat",
  },
};
obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.city = "Ahemdabad";
console.log("obj1", obj1); //again here we get the changes in the both objects
console.log("obj2", obj2);

//solution2 for deep copy loadesh
console.log("after using lodash");

obj1 = {
  name: "Abhay",
  address: {
    city: "Rajkot",
    State: "Gujarat",
  },
};
obj2 = _.cloneDeep(obj1);
obj2.address.city = "Ahemdabad";
console.log("obj1", obj1);
console.log("obj2", obj2);
