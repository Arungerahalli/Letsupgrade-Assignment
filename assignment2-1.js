
/*

        PLEASE FIND THE PDF ATTACHED FOR THIS ASSIGNMENT
        FOR SCREENSHOTS AND EXPLAINATION.

*/

///////////////////////////////////////////////////

console.log("Hi LetsUpgrade");

var str = "LetsUpgrade";
console.log(str);

function test(){
    return (10*9);
}
console.log(test());

///////////////////////////////////////////////////

console.warn("Hi LetsUpgrade");

var str = "LetsUpgrade";
console.warn(str);

function test(){
    return (10*9);
}
console.warn(test());

///////////////////////////////////////////////////

var poftut = [
    { type: 'linux', name: 'ubuntu', age: 17},
    { type:'windows', name:'windows10', age:3},
    { type:'mac' , name:'macosx', age:12},
    ];
    
console.table(poftut);

///////////////////////////////////////////////////

console.error("Hi LetsUpgrade");

var str = "LetsUpgrade";
console.error(str);

function test(){
    return (10*9);
}
console.error(test());

///////////////////////////////////////////////////

console.info("Hi poftut.com");

var str = "Poftut.com";
console.info(str);


function test(){
    return (10*9);
}
console.info(test());

///////////////////////////////////////////////////

console.time();

function test(){
    return (10*9);
}

console.timeEnd();

////////////////////////////////////////////////////

console.group('1st group');
console.log('First message');
console.group('A group inside the 1st group');
console.log('A message inside the group inside the 1st group');
console.log('Another message inside the group inside the 1st group');
console.groupEnd();
console.log('2nd message'); 
console.groupEnd();

////////////////////////////////////////////////////


