/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {

let sum = 0
let j =1 
// let i = 0
while(j<arr.length){
    let z =0 
    while(z<arr.length){
        // console.log(arr.slice(z,j+z))
        if(arr.slice(z,j+z).length==j){
             sum += arr.slice(z,j+z).reduce((acc,curr)=>  acc+curr)
             console.log(arr.slice(z,j+z).reduce((acc,curr)=>  acc+curr))
        }
        z++
    }
    j+=2
}

if(arr.length%2!=0) return sum += arr.reduce((acc,curr)=> acc+curr)

 return sum


};