let num = [ 1, 2, 3, 4, 5];
let sum = num.reduce((acc , cv ) => acc + cv );
console.log(num.map((num) => num + 2));
let result = 0;
for (i = 0; i < num.length; i++) {
  result += num[i];
}
map
let new_arr = [];
for (i = 0; i < num.length; i++) {
  new_arr.push(num[i] + 2);
}
console.log(result, new_arr);


function myMap(array, callback){
    let new_array = []
    for (i=0; i < array.length; i++){
        const mapped = callback(array[i], i, array);
        new_array.push(mapped)
    }
    return new_array;
}
console.log(myMap(num, (i) => i + 2));

function myMap(array, callback){
    let new_array = []
    for (i=0; i < array.length; i++){
       if (callback(array[i], i, array)){
           new_array.push(array[i]);
       }
   }
   return new_array;
}