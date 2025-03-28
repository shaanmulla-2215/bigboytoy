let num=20;
console.log(num);
console.log(typeof num);

let name="ana";
console.log(name);
console.log(typeof name);

let isPresent=true;
console.log(isPresent);
console.log(typeof isPresent);

let colors=["blue","pink"]
console.log(colors);
console.log(typeof colors);

let  robot={
    name:"Alexa",
    age:25,
}
console.log(robot);
console.log(typeof robot);

let age=null;
let num1;
console.log(typeof age);
console.log(typeof num1);
age=40;
console.log(age);

var agee=20;
console.log(agee);
var agge=40;
console.log(agge);
aage=60;
console.log(aage);

let num2=55;
console.log(num2)
num3=78;
console.log(num3);

const pi=3.142;
console.log(pi);

let a=50;
let b=30;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(a++);
console.log(a--);
console.log(a*b);
console.log(a**b);

let c=30;
let d=60;
c+=d;
console.log(c);

let x=true;
let y=false;
console.log(x&&y);
console.log(x||y);
console.log(!x);

let e=20;
let f=55;
console.log(e==f);
console.log(e!=f);
console.log(e<f);
console.log(e>f);
console.log(e<=f);
console.log(e>=f);
console.log(e===f);

let firstName="shhan";
let lastName="mulla";
console.log(firstName);
console.log(firstName.length);
console.log(firstName.indexOf('o'));
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.concat(' ',lastName));
console.log(firstName.slice(0,6));
console.log(firstName.charAt(2));
console.log(firstName.startsWith('k'));
console.log(firstName.endsWith('o'));
console.log(firstName.lastIndexOf('o'));
console.log(firstName.includes('o'));
console.log(firstName.substring(0,3));
console.log(firstName.split('m'))
console.log(firstName.replace('a','s'));

let Firstname=['Nicole','Pham','Laeno'];
console.log(Firstname);
console.log(Firstname.length);
console.log(Firstname[0]);
console.log(Firstname.indexOf('Pham'));
console.log(Firstname.includes('Pham'));
console.log(Firstname.push("Mike"));
console.log(Firstname.pop());
console.log(Firstname.shift());
console.log(Firstname.unshift('Mike'));
console.log(Firstname.slice(0,1));
console.log(Firstname.reverse());
console.log(Firstname.splice(0,2));
console.log(Firstname.concat(['Nicole','Noelle']));

function hello(){
    console.log("good morning");
}
hello();

function hello(name){
    console.log("good morning"+" "+name);
}
hello("Ana");

function add(a,b){
   return a+b;
}
console.log(add(20,80));

let div=function(t,r){
    return t/r;
}
let finalresult=div(23,56);
console.log(finalresult);

let sub=(p,q)=>{
    return p-q;
}
let ans=sub(52,69);
console.log(ans);

let person={
    name:'josh',
    age:30,
}
console.log(person);
console.log(person.name);
person.name="krish";
console.log(person);



let hour = new Date().getHours();
if (hour < 18) {
console.log("Good day");
} else {
console.log("Good evening");
}


let day=1;
switch(day){
case 1:
console.log("Monday");
break;
case 2:
    console.log("tuesday");
    break;
    default:
        console.log("Enter proper value");
}