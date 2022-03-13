/**
 * Create data in a student array and object where there will be data of about 50 people and print data of
 * Mirpur and Banani residents starting from there
 */

const students = [
    {
        Name : "Muhammad",
        Age : 13,
        Roll : 1,
        Location : "Mohammadpur",
    },

    {
        Name : "Sumon",
        Age : 15,
        Roll : 2,
        Location : "Mirpur",
    },

    {
        Name : "Imran",
        Age : 17,
        Roll : 3,
        Location : "Uttara",
    },

    {
        Name : "Rashid",
        Age : 19,
        Roll : 4,
        Location : "Banani",
    },

    {
        Name : "Halim",
        Age : 21,
        Roll : 5,
        Location : "Mohammadpur",
    },

    {
        Name : "Faruk",
        Age : 23,
        Roll : 6,
        Location : "Mirpur",
    },

    {
        Name : "Joshim",
        Age : 25,
        Roll : 7,
        Location : "Uttara",
    },

    {
        Name : "Talib",
        Age : 27,
        Roll : 8,
        Location : "Banani",
    },

    {
        Name : "Habib",
        Age : 29,
        Roll : 9,
        Location : "Mohammadpur",
    },

    {
        Name : "Sazzad",
        Age : 31,
        Roll : 10,
        Location : "Mirpur",
    },

    {
        Name : "Jaber",
        Age : 33,
        Roll : 11,
        Location : "Uttara",
    },

    {
        Name : "Muhammad",
        Age : 35,
        Roll : 12,
        Location : "Banani",
    },

    {
        Name : "Sumon",
        Age : 37,
        Roll : 13,
        Location : "Mohammadpur",
    },

    {
        Name : "Imran",
        Age : 39,
        Roll : 14,
        Location : "Mirpur",
    },

    {
        Name : "Rashid",
        Age : 41,
        Roll : 15,
        Location : "Uttara",
    },

    {
        Name : "Halim",
        Age : 43,
        Roll : 16,
        Location : "Banani",
    },

    {
        Name : "Faruk",
        Age : 45,
        Roll : 17,
        Location : "Mohammadpur",
    },

    {
        Name : "Joshim",
        Age : 47,
        Roll : 18,
        Location : "Mirpur",
    },

    {
        Name : "Talib",
        Age : 49,
        Roll : 19,
        Location : "Uttara",
    },

    {
        Name : "Habib",
        Age : 51,
        Roll : 20,
        Location : "Banani",
    },

    {
        Name : "Sazzad",
        Age : 53,
        Roll : 21,
        Location : "Mohammadpur",
    },

    {
        Name : "Jaber",
        Age : 55,
        Roll : 22,
        Location : "Mirpur",
    },

    {
        Name : "Muhammad",
        Age : 57,
        Roll : 23,
        Location : "Uttara",
    },

    {
        Name : "Sumon",
        Age : 59,
        Roll : 24,
        Location : "Banani",
    },

    {
        Name : "Imran",
        Age : 61,
        Roll : 25,
        Location : "Mohammadpur",
    },

    {
        Name : "Rashid",
        Age : 63,
        Roll : 26,
        Location : "Mirpur",
    },

    {
        Name : "Halim",
        Age : 65,
        Roll : 27,
        Location : "Uttara",
    },

    {
        Name : "Faruk",
        Age : 67,
        Roll : 28,
        Location : "Banani",
    },

    {
        Name : "Joshim",
        Age : 69,
        Roll : 29,
        Location : "Mohammadpur",
    },

    {
        Name : "Talib",
        Age : 71,
        Roll : 30,
        Location : "Mirpur",
    },

    {
        Name : "Habib",
        Age : 73,
        Roll : 31,
        Location : "Uttara",
    },

    {
        Name : "Sazzad",
        Age : 75,
        Roll : 32,
        Location : "Banani",
    },

    {
        Name : "Jaber",
        Age : 77,
        Roll : 33,
        Location : "Mohammadpur",
    },

    {
        Name : "Muhammad",
        Age : 79,
        Roll : 34,
        Location : "Mirpur",
    },

    {
        Name : "Sumon",
        Age : 81,
        Roll : 35,
        Location : "Uttara",
    },

    {
        Name : "Imran",
        Age : 83,
        Roll : 36,
        Location : "Banani",
    },

    {
        Name : "Rashid",
        Age : 85,
        Roll : 37,
        Location : "Mohammadpur",
    },

    {
        Name : "Halim",
        Age : 87,
        Roll : 38,
        Location : "Mirpur",
    },

    {
        Name : "Faruk",
        Age : 89,
        Roll : 39,
        Location : "Uttara",
    },

    {
        Name : "Joshim",
        Age : 91,
        Roll : 40,
        Location : "Banani",
    },

    {
        Name : "Talib",
        Age : 93,
        Roll : 41,
        Location : "Mohammadpur",
    },

    {
        Name : "Habib",
        Age : 95,
        Roll : 42,
        Location : "Mirpur",
    },

    {
        Name : "Sazzad",
        Age : 97,
        Roll : 43,
        Location : "Uttara",
    },

    {
        Name : "Jaber",
        Age : 99,
        Roll : 44,
        Location : "Banani",
    },

    {
        Name : "Muhammad",
        Age : 101,
        Roll : 45,
        Location : "Mohammadpur",
    },

    {
        Name : "Sumon",
        Age : 103,
        Roll : 46,
        Location : "Mirpur",
    },

    {
        Name : "Imran",
        Age : 105,
        Roll : 47,
        Location : "Uttara",
    },

    {
        Name : "Rashid",
        Age : 107,
        Roll : 48,
        Location : "Banani",
    },

    {
        Name : "Halim",
        Age : 109,
        Roll : 49,
        Location : "Mohammadpur",
    },

    {
        Name : "Faruk",
        Age : 111,
        Roll : 50,
        Location : "Mirpur",
    },
]



