// create a function that prints a poem
// function printPoem(){
//     console.log("Rwinkle Twinkle,little start");
//     console.log("How i wonder what you are");
// }
// printPoem();

// Q create a function to roll a dice and always display the value of the dice(1 to 6)

// function rollDice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rollDice();

// Q create a function that gives us the average of 3 numbers

// function calAvge(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);

// }
// calAvge(5,5,5);

// Q create a function that prints the multiplication table of a number
  
// function printTable(n){
//     for(let i=n;i<=n*10;i+=n){
//         console.log(i);
//     }
// }
// printTable(2); 

// Q create a function that returns the sum of numbers from 1 to n
// function getSum(n){
//     let sum =0;

//     for(let i=1;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// getSum(6);.

// Write a javaScript function that returns array elements larger than a number
// let arr =[88,9,10,1,2,3,4,5,6,7];
// let num =5;
// // elements larger than a number num
// function getElements(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr,num);

// write a javascript function to extract unique characters from a string 
// Example str =“abcdabcdefgggh”
// ans =“abcdefgh”

// let str = "abcdabcdefgggh";
// // function to get string wigth all unique elements 
// function getUnique(str){
//     let ans = "";
//     for(let i=0;i<str.length;i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans+=currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str);

// Write a javascript function that accepts a list of country names as input and returns the longest country name as output
// ex = country=["Australia","germany","united states of america"]
// output ="united states of america"

// let country = ["Australia","Germany","United States of America"];
// function longestName(country){
//     let ansIdx =0;
//     for(let i=0;i<country.length;i++){
//         let ansLen = country[ansIdx].length;
//         let currlen = country[i].length;
//         if(currlen > ansLen){
//             ansIdx =i;
//         }
//     }
//     return country[ansIdx];

// }
// longestName(country);


// Write a javascript function to count the number of vowels in a string argument
// let str ="apnacollege";
// function countVowels(str){
//     let count =0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i)=="a"|| str.charAt(i)=="e"||
//          str.charAt(i)=="i" || str.charAt(i)=="o"|| str.charAt(i)=="u"){
//             count++;
//          }
//     }
//     return count; 
// }

// write a javascript function to generate a random number within a range(start,end)

let start = 100;
let end = 200;
function generateRandom(start,end){
    let diff = end-start;
    return Math.floor(Math.random() * diff) +start;
}





















