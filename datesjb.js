let numbers_even = [1, 2, 3, 4, 5, 6];
let numbers_odd = [1, 2, 3, 4, 5,];
console.log(numbers_even); // print entire array
// numbers_even.length → 6 - 1
console.log(numbers_even[0]); // print 1st element of array

console.log(numbers_even[numbers_even.length - 1]); // print last element of array

console.log("odd:",numbers_odd[(numbers_odd.length - 1 ) / 2]); // print middle element of array

console.log("even:",numbers_even[numbers_even.length / 2]); // print middle element of array

console.log("even:",numbers_even[numbers_even.length / 2 - 1]); // print middle element of array

// Question 5
let mixedDataType = [10, "Hi", true, 5.5, null, "JS", false];
console.log(mixedDataType);
console.log(mixedDataType.length);

// Question 6
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let arraywithoutlastelement = itCompanies.pop();
console.log(arraywithoutlastelement); // Amazon
let result = itCompanies.join(", ");
console.log(result + " and " + arraywithoutlastelement);

// Question 8
console.log("Number of IT companies:", itCompanies.length);

// Question 9
console.log("First company:", itCompanies[0]);
console.log("Middle company:", itCompanies[Math.floor(itCompanies.length / 2)]);
console.log("Last company:", itCompanies[itCompanies.length - 1]);

// Question 10
console.log("All companies:");
itCompanies.forEach(company => {
    console.log(company);
});
//Question 11
itCompanies.forEach(company => {
    console.log(company.toUpperCase());
});

// Question 12
console.log(itCompanies.join(", ") + " are big IT companies.");

// Question 13
let companyToCheck = "Facebook";
if (itCompanies.includes(companyToCheck)) {
    console.log(companyToCheck);
} else {
    console.log("Company is not found");
}
// Question 14 
let companiesWithOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
    if ((itCompanies[i].match(/o/g) || []).length <= 1) {
        companiesWithOneO.push(itCompanies[i]);
    }
}
console.log(companiesWithOneO);
// Question 15 
companiesWithOneO.sort();
console.log(companiesWithOneO);

// Question 16 
companiesWithOneO.reverse();
console.log(companiesWithOneO);

// Question 17
let slicedCompanies = companiesWithOneO.slice(0, 3);
console.log(slicedCompanies);

// Question 18 
let slicedCompanies2 = companiesWithOneO.slice(-3);
console.log(slicedCompanies2);

// Question 19
let middleIndex = Math.floor(companiesWithOneO.length / 2);
let slicedCompanies3 = companiesWithOneO.slice(middleIndex - 1, middleIndex + 2);
console.log(slicedCompanies3);

// Question 20
