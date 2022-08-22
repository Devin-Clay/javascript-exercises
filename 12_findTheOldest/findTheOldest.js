const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    let currentDeathYear, oldestDeathYear, currentAge, oldestAge;
    currentPerson.yearOfDeath ? currentDeathYear = currentPerson.yearOfDeath : currentDeathYear = new Date().getFullYear();
    oldestPerson.yearOfDeath ? oldestDeathYear = oldestPerson.yearOfDeath : oldestDeathYear = new Date().getFullYear();
    
    currentAge = currentDeathYear - currentPerson.yearOfBirth;
    oldestAge = oldestDeathYear - oldestPerson.yearOfBirth;

    return currentAge > oldestAge ? currentPerson : oldestPerson;    
  })
};

// Do not edit below this line
module.exports = findTheOldest;
