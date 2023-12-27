document.write(typeof "Word");//This operator would output a "string" 
document.write(typeof 3);//This operator would now output a "number"
document.write(" 10" + 5);//This would tack on 5 onto the string "10" to output 105
function my_Function(){
    document.getElementById('Test').innerHTML = isNaN('This is a string');//isNAN (Not A Number) true for string
}
function my_Function2(){
    document.getElementById('Test2').innerHTML = isNaN('007');//isNAN false for number
}
document.write(2E310);//This would output Infinity
document.write(-3E310);//This would output -Infinity
function func_Infinity(){
    X = 1E309;//1E309 and higher will call Infinity 
    document.getElementById('Infinity').innerHTML = X;
}
function func_NegInfinity(){
    Y = -1E309;//-1E309 or higher will call -Infinity
    document.getElementById('NegInfinity').innerHTML = Y;
}
document.write(10 > 2);//This would output True
document.write(10 < 2);//This would output False
function Boolean(){
    Z = 10 > 5;//Boolean logic showing True
    document.getElementById('Boolean').innerHTML = Z;
}
function Boolean2(){
    W = 10 < 5;//Boolean logic showing False
    document.getElementById('Boolean2').innerHTML = W;
}
console.log( 2 + 2 );//This is use to display data in the console within the browser.
console.log( 100 < 10);//Boolean logic to display False in console
document.write(10 == 10);//This comparison will output True
document.write(3 == 11);//This comparison will output False
A = 10;
B = 10;
document.write(A === B);// This would output True because They have the same VALUE and TYPE.
C = 82;
D = "82";
document.write(C === D);// This would output False because They have the same VALUE but not TYPE (number 82 string "82")
E = "Magnus";
F = "Magnus";
document.write(E === F);// This would output True because they have the same VALUE and TYPE(string and string).
G = "Prime"
document.write(E === G);// This would output False because they have the different VALUES but same TYPE.
document.write(5 > 2 && 10 > 4);//Using boolean operator && (which is AND) this would output True
document.write(5 > 10 && 10 > 4);//This would output False
document.write(5 > 10 || 10 > 4);//Using boolean operator || (which is OR) this would output False
document.write(5 > 10 || 10> 20);//This would output False
function not_Function(){
    document.getElementById('Not').innerHTML = !(20 > 10);//Using boolean operator ! (which is NOT) this would display False
}
function not_Function2(){
    document.getElementById('Not2').innerHTML = !(5 > 10);//This will display True
}