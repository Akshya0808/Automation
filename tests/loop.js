//loops//
//Q1 — for loop
//Ek number num = 7 diya hai.
// Qus 1 = 7 ka table 1 se 10 tak print karo.

var i = 7
for ( i=1; i<=10; i++){
    console.log(i * 7)
}

//Qus 2 = Q2 — for...of use karke sirf even numbers print karo.

var arr = [10, 25, 30, 45, 50, 65]
for (var n of arr){     //"arr ke andar jo bhi values hain, unko ek-ek karke n ke andar daalo."
   if(n%2==0){
    console.log(n)}
}

//Qus 3 = Q3 — break ⭐⭐
//Numbers 1 se 20 tak loop karo Ans stop at 13
for( i=0; i<=20; i++){
    if(i==13){
        break
}
{console.log(i)}
}

// qus 4 = for...of + break use karke array mein pehla number jo 20 se bada hai, usko print karo aur loop stop karo.

var arr = [12, 7, 25, 4, 18, 30, 9]
 for (var n of arr){
    if(n>20){
    console.log(n)
       break 
    }
}
 

//Qus 5 = Q4 — Nested loop
//2 se 5 tak numbers ke tables print karo, aur har table 1 se 3 tak.

for (var i = 2; i <= 5; i++) {

    for (var j = 1; j <= 3; j++) {

        console.log(i + " x " + j + " = " + (i * j));

    }
}

// infitie loop
// while loop
// do while loop