for (const data of students) {


// ALl Student Data of Mirpur Location
   if(data.Location == 'Mirpur'){
   console.log(`
   Name : ${data.Name}
   Age : ${data.Age}
   Roll : ${data.Roll}
   Location : ${data.Location}
   _________________________________`)}



// // ALl Student Data of Banani Location
//    if(data.Location == 'Banani'){

//    console.log(`
//    Name : ${data.Name}
//    Age : ${data.Age}
//    Roll : ${data.Roll}
//    Location : ${data.Location}
//    _________________________________`)}



// // ALl Student Data where Roll Number Between 34 - 40
//    if(data.Roll >= 34 && data.Roll <= 40){

//    console.log(`
//    Name : ${data.Name}
//    Age : ${data.Age}
//    Roll : ${data.Roll}
//    Location : ${data.Location}
//    _________________________________`)}



// // ALl Young Student Data where Age is Less Than or Equal to 18
//    if(data.Age <= 18){

//    console.log(`
//    Name : ${data.Name}
//    Age : ${data.Age}
//    Roll : ${data.Roll}
//    Location : ${data.Location}
//    ____________________________________`)}

}












// vaiya nicher code er maddome Location, Age, Roll Number eksath 50 jon er Dynamic vavhe generate korchi :)


// const Location = ["Mohammadpur", "Mirpur", "Uttara", "Banani"];
// const Name = ["Muhammad","Sumon","Imran","Rashid","Halim","Faruk","Joshim","Talib","Habib","Sazzad","Jaber"]

// let x = 0;
// let y = 12;
// let z = 0;

// for (let i = 1; i <= 50; i++) {

//     console.log(`
//     {
//         Name : "${Name[z]}",
//         Age : ${i + y},
//         Roll : ${i},
//         Location : "${Location[x]}",
//     },`)

//     y = y + 1;
//     x = x + 1;
//     z = z + 1;

//     if(z == Name.length){
//         z = 0;
//     }
//     if (x == 4){
//         x = 0;
//     }

// }