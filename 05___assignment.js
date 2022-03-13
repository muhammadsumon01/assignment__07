/**
 * Create fees array and object data for a picnic where everyone will provide free basic information for everyone.
 */

const students = [
    {
        Name     : "Jaber",
        Age      : 14,
        Fee      : 600,
        Location : "Mohammadpur",

    },
    {
        Name     : "Arif",
        Age      : 12,
        Fee      : 700,
        Location : "Mirpur",

    },
    {
        Name     : "Imran",
        Age      : 15,
        Fee      : 420,
        Location : "Mirpur",

    },
    {
        Name     : "Sazzad",
        Age      : 12,
        Fee      : 670,
        Location : "Mohammadpur",

    },
    {
        Name     : "Limon",
        Age      : 17,
        Fee      : 800,
        Location : "Mohammadpur",

    },
    {
        Name     : "Karim",
        Age      : 17,
        Fee      : 800,
        Location : "Mirpur",

    }
]

let totalFee = 0;

for (const data of students) {

console.log(`
Name : ${data.Name}
Age : ${data.Age}
Fee : ${data.Fee}
Location : ${data.Location}
________________________`)
totalFee = totalFee + data.Fee;

}

console.log(`
Total Fee - ${totalFee}
______________________________________`);
