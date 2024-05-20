enum DaysOfWeek {
    Sunday = "Sunday",
   Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
};

const person = {
    firstName:"Adam"
    , lastName:"Rousselle"
    , age:34
    , dayOfBirth:DaysOfWeek.Saturday
};

console.log(person.firstName, person.lastName, person.age, person.dayOfBirth);
