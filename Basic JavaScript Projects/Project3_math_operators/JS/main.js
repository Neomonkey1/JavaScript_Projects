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