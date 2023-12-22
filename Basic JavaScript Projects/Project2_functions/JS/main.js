var A = 'This is var A';
var B = ' This is var B';
function myFunction(){// This function will display the string from var A and var B
    var sentence = A;// modified function to concatenate var A and B
    sentence += B;
    document.getElementById("demo1").innerHTML = sentence;
} 
function myFunction2(p1, p2) {
    return p1 * p2;
}
let result = myFunction2(10, 5);
document.getElementById("demo2").innerHTML = result;