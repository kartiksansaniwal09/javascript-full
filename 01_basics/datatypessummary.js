//  Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



//************* stack memory and heap memory ******************************** */
// stack is for primitive and heap is for non primitive //
// stack me copy milta hai aur heap me refrence milta hai //
let myYoutubeName = "mylifemyrules"
let anotherName =  myYoutubeName
anotherName = "iamliving"
console.log(anotherName);
console.log(myYoutubeName);
// this is stack mem //
