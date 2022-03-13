/**
 * Arrange a data sheet for a family phone book and publish it
 */


const familyMembers = [
    {
        Name : "Ahmed Didar",
        Relation : "Father",
        SimCompany : "Banglalink",
        Number : "019239832983",
    },
    {
        Name : "Monowara Yasmin",
        Relation : "Mother",
        SimCompany : "Grameenphone",
        Number : "017239832983",
    },
    {
        Name : "Ahmed Shorif",
        Relation : "Brother",
        SimCompany : "Grameenphone",
        Number : "017239832983",
    },
    {
        Name : "Ahmed Adib",
        Relation : "Brother",
        SimCompany : "Banglalink",
        Number : "019239832983",
    },
    {
        Name : "Zaifa Ahmed",
        Relation : "Sister",
        SimCompany : "Grameenphone",
        Number : "017239832983",
    },
    {
        Name : "Adiba Ahmed",
        Relation : "Sister",
        SimCompany : "Banglalink",
        Number : "019239832983",
    },
]

for (const data of familyMembers) {


// All Family Members Contact Info without filtering
console.log(`
Name : ${data.Name}
Relation : ${data.Relation}
Number : ${data.Number}
SimCompany : ${data.SimCompany}
___________________________`);




// // All Brothers Contact Info
// if (data.Relation == "Brother") {

// console.log(`
// Name : ${data.Name}
// Relation : ${data.Relation}
// Number : ${data.Number}
// SimCompany : ${data.SimCompany}
// ___________________________`)}




// // All Sister Contact Info
// if (data.Relation == "Sister") {

// console.log(`
// Name : ${data.Name}
// Relation : ${data.Relation}
// Number : ${data.Number}
// SimCompany : ${data.SimCompany}
// ___________________________`)}




// // All Family Members Contact Info who are using Grameenphone
// if (data.SimCompany == "Grameenphone") {

// console.log(`
// Name : ${data.Name}
// Relation : ${data.Relation}
// Number : ${data.Number}
// SimCompany : ${data.SimCompany}
// ___________________________`)}




// // Family Member Info Based on Name
// if (data.Name == "Ahmed Adib") {

// console.log(`
// Name : ${data.Name}
// Relation : ${data.Relation}
// Number : ${data.Number}
// SimCompany : ${data.SimCompany}
// ___________________________`)}


}