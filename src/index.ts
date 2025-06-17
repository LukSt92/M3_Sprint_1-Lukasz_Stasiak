// listToDict
// map
// filter
// reduce

// Example for cars
const cars = {
  modelS: { brand: "Tesla", color: "white", price: 79999 },
  corolla: { brand: "Toyota", color: "silver", price: 20000 },
  mustang: { brand: "Ford", color: "red", price: 45000 },
  civic: { brand: "Honda", color: "blue", price: 22000 },
  model3: { brand: "Tesla", color: "black", price: 39999 },
  beetle: { brand: "Volkswagen", color: "yellow", price: 18000 },
};

// Example for students
const students = {
  alice: { age: 20, major: "Computer Science", gpa: 3.8 },
  bob: { age: 19, major: "Mathematics", gpa: 3.2 },
  charlie: { age: 21, major: "History", gpa: 3.5 },
  diana: { age: 22, major: "Biology", gpa: 3.9 },
  eric: { age: 20, major: "Psychology", gpa: 3.6 },
  fiona: { age: 19, major: "Literature", gpa: 3.4 },
};

interface Dict<T> {
  [k: string]: T;
}

// Array.prototype.map, but for Dict
function mapDict<T>(
  dict: Dict<T>,
  callback: (value: T, key: string) => T
): Dict<T> {
  const objKeys = Object.keys(dict);
  const result: Dict<T> = {};
  objKeys.map((key) => {
    result[key] = callback(dict[key], key);
  });
  return result;
}

// Array.prototype.filter, but for Dict
function filterDict<T>(
  dict: Dict<T>,
  callback: (value: T, key: string) => boolean
): Dict<T> {
  const objKeys = Object.keys(dict);
  const result: Dict<T> = {};
  objKeys.filter((key) => {
    if (callback(dict[key], key)) result[key] = dict[key];
  });
  return result;
}

// Array.prototype.reduce, but for Dict
function reduceDict(...args: any[]): any {}

const mapTest = mapDict(students, (student) => ({
  ...student,
  gpa: student.gpa * 10,
}));

console.log(mapTest);

const filterTest = filterDict(cars, (car) => car.price > 50000);
const filterTest2 = filterDict(
  cars,
  (car) => car.color === "black" || car.color === "silver"
);

console.log(filterTest);
console.log(filterTest2);
