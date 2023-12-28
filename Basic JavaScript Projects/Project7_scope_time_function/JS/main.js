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
function get_Date(){
    if (new Date().getHours() < 21){//using If statement if it's before 9:00pm it will display 'How are you today?' 
        document.getElementById('Greeting').innerHTML = 'How are you today?';//if after 9:00pm nothing will display        
    }    
}
function get_Day(){//using If statement if it's NOT the weekend it will display 'It's a weekday'
    if (new Date().getDay() != 0,6){//if it is the weekend nothing will display
        document.getElementById('Weekday').innerHTML = 'It\'s a weekday.';
    }
}
function Age_Function(){
    Age = document.getElementById('Age').value;//receive input from html
    if (Age >= 18){//using If statement if Age is 18 or older Vote will display below
        Vote = 'You are old enough to vote!';
    }
    else{//using Else statement if Age is younger then 18 Vote will display below
        Vote = 'You are not old enough to vote!';
    }
    document.getElementById('How_old_are_you?').innerHTML = Vote;//calls Vote to display on html
}