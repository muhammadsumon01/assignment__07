/**
 * Create an array indexNum structure with some indexNum of fifth-grade students where their results will be published based on
 * GPA and grade based on. Publish CGPA and final grade in the final result
 */


/**
 * CGPA, GPA, Grade Calculation
 */

// Roll Number -
// Name -
// Father Name -
// Mother Name -
// Location -
// Bangla (bn) -
// English (en) -
// Math -
// Science -
// Social Science -
// Religion -


const students = [
{

        Roll           : 1,
        Name           : "Muhammad Sumon",
        FatherName     : "Joshim Ahmed",
        MotherName     : "Asifa Begum",
        Location       : "Uttara",
        Bangla         : 67,
        English        : 35,
        Math           : 34,
        Science        : 79,
        socialScience  : 88,
        Religion       : 99,

},
{

        Roll           : 2,
        Name           : "Imran Khan",
        FatherName     : "Imu Rahman",
        MotherName     : "Saliha Begum",
        Location       : "Mirpur",
        Bangla         : 34,
        English        : 34,
        Math           : 55,
        Science        : 55,
        socialScience  : 36,
        Religion       : 77,

},
{

        Roll           : 3,
        Name           : "Ashik Ahmed",
        FatherName     : "Hasnain Ahmed",
        MotherName     : "Saifaa Begum",
        Location       : "Uttara",
        Bangla         : 77,
        English        : 33,
        Math           : 44,
        Science        : 15,
        socialScience  : 46,
        Religion       : 97,

},
{

        Roll           : 4,
        Name           : "Mahbub",
        FatherName     : "Alamin",
        MotherName     : "Jannat",
        Location       : "Mohammadpur",
        Bangla         : 53,
        English        : 55,
        Math           : 75,
        Science        : 79,
        socialScience  : 88,
        Religion       : 55,

},
{

        Roll           : 5,
        Name           : "Alamin Hossan",
        FatherName     : "Mahbub Ahmed",
        MotherName     : "Saifaa Khatun",
        Location       : "Uttara",
        Bangla         : 96,
        English        : 97,
        Math           : 99,
        Science        : 22,
        socialScience  : 98,
        Religion       : 99,

},
{

        Roll           : 6,
        Name           : "Joshim Ahmed",
        FatherName     : "Ashik Ahmed",
        MotherName     : "Liada Rahman",
        Location       : "Mirpur",
        Bangla         : 67,
        English        : 35,
        Math           : 34,
        Science        : 79,
        socialScience  : 88,
        Religion       : 99,

},
{

        Roll           : 7,
        Name           : "Aifa Tasnun",
        FatherName     : "Joshim Ahmed",
        MotherName     : "Asifa Begum",
        Location       : "Uttara",
        Bangla         : 77,
        English        : 45,
        Math           : 64,
        Science        : 79,
        socialScience  : 88,
        Religion       : 77,

},
{

        Roll           : 8,
        Name           : "Liza Akhter",
        FatherName     : "Mohin Rahman",
        MotherName     : "Fahmida Rahman",
        Location       : "Mirpur",
        Bangla         : 63,
        English        : 68,
        Math           : 71,
        Science        : 35,
        socialScience  : 88,
        Religion       : 99,

},
{

        Roll           : 9,
        Name           : "Sazzad Hossain",
        FatherName     : "Joshim Jomaddar",
        MotherName     : "halima Begum",
        Location       : "Mohammadpur",
        Bangla         : 87,
        English        : 45,
        Math           : 54,
        Science        : 99,
        socialScience  : 38,
        Religion       : 99,

},
{

        Roll           : 10,
        Name           : "Arif Hossain",
        FatherName     : "Raihan Talukdar",
        MotherName     : "Josna Talukdar",
        Location       : "Mohammadpur",
        Bangla         : 88,
        English        : 34,
        Math           : 74,
        Science        : 35,
        socialScience  : 78,
        Religion       : 67,

}

]


