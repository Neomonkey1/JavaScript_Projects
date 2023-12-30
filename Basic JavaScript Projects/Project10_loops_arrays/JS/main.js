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