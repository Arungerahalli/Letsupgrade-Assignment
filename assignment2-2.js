//var

console.log(a);         //undefined
var a;
console.log(a);         //undefined
a="Karthik"
console.log(a);         //Karthik
a=1234567890
console.log(a);         //1234567890
var b=10;
console.log(b);         //10


//let

let z=77;
console.log(z);             //77

{       //start of block
    //console.log(a);       //ReferenceError
    let a;
    console.log(a);         //undefined
    a="Hadagali";
    console.log(a);         //Hadagali
    a="Modified"
    console.log(a);         //Modified
    let c=[1,2,3,4,5];
    console.log(c);         //[ 1, 2, 3, 4, 5 ]
    let z=88;
    console.log(z);         //88
}       //end of block

console.log(a);             //1234567890
//console.log(c);           //ReferenceError, since c scope is limited to the block
console.log(z);             //77


//const

let name="Dhoni";           
console.log(name);                  //Dhoni
const known_as="Captain Cool";      
console.log(known_as);              //Captain Cool

name="MSD";
console.log(name);                  //MSD
//known_as="Aggressive Captain";      //TypeError            


/*          CONCLUSION

var:
  * function scoped
  * undefined when accessing a variable before it's declared

let:
  * block scoped
  * ReferenceError when accessing a variable before it's declared

const:
  * block scoped
  * ReferenceError when accessing a variable before it's declared 
  * can't be reassigned

*/

