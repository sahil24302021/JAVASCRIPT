// 1. Declare variable
let challenge = '50 Days Of JavaScript';

// 2. Print string
console.log(challenge);

// 3. Print length
console.log(challenge.length);

// 4. To uppercase
console.log(challenge.toUpperCase());

// 5. To lowercase
console.log(challenge.toLowerCase());

// 6. Cut first word
console.log(challenge.substring(0, 2)); // "50"

// 7. Slice "Days Of JavaScript"
console.log(challenge.substring(3));

// 8. Check if contains "Script"
console.log(challenge.includes('Script'));

// 9. Split into array
console.log(challenge.split());

// 10. Split by space
console.log(challenge.split(' '));

// 11. Split companies string by comma
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12. Replace JavaScript with Python
console.log(challenge.replace('JavaScript', 'Python'));

// 13. Character at index 15
console.log(challenge.charAt(15));

// 14. Character code of J
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// 15. Last occurrence of "a"
console.log(challenge.lastIndexOf('a'));

// 16. First occurrence of "because"
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// 17. Last occurrence of "because"
console.log(sentence.lastIndexOf('because'));

// 18. Search "because"
console.log(sentence.search('because'));

// 18.1 First occurrence of "a"
console.log(challenge.indexOf('a'));

// 19. Trim whitespace
let str = ' 50 Days Of JavaScript ';
console.log(str.trim());

// 20. startsWith
console.log(challenge.startsWith('50'));

// 21. endsWith
console.log(challenge.endsWith('JavaScript'));

// 22. Match all "a"
console.log(challenge.match(/a/g));

// 23. Concat strings
let part1 = '50 Days Of ';
let part2 = 'JavaScript';
console.log(part1.concat(part2));

// 24. Repeat 2 times
console.log(challenge.repeat(4));
