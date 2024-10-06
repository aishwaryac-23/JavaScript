//method m1
var st=["java","java Script","Selinium","python","C","C++"];
console.log(st);
var res=function calc(x,y){
    return x+y;
}
//calc(10,20);

var st1=[13,15,21,52,71];
function checkOdd(value){
    return value%2!=0;
}
console.log(st1.every(checkOdd));


var ar2=[20,56,34,21,75,43,29]
function getOdd(value){
    return value%2!=0;
}
console.log(ar2.filter(getOdd));

var ar3=ar2.filter(getOdd);
console.log(ar3);

console.log(st.pop());//remove last element
console.log(st.shift());//remove first element

ar=[10,20,30,40,50,60,70,80,90,100];
var ar4=ar.copyWithin(0,3,8);
console.log(ar4);

console.log(st.fill("NEC"));//fill the array with the element

st=["java","java Script","Selinium","python","C","C++"]
console.log(st.reverse());

var st2=new Array()[10,20,30,40];

for(i=0;i<st1.length;i++){
    console.log(st1[i]);
}