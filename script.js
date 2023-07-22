
//primitive-Number,strings,boolean
var a;
let b;
const c=10;


//object-object, null and undefined
//const value cannot be changed
// c=12;

//dynamic type language stores any type of values floating,number,string
a=5;
b="saif"

console.log(a,b,c);

let d=10;
let e={};
console.log(Math.pow(2,3));
console.log(Math.ceil(2.35));
console.log(Math.floor(2.7));
console.log(Math.round(2.4));
console.log((Math.random()*100).toFixed(0)+1);
console.log(Math.sqrt(16));


//string methods
const ab="abdullah";
console.log(ab[0]);
//last characcter
// console.log(ab.slice(-1));
//slice(start,end)-end is not included
console.log(ab.slice(0,5));
// console.log(ab.split(''));
let change="my name is mohammad saiful hasan";
console.log(change.split(" "));
let ch=change.split(" ");

//last character
console.log(ch[ch.length-1]);
console.log(ch.indexOf('saiful'));
console.log(ch.includes('my'));
console.log(ch.includes('abjkasbdjk'));
console.log(ch.concat('yooo!!!'));
console.log(change.concat(' yoooo!'));


//array
let arr=[1,2,3,3234,32,5,45,54,45];
console.log(arr);

//looping 1
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//looping 2-(use this array
for(let i of arr){
    console.log(i);
}

//looping 3 -use in object
for(let i in arr){
    console.log(arr[i]);
}

//let and const-blocked scope
{
    let a=10;
}

{
    const b=10;
}

// function name(){
//     console.log("saif");
// }
// saif()
const name=function(){
    console.log('saif');
}
name()


// let a=10;
// let name="abudullah"
// const reqes=fetch("")
// console.log("saif");