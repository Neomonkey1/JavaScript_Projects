function Call_Loop(){//Made function
    var Digit = '';//variable to be define by loop
    var A = 1;
    //using while to loop variable A till it equals 10
    while (A < 11){
        //while A(1) is < 11 it will repeat the loop
        Digit += '<br>' + A;
        A++;//++ to add 1 to A
    }
    document.getElementById('Loop').innerHTML = Digit;
}
function string_Length(){//Made function
    var str = 'Hello World!'//variable string
    var B = str.length;//using .length to get length of var str
    document.getElementById('Length').innerHTML = B;
}
var Instruments = ['Guitar', 'Drums', 'Piano', 'Bass', 'Violin',
'Trumpet','Flute'];
var Content = '';
var Y;
function for_Loop(){//made function for_Loop
    //start with Y being 0, while Y is less than Instruments
    //length, increment Y by 1 tell the for loop is done.
    for (Y = 0; Y < Instruments.length; Y++){
        //Content will equal the variable Instruments (and display the string)
        //till Y is greater than Instruments length then it will go to
        //the next string, with a line break, till there are no more strings which will end the loop.
        Content += Instruments[Y] + '<br>';
    }//This will display the strings in HTML
    document.getElementById('List_of_Instruments').innerHTML = Content;
}
function array_Function(){//made function cat_pics
    //making an array Cat_Picture blank then filling in the array
    var Cat_Picture = [];
    Cat_Picture[0] = 'sleeping';
    Cat_Picture[1] = 'playing';
    Cat_Picture[2] = 'eating';
    Cat_Picture[3] = 'purring';
    //displaying a string and adding element index 2 from array to display in string
    document.getElementById('Array').innerHTML = 'In this picture, the cat is '+
    Cat_Picture[2] + '.';
}
function constant_function(){//made function for constant
    const Musical_Instrument = {type: 'guitar', brand: 'Fender', color: 'black'};
    Musical_Instrument.color = 'green';//changed from 'blue' to 'green'
    Musical_Instrument.price = '$900';
    //adding property and value
    Musical_Instrument.brand = 'Ibanez'
    //charged output to new property and value
    document.getElementById('Constant').innerHTML = 'The cost of the ' +
    Musical_Instrument.color + ' ' + Musical_Instrument.brand +' '+ Musical_Instrument.type + 
    ' was ' + Musical_Instrument.price;
}
var A = 83;//global variable can be accessed from anywhere in the program
document.write('<br>'+ A);
{
    let A = 33;//let have function scope and can only be accessed within function
    document.write('<br>'+ A);
}
document.write('<br>'+ A);
var B = 55;//global variable can be accessed from anywhere in the program
document.write('<br>'+ B);
{
    var B = 20;//variable within curly brackets using var do not have function
    //scope and can be accessed from outside of block of code.
    document.write('<br>'+ B);
}
document.write('<br>'+ B);