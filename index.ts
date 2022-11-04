// variable declaration

const name: string = "polka";

const age: number = 22;

// function declaration
// we declare the arguement's datatype
const inc = (counter: number) => {
    let _ = "x";
};

// arrays declaration
let arr: string[] = ["apple", "mango"];

arr.push("banana");

// api dealing

// const fetchData = (apiUrl) => {
//     return fetch(apiUrl).then((response) => response.json());
// };
// const data = fetchData("myAwesomeApi.com/data/subscribe"); // !real api
// console.log(data?.name);
// console.log(data.email);
// console.log(data.age);
// console.log(data.isMarried);

// will converted into this

interface IUser {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
}

const fetchData = (apiUrl: string): Promise<IUser> => {
    return fetch(apiUrl).then((res) => res.json());
};

// for every obj in ts u need to make interface.
// it is good practice to begin name of interface with I
// but it is then mandatory to use the keys that we defined in the interface
// but we can make the key optional as wel by using nullish ?. in interface.

// we defined an object
interface IProgramming {
    name: string;
    awesome?: boolean; // we made the awesome key optional
}

const typeScript = {
    name: "TypeScript",
    awesome: true,
};
// DOUBT: what if we define interface after the object.
// DOUBT: can we define multiple interface for same obj.

// we can then use that object as per our use.

// const user: Promise<IUser> = fetchData("abc.com/api/home");
// user.name;
// user.email;
// user.age;
// user.isMarried;

// If we want to change one function into ts we have to do following things

// WE CAN GIVE MULTIPLE PREDEFINED OPTION TO THE USER.
// enum - enumerator - collection of options can be stacked here.

enum Cheese {
    cheddar = "cheddar",
    gouda = "gouda",
    goat = "goat",
    bluemold = "bluemold",
}

// if funct is not returning anything just give there void.
const serveCheese = (cheeseType: Cheese, serving: number): void => {
    console.log(`You want ${serving} of ${cheeseType}`);
};

serveCheese(Cheese.bluemold, 3);
