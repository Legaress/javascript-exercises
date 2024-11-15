const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    const oldestPerson = people.reduce((oldest, currentPerson) => {
        // Determine the year of death for the current person
        const yearOfDeath = currentPerson.yearOfDeath || currentYear;
        
        // Calculate age
        const age = yearOfDeath - currentPerson.yearOfBirth;

        // Compare ages and return the oldest
        return (age > (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth) ? currentPerson : oldest;
    });

    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
