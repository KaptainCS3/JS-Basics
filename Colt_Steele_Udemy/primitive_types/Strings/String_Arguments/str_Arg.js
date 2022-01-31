    //done by KaptainCS3  30 /01/ 2022

        //arguments are input that modify the behaviour of a method.

let day = "SunSunday".indexOf('Sun'); /* returns the index within the calling string object 
                                        of the first occurrence of the specific value */
// For each through a string for first match
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

                                    
let newStr = "Welcome to Paris".indexOf('A'); //when string not found method returns "-1"
let slice = "i hate monday".slice(2,6) //methods extractsa section of  a string to retun it as a new string without modify the original "2" = starting index, "6" = ending index, but ending index is opitonal
let msg = "i hate monday".replace('hate', 'love'); //searches and replace the string
console.log(day); // "0"
console.log(newStr); // -1 no match
console.log(slice);
console.log(msg);
