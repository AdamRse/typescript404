var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek["Sunday"] = "Sunday";
    DaysOfWeek["Monday"] = "Monday";
    DaysOfWeek["Tuesday"] = "Tuesday";
    DaysOfWeek["Wednesday"] = "Wednesday";
    DaysOfWeek["Thursday"] = "Thursday";
    DaysOfWeek["Friday"] = "Friday";
    DaysOfWeek["Saturday"] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
;
var person = {
    firstName: "Adam",
    lastName: "Rousselle",
    age: 34,
    dayOfBirth: DaysOfWeek.Saturday
};
console.log(person.firstName, person.lastName, person.age, person.dayOfBirth);
