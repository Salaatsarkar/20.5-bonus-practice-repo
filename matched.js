/**
 * find the matching product by searching products 
 * make a array
 * create some objects of products inside this array
 * search any specific product within products
 * use lowercase to make it case sensitive
 * use of includes() method
 */

const products =[
    {id:1 , name: "lenovo laptop", price: 110000},
    {id:2, name : "samsung galaxy s21 Phone" , price: 90000},
    {id:3, name : "iphone" , price: 120000},
    {id:4, name : "vivo v8 Phone" , price: 30000},
    {id:5, name : "mac book air laptop" , price: 190000},
    {id:6, name : "redmi 9 phone" , price: 15000},
    {id:7, name : "hp laptop" , price: 60000},
]
function matchProduct(products , search)
{
    let match =[];
    for(const product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            match.push(product);
        }
    }
    return match;
}
const result = matchProduct(products,"phone");
console.log(result);