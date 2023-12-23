function function_Add(){//add function
    var A = 2 + 2;
    document.getElementById("Add").innerHTML ="2 + 2 = " + A;
}
function function_Subtraction(){//subtraction function
    var B = 5 - 2;
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + B;
}
function Multiplication(){//Multiplication function
    var C = 6 * 8;
    document.getElementById("Multiple").innerHTML = "6 x 8 = " + C;    
}
function Division(){//Division function
    var D = 48 / 6;
    document.getElementById("Divide").innerHTML = "48 / 6 = " + D;
}
function more_Math(){//Function with add, subtract, multiply and divide all at once
    var E = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Simple_Math").innerHTML = "(1 + 2) x 10 / 2 - 5 = " + E;
}
function more_Math2(){//Function for Modulus (the remainder after the dividend is divided)
    var F = 25 % 6;
    document.getElementById("Simple_Math2").innerHTML = "When you divide 25 by 6 you have a remainder of: " + F;
}
function negation_Operator(){//Function for negation operator
    var G = 10;
    document.getElementById("Simple_Math3").innerHTML = -G;//makes a operand negative
}
function function_Increment(){//Function for Increment
    var H = 5;
    H++;//to Increment in JS use the ++ after a var
    document.getElementById("Increment").innerHTML = "Increment 5 is now: " + H;
}
function function_Decrement(){//Function for Decrement
    var I = 5.5;
    I--;//to Decrement is JS use the -- after a var
    document.getElementById("Decrement").innerHTML = "Decrement 5.5 is now: " + I;
}
window.alert(Math.random());//Math.random will random a number 0 or 1
window.alert(Math.random() * 10);//Math.random * whatever number will get a random number between 0 and whatever number, this time 0 - 10 
function function_MathObject(){//Function for PI ,a Math Object in JS.
    var J = Math.PI//Displays PI
    document.getElementById("MathObject").innerHTML = J
}
function function_MathObject2(){//Function for square root of 2, another Math Object in JS
    var K = Math.SQRT2//Math.SQRT equals square root
    document.getElementById("MathObject2").innerHTML = K
}