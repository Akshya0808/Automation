// if else //
// Q1. Given number even hai ya odd check karo.
var x = 10;

if (x%2==0){
    console.log("even");
}
else 
{console.log("odd")};

//Q2. Given person ki age se check karo ki vote ke liye eligible hai ya nahi.

var age = 5;

if (age>18){
    console.log("person can vote")
}
else {
    console.log("person can not vote")
};

//Q3. Given number 3 aur 5 dono se divisible hai ya nahi check karo.

var a = 15;
if (a%3==0 && a%5==0){
 console.log("yes")
} 
else {
    console.log("no")
};

//Q4. Given number 7 ya 11 se divisible hai ya nahi check karo.

var x = 57;
if (x%7==0 && x%11==0){
    console.log("yes")
}
else {
    console.log("no")
};

//Q5. Do numbers mein se greater number find karo.

var a = 10
var b = 15

if (a > b){
    console.log("a is greater")
}
else{
    console.log("b is greater")
};

//Q6. Three numbers mein se greatest number find karo using if...else if

var a = 8
var b = 9
var c = 10
if (a>b && a>c){
    console.log("a")
}
else if(b>c && b>a){
    console.log("b")
}
else{
    console.log("c")
};

// Q7. Student ke marks ke basis par grade print karo:  Again
//90-100 → A
//80-89  → B
//70-79  → C
//60-69  → D
//Below 60 → Fail

var num =45

if (num >= 90 && num <= 100){
    console.log("Grade A")
}
else if (num >= 80 && num<=89){
    console.log("grade B")
}
else if (num>= 70 && num<=79){
    console.log("grade c")
}
else if (num>=60 && num<=69){
    console.log("Grade d")
}
else {
    console.log("fail")
};

//Q8. Number check karo:

//positive
//negative
//zero
var a = 0
if(a<0){
    console.log("negative")
}
else if (a>0){
    console.log("positive")
}
else{
    console.log("zero")
};

//Q10. Ek candidate ke 3 interview rounds hain:  Again
//round1 - pass
//round 2 = pass
//round 3 = pass
var round1 = "pass"
var round2 = "pass"
var round3= "fail"
if (round1=="pass"){
    console.log("candidate is pass")
    if (round2=="pass"){
        console.log("candidate is pass in 2nd round")
        if(round3=="fail"){
            console.log("candidate is fail in 3rd round")
        }
        else{
            console.log("candidate is pass in3rd round")
        }}
        else{
            console.log("candidate is fail in 2nd round")
        }
    }
else{
    console.log("candidate is fail in 1st round")
}

// function  //

// Ek function banao sayHello() naam se jo call karne par print kare:

function hello(){
    console.log ("SayHello")
}

hello();

// greetUser(name) function banao.   

function greetuser(name){
    console.log(name)
}
greetuser("Akshay");

// addNumbers(a, b) function banao jo 2 numbers ka addition print kare.

function add( a , b){
    console.log("total amount:", a+b)
}
add(5 , 5);

```checkNumber(num) naam ka function banao.
Rules:
Agar number 10 se bada hai → "Number is greater than 10"
Agar number 10 se chhota hai → "Number is less than 10"
Agar number 10 ke equal hai → "Number is equal to 10" ```

function checkNumber(num){
if (num > 10){
    console.log("Number is greater than 10")}
    else if(num < 10){
        console.log("Number is less than 10")
    }
    else {
        console.log("Number is equal to 10")
    }
}
checkNumber(15);

// printNames(names) naam ka function banao jo array ke saare names ko ek-ek karke print kare.

function printname(names){
for (var name of names){
    console.log(name)
}}
printname(["Akshay", "Rahul", "Amit", "Vikas"])

// printUser(user) naam ka function banao jo object ke name aur age ko print kare.
var akshay={
        "name": "akshay",
        "age": 32
    }
function printuser(user){
    
    console.log(user);
}
printuser(akshay);

//  arrow function 

//function checkNumber(num) {
 var checkNumber=num => {
if (num > 10){
    console.log("Number is greater than 10")}
    else if(num < 10){
        console.log("Number is less than 10")
    }
    else {
        console.log("Number is equal to 10")
    }
}
checkNumber(15);