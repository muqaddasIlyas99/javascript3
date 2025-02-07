// fUNCTIONS 1-(function definition) 2-(function call (invoke))-
// A function in JavaScript is a reusable block of code that performs a specific task when called. It helps make the code modular, reusable, and easier to manage.OR WE CAN SAY.....block of code that perform specific task, can be invoked whenever needed. function hmara 1 piece of code h its means bhht sa code/data hota h es ma jb b hmyen wo kam krwana hoga to hm esy call krskty hn. we can say its like a bkack-box...jesy hm input dety hn or jb b hmyen zarort hoti h hm ossy call krty hn. functions hmyen redundancy(repeatation) se bchaty hn. a picese of code jo br br likhna prrha h to osy 1 funtion ma daal du or jb b call kyrwana ho to krwa lo... 
// function myFunction(){
//     console.log("learning javascript!");
//     console.log("my name is muqaddas:");
// }
// myFunction();
// if i want to perform this task again. then i will call this function again.
// myFunction();//calling satatments.
// we can consider that hmyen koi specific message h jesy print krwana h. to hm kia kryen gy let see.//input define krny k liy hm en peranthisis k drmyan ma apny input ko lekh lety hn like , message.
function myFunction(message, name){ //function definition k andr jesy dekhty hn wo parameter->input
    console.log(message , name);
}
myFunction("I am learning of JavaScript , Muqaddas");//argument(functioncall k andr jesy lekhty hn) we can also print multiple inputs.
//Function which calculate two (2) numbers.
function sum(a ,b){
    console.log(a + b);
}
sum(2,4);
sum(245643,235473654);
// function se value return hoskti h or eysa krny k liy hm return keyword jo k 1 reservd keyword h Example:
function sum(x , y){// function ma jo b variables aty h  wo local veriables bn jaty hn kisi b function k and ya function k brasis k andr tk e hoty hoty hn os k bd exist nhi krty..(Function variables) like local variables of functions.and they have block scope.
    s = x + y;
    return s;// after return keyworword if we write anything then it will not print to console. in simople return k bd wala code in function execute nhi hota.
} 
  let val = sum(43 , 56);
  console.log (val);
// Arrow Function (these funvtions introduced in Modeern javascript).
const x = 5;// console ma ja k jb esy print krwayen gy to ya vakue dega 5.


//Function ko likhny ka 1 compact treeka h Arrow Function the sign of arrow function is (=>). Yhn Functions ko  variables k andr store kia jata h... arrow ko execute krny k liy kisi verable k andr store krna prta h For Example.
const arrowSum =(a ,b) => { //console ma ja k arrowSum ko call kryen gy to ya print krwa dega funciton ki definition.
    console.log (a + b);// agr console pa ja k arrowSum Function lekhyen gy or esy values de k pass kryen gy to ya es k mutabik ans dega.
};
const arrowmul = (u , v)=> {
 console.log( u * v);
};
const divide = (h , j) => {
    return h / j;   // we can also return the vakues in Arrow Function
};