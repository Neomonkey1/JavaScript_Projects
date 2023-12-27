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