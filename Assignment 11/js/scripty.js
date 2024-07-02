// TASK

// 1.Extract first five letters from a string (' gfuh ieiuei ') and display in UI
var str1 = ' gfuh ieiuei ';
console.log(str1.slice(0, 6));
document.getElementById("task1").innerHTML = str1.slice(0,6);

// 2.Get the length of a string and make it uppercase ('hduej dij')
var str2 = 'hduej dij';
console.log(str2.length);
console.log(str2.toUpperCase());

// 3.Take a string, make it lowercase and trim it ('   bIJi jdo   ')
var str3 = '   bIJi jdo   ';
console.log((str3.toLocaleLowerCase()).trim());

// 4.Replace specified word in a string ('', '')
var str4 = 'Rohit is very intelligent and he is very smart.';
console.log(str4.replace("is", "was"));
console.log(str4.replaceAll("is", "was"));

// 5.Random statements in implicit coercion e.g. (89  + 'hello' + 90 / 9) (true || false)
console.log(89 + 'hello' + 90 / 9);
// (89  + 'hello' + 10) -> ('89hello' + 10) -> ('89hello10')

console.log(true || false);  // True

// 6.Create an object for animal.

var animal = {
    type: "omnivores",
    foot: 4,
    colour: "black"
};

console.log(animal);
// 7.Revise type of each datatype

//done