function ResultCalc(indexNum = 0) {


    // indexNum from user

    // this.studentName = prompt(`What's your name?`);
    // this.studentRoll = prompt(`What's your roll?`);

    // this.bangla = prompt(`What's your total mark in bangla?`);
    // this.english = prompt(`What's your total mark in english?`);
    // this.math = prompt(`What's your total mark in math?`);
    // this.science = prompt(`What's your total mark in science?`);
    // this.religion = prompt(`What's your total mark in religion?`);



//     this.studentName    = students[indexNum].Name;
//     this.studentRoll    = students[indexNum].Roll;
//     this.bangla         = students[indexNum].Bangla;
//     this.english        = students[indexNum].English;
//     this.math           = students[indexNum].Math;
//     this.science        = students[indexNum].Science;
//     this.socialScience  = students[indexNum].socialScience;
//     this.religion       = students[indexNum].Religion;



    this.totalNumber = students[indexNum].Bangla + students[indexNum].English + students[indexNum].Math + students[indexNum].Science + students[indexNum].socialScience + students[indexNum].Religion;



    this.gpaCalc = number => {

            if (number >= 0 && number <= 32) {
                    return 0;
            } else if (number >= 33 && number <= 39) {
                    return 1;
            } else if (number >= 40 && number <= 49) {
                    return 2;
            } else if (number >= 50 && number <= 59) {
                    return 3;
            } else if (number >= 60 && number <= 69) {
                    return 3.5;
            } else if (number >= 70 && number <= 79) {
                    return 4;
            } else if (number >= 80 && number <= 100) {
                    return 5;
            } else {
                    return 'Enter Correct Number Between 0 - 100'
            }

    }

    this.gradeCalc = number => {

            if (number >= 0 && number <= 32) {
                    return 'F';
            } else if (number >= 33 && number <= 39) {
                    return 'D';
            } else if (number >= 40 && number <= 49) {
                    return 'C';
            } else if (number >= 50 && number <= 59) {
                    return 'B';
            } else if (number >= 60 && number <= 69) {
                    return 'A-';
            } else if (number >= 70 && number <= 79) {
                    return 'A';
            } else if (number >= 80 && number <= 100) {
                    return 'A+';
            } else {
                    return 'Nothing'
            }

    }




    this.passFailCheck = () => {

            let cgpa = ((this.gpaCalc(students[indexNum].Bangla)) + (this.gpaCalc(students[indexNum].English)) + (this.gpaCalc(students[indexNum].Math)) + (this.gpaCalc(students[indexNum].Science)) + (this.gpaCalc(students[indexNum].socialScience)) + (this.gpaCalc(students[indexNum].Religion))) / 6;


            if ((this.gpaCalc(students[indexNum].Bangla)) == 0 || this.gpaCalc(students[indexNum].English) == 0 || this.gpaCalc(students[indexNum].Math) == 0 || this.gpaCalc(students[indexNum].Science) == 0 || this.gpaCalc(students[indexNum].socialScience) == 0 || this.gpaCalc(students[indexNum].Religion) == 0) {
                    return 'Failed';
            } else {
                    return cgpa;
            }

    }

}

let resultCheck = new ResultCalc();


for (let indexNum = 0; indexNum < students.length; indexNum ++) {


if(students[indexNum].Roll <= 3 ){

        console.log(`
        Student Name - ${students[indexNum].Name} || Roll - ${students[indexNum].Roll}

        -------------------------------------------------------
        Subject Name    | Subject Number | GPA        | GRADE
        -------------------------------------------------------
        Bangla          | ${students[indexNum].Bangla}             | ${resultCheck.gpaCalc(students[indexNum].Bangla)}          | ${resultCheck.gradeCalc(students[indexNum].Bangla)}
        English         | ${students[indexNum].English}             | ${resultCheck.gpaCalc(students[indexNum].English)}          | ${resultCheck.gradeCalc(students[indexNum].English)}
        Math            | ${students[indexNum].Math}             | ${resultCheck.gpaCalc(students[indexNum].Math)}          | ${resultCheck.gradeCalc(students[indexNum].Math)}
        Science         | ${students[indexNum].Science }             | ${resultCheck.gpaCalc(students[indexNum].Science )}          | ${resultCheck.gradeCalc(students[indexNum].Science )}
        Social Science  | ${students[indexNum].socialScience}             | ${resultCheck.gpaCalc(students[indexNum].socialScience)}          | ${resultCheck.gradeCalc(students[indexNum].socialScience)}
        Religion        | ${students[indexNum].Religion}             | ${resultCheck.gpaCalc(students[indexNum].Religion)}          | ${resultCheck.gradeCalc(students[indexNum].Religion)}
        -------------------------------------------------------
        Total - ${resultCheck.totalNumber}       CGPA - ${resultCheck.passFailCheck()}

______________________________________________________________________________________________________`)

}

}


