// Q90
//checking a value NaN npot anumber
function checknan(value : any ): boolean{
    return isNaN(value);
};
// checking another value
console.log(checknan("sadaf")); // true because its not a num
console.log(checknan(54329)); // false because its a number
