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