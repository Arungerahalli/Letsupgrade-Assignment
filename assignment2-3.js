//Numbers
/*
* The number type represents both integer and floating point numbers.
* Used during arithmetic operations.
* Returns "Infinity" when divide by zero occurs.
*/

let n = 123;        //Decimal
console.log(n);
n = 12.345;         //Floating point
console.log(n);
n = 1/0;            //Divide by zero
console.log(n);     //Infinity

let a=900719925474099234676433476876;
console.log(a);     //9.007199254740992e+29


//BigInt
/*
* These data types are represented by "n" at the end.
* Used when dealing with numeric values greater than 9007199254740991
* and less than -9007199254740991.
*/

a=900719925474099234676433476876n;
console.log(a);     //900719925474099234676433476876n


//String
/*
* Consists of characters
* Must be enclosed between " "(Double quotes) or ' '(Single quotes) or ` `(Backticks)
*/

let str = "Arun";    
console.log(str);           //Arun
let str2 = 'Single quotes';
console.log(str2);          //Single quotes
let phrase = `Hello ${str}`;
console.log(phrase);        //Hello Arun


//Boolean
/*
* The boolean type has only two values: true and false.
* This type is commonly used to store yes/no values,
* true means “yes, correct”, and false means “no, incorrect”.
*/

var a1=12,a2=22;
console.log(a1>a2);         //false
console.log(a1<a2);         //true


//null
/*
* The special null value does not belong to any of the types described above.
* It forms a separate type of its own which contains only the null value.
* It’s just a special value which represents “nothing”, “empty” or “value unknown”.
*/

let age=null;
console.log(age);           //null


//undefined
/*
* The special value undefined also stands apart. It makes a type of its own, just like null.
* The meaning of undefined is “value is not assigned”.
* If a variable is declared, but not assigned, then its value is undefined.
*/

let my_age;
console.log(my_age);        //undefined


//object
/*
* The object type is special.
* All other types are called “primitive” 
* because their values can contain only a single thing (be it a string or a number or whatever). 
* In contrast, objects are used to store collections of data and more complex entities.
*/

var bio={ Name:"Arun" , Age:20 , City:"Bengaluru" };
console.log(bio);           //{ Name: 'Arun', Age: 30, City: 'Bengaluru' }
console.log(bio.Name);      //Arun
console.log(bio.Age);       //20
console.log(typeof bio);    //object
