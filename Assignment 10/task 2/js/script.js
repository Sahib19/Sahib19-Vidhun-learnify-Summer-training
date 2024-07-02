// practice questions on implicit coersion
 console.log("A" - 1); // NaN
 console.log("A" + 1); // A1
 console.log(2 + "2" + "2"); // 222
 console.log("hello" + "world" + 89); // helloworld89
 console.log("hello" - "world" + 89); // NaN
 console.log("hello" + 78); // hello78
 console.log("78" - 90 + "2"); // -10 -> correct (-122)
 console.log(2 - "2" + 90); // 90
 console.log(89 - "90" / 2); // 44