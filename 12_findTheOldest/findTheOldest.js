const findTheOldest = function (people) {
  let anwser = { name: "", age: -1 };
  let age;
  for (let person of people) {
    age = person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
    age -= person.yearOfBirth;
    if (anwser.age < age) {
      anwser.name = person.name;
      anwser.age = age;
    }
  }
  return anwser;
};

// Do not edit below this line
module.exports = findTheOldest;
