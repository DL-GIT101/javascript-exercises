const findTheOldest = function(people) {
    for (let person of people){
        
        if(person.yearOfDeath  === undefined){
            const d = new Date();
            person.yearOfDeath = d.getFullYear();
        }
    }
    people.sort((a,b) =>{
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth) 
    });
    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
