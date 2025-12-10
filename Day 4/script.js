var a=2; // global scope
var a=4; //can be redeclared and reinitialized
let b=5; // block scope
b=6 // can be reinitialized
const c=8; //needs to ne initialized , cannot be redeclared or initialized

//array declaration
var arr=[1,2,3,4,5];
console.log(arr);

//object
var obj={
    name:"kavi",
    age:18
}
console.log(typeof arr);
console.log(typeof object);

//Arithmetic operations
 var a=20;
 b="10";
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);

 //Relational operators
 var a=10;
 b="20";
 console.log(a>b);
 console.log(a<b);
 console.log(a>=b);
 console.log(a<=b);
 console.log(a==b);
 console.log(a!=b);
 console.log(a===b);
 console.log(a!==b);

 //Assignment operators

a=10;
console.log(a);
a+=10;
console.log(a);
a-=10;
console.log(a);
a*=2;
console.log(a);
a/=2;
console.log(a);
a%=2;
console.log(a);

//Logical operators

a=true;
b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);

//loops
//for loop
for(let i=1;i<=10;i++){
    console.log(i);
}

//While loop
var a=0;
while(a!==5){
    a++;
    console.log(a);
}
console.log(a);

//do while

a=0;
do{
    console.log(a);
}while(a===1);

//Conditional statements

if(a%2===0){
    console.log("Even");
}

if(a%2===0) console.log("Even");
else console.log("Odd");

var mark=90;
if(mark>=90) console.log("O");
else if(mark>=80) console.log("A");
else console.log("F");

//switch
day=1;
switch(day){
    case 0:{
        console.log("Sunday");
        break;
    }
   case 1:{
        console.log("Monday");
        break;
    }
    case 4:{
        console.log("thursday");
        break;
    }
    case 2:{
        console.log("tuesday");
        break;
    }
    case 3:{
        console.log("wednesday");
        break;
    }
    case 5:{
        console.log("friday");
        break;
    }
    case 6:{
        console.log("Saturday");
        break;
    }
    
}
 //ternary operator

 a=10;
 var res=(a%2===0)?"Even":"odd";
 console.log(res);

 mark=90;
 var res=(mark>=90)?"O":(mark>=70)?"A":(mark>=50)?"B":"Fail";
 console.log(res);

 function add(){
    console.log(10+20);
 }
 add();

 function addpara(a,b){
    console.log(a+b);
 }
 addpara(10,20);

 //Arrow function
var addParam =(a,b)=>{
    console.log(a+b);
}
addParam(10,20);
console.log(typeof addParam);

const a=[10,20,30];
const b=[...a,40,50];
console.log(a);
console.log(b);