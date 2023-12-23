function my_Dictionary(){//made function for basic dictionary
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: 'Bark!',
        Species: "Cat",//made KVPs with identical keys
        Color: "White",//later key values show over first 
        Breed: "Tabby",
        Age: 7,
        Sound: "Meow!"
    };
    delete Animal.Sound;//delete operator deletes key .Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}