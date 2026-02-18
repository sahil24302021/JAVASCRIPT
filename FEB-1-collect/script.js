const products = [
    {
        id: 1,
        name: "keyboard",
        price: 999,
    },
    {
        id: 2,
        name: "mouse",
        price: 499,
    },
    {
        id: 3,
        name: "camera",
        price: 9999,
    }
];
let x = products.filter((p) =>{
     return p.price > 999;
});
// collect(products).where('price', '>', 999);
console.log(x);