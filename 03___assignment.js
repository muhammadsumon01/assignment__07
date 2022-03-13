/**
 * Send a welcome message to everyone over the age of 18 based on the age of the data
 * array of all the members of a club and send a greeting message to the person over the
 * age of 40, of course, send the message through a function, and to those who are under
 * 18 years of age. Give the message to be attentive.
 */

const cludMembers = [
{
    Id : 23,
    Name : "Muhammad",
    Age : 12,
},
{
    Id : 34,
    Name : "Arif",
    Age : 57,
},
{
    Id : 92,
    Name : "Emon",
    Age : 264,
},
{
    Id : 75,
    Name : "Maruf",
    Age : 05,
},
{
    Id : 35,
    Name : "Sazzad",
    Age : 21,
},
{
    Id : 45,
    Name : "Jaber",
    Age : 32,
},

]

for (const clubMem of cludMembers) {

// // Send Message Where age is less than 18
// if (clubMem.Age <= 18) {

// console.log(`
//     Welcome ${clubMem.Name} to Our club. Sorry you are not allowed for your age
//     Id : ${clubMem.Id}
//     Name : ${clubMem.Name}
//     Age : ${clubMem.Age}
//     ______________________
// `)}

// // Send Message Where age is greater than 18
// if (clubMem.Age >= 18) {

//     console.log(`

//     Welcome ${clubMem.Name} to Our club. We are happy to see you as a member of our club

//     Id : ${clubMem.Id}
//     Name : ${clubMem.Name}
//     Age : ${clubMem.Age}
//     ______________________
// `)}

// Send Message Where age is greater than 40
if (clubMem.Age >= 40) {

console.log(`
    Welcome ${clubMem.Name} to Our club. You are a vip member of our club. We are proud of you

    Id : ${clubMem.Id}
    Name : ${clubMem.Name}
    Age : ${clubMem.Age}
    ______________________
`)}


}

