window.alert('Hello, World!');//This is the first pop up window on the page.
var A = 'This is a string.';//assigned the varible 'A' with a string 
window.alert(A); //This is the second pop up window, it usings the varible 'A'
document.write(A);//This writes on the page and uses the varible 'A'
document.write(' Use backslash \\ to special character\(s\) like \' \" \( \) and others.');//This writes on the page and shows how to use the backslash \ 
document.write(' Writing a string here'//These use the + to concatenate (bring together) multiple lines
+' to use the \+ to concatenate'
+' strings together.');
var B = ' Concatenated' + ' String.';// assigned the varible 'B' a concatenated string
document.write(B);//This writes on the page varible 'B'
var Family = ' The Simpsons', Dad = ' Homer ', Mom = ' Marge ',//assigns the varible 'Family' with multiple varibles 
Son = ' Bart ', Daughter = ' Lisa '; 
document.write(Daughter);//This calls one of the varibles from 'Family'
document.write(5+5);//This statement (document.write) contains and prints an expression.
function displayDate(){ // adding a function to display the time when clicked
    document.getElementById("demo").innerHTML=Date();
}