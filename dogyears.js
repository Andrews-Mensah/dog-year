//this is my age
const myAge = 90

//this is an earlier year
let earlyYears = 2
earlyYears *= 10.5

//this is a later year
let laterYears = myAge - 2

//dog years in later years
laterYears *= 4

console.log (earlyYears)
console.log (laterYears)

//my age in dog years
const myAgeInDogYears = earlyYears + laterYears

//this is my name
let myName = 'Andy'.toLowerCase()

console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`)