var A = 10;//global variable any function can use it
function Add_numbers1(){//function Add numbers1 with <br> added at end
    document.write( 20 + A + '<br>');
}
function Add_numbers2(){//function Add numbers2 with <br> added at end
    document.write( A + 100 + '<br>');
}
Add_numbers1();//will display on html
Add_numbers2();//will display on html
function Add_numbers3(){//function Add numbers3 with <br> added at end
    var B = 10;//local variable will only can be used within this function
    document.write( 20 + B + '<br>');
}
function Add_numbers4(){//function Add numbers4
    document.write(B + 100 );//Attempting to use var B but B is local to only function Add numbers3
}
Add_numbers3();//will display on html
Add_numbers4();//will NOT display on html
function Add_numbers4(){//you could use console.log() method to help debug why code for Add numbers4 doesn't work
    console.log(B + 100);
}
