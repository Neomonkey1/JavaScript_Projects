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
function for_Loop(){//function for_Loop
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