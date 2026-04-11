 const accountId = 144553
 let accountEmail = "me@gmail.com"
 var accountPassword = "12345"
 accountCity = "Jaipur"
 let accounState  // "undefined always"

//  accountId = 3 // not allowed to change the constant variable
 console.log(accountId);
 accountEmail = "vc@gmail.com"
 accountPassword = "223344"
 accountCity = "hisar"
 console.table([accountId,accountEmail,accountPassword,accountCity,accounState]);


//  notes : // prefer not to use var because of issues in block scope and functional scope 
