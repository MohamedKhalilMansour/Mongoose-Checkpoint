const Person = require("./models/person");

Person.insertMany([{
    name:"Mohamed Khalil Mansour",
    age:27,
    favoriteFoods:["favFoodOne","favFoodTwo","favFoodThree"]
}]).then( insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});


Person.create([
    {
        name:"Person X",
        age:34,
        favoriteFoods:["favFoodFour","favFoodFive"]
    },
    {
        name:"Person Y",
        age:43,
        favoriteFoods:["favFoodSix","favFoodSeven"]
    },
    {
        name:"Person Z",
        age:19,
        favoriteFoods:["favFoodEight","favFoodNine"]
    }
]).then(insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});


Person.create([
    {
        name:"Person X",
        age:35,
        favoriteFoods:["favFoodFour","favFoodFive"]
    },
    {
        name:"Person Y",
        age:41,
        favoriteFoods:["favFoodSix","favFoodSeven"]
    },
    {
        name:"Person Z",
        age:18,
        favoriteFoods:["favFoodEight","favFoodNine"]
    }
]).then(insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});

Person.find().then(remainingPerson => {console.log(remainingPerson)});

Person.findOne().then(remainingPerson => {console.log(remainingPerson)});

let id = "616adc1542221ee3848c8903"; // It's just an example 
Person.findById(id, function (err, docs) {console.log(docs)});

Person.findOneAndUpdate({"name":"Mohamed Khalil Mansour"},{$set:{age:"28"}})
.then(updatedPerson => {console.log("Updated Person: ",updatedPerson)});

Person.findByIdAndRemove(id, function (err, docs) {console.log("Removed Person :",docs)});

Person.remove({name:"Mohamed Khalil Mansour"})
.then(removedPersons => {console.log("Removed Person :",removedPersons)});

