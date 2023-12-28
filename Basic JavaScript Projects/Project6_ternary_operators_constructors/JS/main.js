function Ride_Function(){//Function to see if person is tall enough to Ride.
    var Height, Can_ride;//Height comes from input of html.Can_ride comes (Height < 52 )
    Height = document.getElementById('Height').value;
    Can_ride = (Height < 52) ? 'You are too short': 'You are tall enough';
    document.getElementById('Ride').innerHTML = Can_ride + ' to ride.';
}
function Vote_Function(){//Function to see if person is old enough to vote.
    var Age, Can_Vote;
    Age = document.getElementById('Age').value;
    Can_Vote = (Age < 18) ? 'You are not old enough to': 'You can';
    document.getElementById('Vote').innerHTML = Can_Vote + ' Vote!';
}
function Vehicle(Make, Model, Year, Color){//This function makes an object constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle('Dodge', 'Viper', 2020, 'Red');
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'White and Black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'Mustard');
function myFunction(){//This calls my function to display Erik's Vehicle values.
    document.getElementById('Keywords_and_Constructors').innerHTML =
    'Erik drives a '+ Erik.Vehicle_Color + '-colored '+ Erik.Vehicle_Model +
    ' manufactured in '+ Erik.Vehicle_Year;
}
function Person(first, last, age, eye){//Constructor function for Person objects
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
//creating a family Person object
const iFather = new Person ('Ray', 'Harrison', 42, 'brown');
const iMother = new Person ('Brandi', 'Harrison', 37, 'Hazel');
const iSon1 = new Person ('Luke', 'Harrison', 11, 'brown');
const iSon2 = new Person ('Elijah', 'Harrison', 0, 'Hazel');
function myFamily(){
    document.getElementById('New_and_This').innerHTML =
    'My son '+ iSon1.firstName + ' is ' + iSon1.age + ' years old.'
}
function Nested_Function(){//creating Nested_Function which will call a nested function to count
    document.getElementById('Counting').innerHTML = Count();//Will send Count to html
    function Count(){//nested function will send Value up to count_Function
        var Starting_point = 12;
        function Plus_one(){Starting_point += 1;}//another nested function to added 1 to var
        Plus_one();
        return Starting_point;//sends results of function Plus_one up to function count
    }
}