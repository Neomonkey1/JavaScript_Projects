var A = 'This is var A';
var B = ' This is var B';
function myFunction(){// This function will display the string from var A and var B
    var sentence = A;
    sentence += B;
    document.getElementById("demo1").innerHTML = sentence;
    
}