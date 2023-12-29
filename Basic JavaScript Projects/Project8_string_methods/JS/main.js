function full_Sentence(){//using function to Concatenate a string
    var part_1 = 'I have ';
    var part_2 = 'made this ';
    var part_3 = 'into a complete ';
    var part_4 = 'sentence. ';
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById('Concatenate').innerHTML = whole_sentence;
}
function slice_Method(){//using function to slice a part of the string to display
    var Sentence = 'All work and no play makes Johnny a dull boy.';
    var Section = Sentence.slice(27, 33);//27 index is J to 33 which is the space after y 
    document.getElementById('Slice').innerHTML = Section;//This will display 'Johnny'
}
function func_Upper(){//using function to make id text upper case
    let text = document.getElementById('make_Upper').innerHTML;//calls id from html and makes it the text 
    document.getElementById('make_Upper').innerHTML = text.toUpperCase();//converts the text called to upper case
}
let text = "Please locate where 'locate' occurs!";
let index = text.search('locate');//using search() will find first occurs/index of the string.
document.getElementById('Test1').innerHTML = index;
function string_Method(){//using function to make a number return as a string
    var A = 182;
    document.getElementById('Numbers_to_string').innerHTML = A.toString();
}
function precision_Method(){//using function toPrecision to round up a number
    var B = 12938.3012987376112;
    document.getElementById('Precision').innerHTML = B.toPrecision(10);
    //toPrecision() the number inside is where it will round up the number to this case 10 digits
}
let C = 6.7261;//using function toFixed to round up to the digit I pick (good to use with money)
document.getElementById('method_ToFixed').innerHTML = C.toFixed(0) +'<br>'+
C.toFixed(2) +'<br>'+
C.toFixed(4);
function func_valueOf(){//using function valueOf to return a number for a number
    var D = 132;
    var res = D.valueOf()+"<br>"+(132).valueOf();//different ways to write valueOf
    document.getElementById('Value').innerHTML = res;
}