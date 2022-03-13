/**
 * Create a MERN stack, Laravel, Django, GoLang,  WordPress, java dives students data
 * structure and make their total income sheet with per developer data, Find specific
 * students.
 */

const devs = [{

  Name      : "Muhammad",
  Age       : 23,
  Skill     : "Mern Stack",
  Income    : 4200,
  Location  : "Uttara"

},{

  Name      : "Imran",
  Age       : 42,
  Skill     : "Laravel",
  Income    : 3444,
  Location  : "Mohammadpur"

},{

  Name      : "Ashik",
  Age       : 10,
  Skill     : "Django",
  Income    : 3000,
  Location  : "Mirpur"

},{

  Name      : "Sazzad",
  Age       : 17,
  Skill     : "GoLang",
  Income    : 3444,
  Location  : "Mirpur"

},
{

  Name      : "Imran",
  Age       : 45,
  Skill     : "WordPress",
  Income    : 4622,
  Location  : "Uttara"

},
{

  Name      : "Arif",
  Age       : 75,
  Skill     : "Java",
  Income    : 1233,
  Location  : "Mirpur"

},
{

  Name      : "Maruf",
  Age       : 23,
  Skill     : "GoLang",
  Income    : 8422,
  Location  : "Mohammadpur"

},
{

  Name      : "Siddik",
  Age       : 24,
  Skill     : "Java",
  Income    : 3444,
  Location  : "Uttara"

},
{

  Name      : "Alif",
  Age       : 64,
  Skill     : "Mern Stack",
  Income    : 8455,
  Location  : "Mohammadpur"

},
{

  Name      : "faiza",
  Age       : 64,
  Skill     : "WordPress",
  Income    : 9345,
  Location  : "Mohammadpur"

},
];

for (const data of devs) {

// Specific Developer data
if(data.Name == "Muhammad"){
console.log(`
Name     : ${data.Name}
Age      : ${data.Age}
Skill    : ${data.Skill}
Income   : ${data.Income}
Location : ${data.Location}
________________________`
)}


// // Developer per data based on Age
// if(data.Age >= 0 && data.Age <= 18){
// console.log(`
// Name     : ${data.Name}
// Age      : ${data.Age}
// Skill    : ${data.Skill}
// Income   : ${data.Income}
// Location : ${data.Location}
// ________________________`
// )}


// // Developer per data based on Location
// if(data.Location == "Mirpur"){
// console.log(`
// Name     : ${data.Name}
// Age      : ${data.Age}
// Skill    : ${data.Skill}
// Income   : ${data.Income}
// Location : ${data.Location}
// ________________________`
// )}


}


//Developer Total Income

let incomeData = 0;
let skillCategory = "";

for (const data of devs) {


  // // WordPress Developer Total Income
  // if (data.Skill == "WordPress") {
  //   incomeData = incomeData + data.Income
  //   skillCategory = "WordPress";
  // }


  // // Mern Stack Developer Total Income
  if (data.Skill == "Mern Stack") {

    incomeData = incomeData + data.Income
    skillCategory = "Mern Stack";

  }

}

console.log(`
${skillCategory} Developer Total Income - ${incomeData}
______________________________________________________
`);







