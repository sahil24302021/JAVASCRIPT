//getting the p element -> getElementById
let pElement = document.getElementById("second-paragraph");
let secondParagraphQuery = document.querySelector("#second-paragraph");
// secondParagraphQuery.innerText = "playground";
// pElementById.innerContent = "<h1>playground</h1>";
const ptag = (document.getElementById("second-paragraph").textContent = "playground");
console.log(ptag);
console.log(pElement);
console.log(secondParagraphQuery);
