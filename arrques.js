// const ages = [22, 24, 25, 26, 27, 200];

// const noofpeople = ages.length;

// for(i = 0; i < noofpeople; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }

// const ages = [2,3,4,5,6,7,8,9,];
// const noofpeople = ages.length;

// for(i = 0; i < noofpeople; i++){
//     if(ages[i] % 2 == 1){
//         console.log(ages[i])
//     }
// }

// const numbers = [1, 3, 4, 5, 8, 9];
// const biggestNumber = Math.max(...numbers);

// console.log(biggestNumber);

// const numbers = [1, 3, 4, 5, 8, 9];
// let biggestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (biggestNumber < numbers[i]) {
//     biggestNumber = numbers[i];
//   }
// }
// console.log(biggestNumber);

// const personArray = ["Chakshu", "Mahika", "Hardik"];
// const genderArray = ["male", "female", "male"];

// for (let i = 0; i < personArray.length; i++) {
//   if (genderArray[i] == "male") {
//     console.log(personArray[i]);
//   }
// }


//object in array

// const allusers = [{
//     firstname: "chakshu",
//     gender: "male"
// },{
//     firstname: "hardik",
//     gender: "male"
// },{
//     firstname: "mahika",
//     gender: "female"
// }]

// for(let i =0; i< allusers.length; i++){
//     if(allusers[i]["gender"] == "male"){
//         console.log(allusers[i]["firstname"])
//     }
// }

const numbers = ["one", "two", "three", "four"];

numbers.reverse();

console.log("Reversedarray:", numbers);


const original= [10, 20, 30, 40, 50];

const reversedcopy= [...original].reverse();

console.log("Original:", original);
console.log("Reversed copy:", reversedcopy);