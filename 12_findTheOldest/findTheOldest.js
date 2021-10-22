const findTheOldest = function(people) {
    return people.reduce(function(prev, current) {
        if("yearOfDeath" in prev === false) {
            prev["yearOfDeath"] = new Date().getFullYear()
        }
        let prevAge = prev.yearOfDeath - prev.yearOfBirth
        let currentAge = current.yearOfDeath - current.yearOfBirth
        if (currentAge > prevAge) {
            return current
        }
        else {return prev}
    })
};

// Do not edit below this line
module.exports = findTheOldest;
