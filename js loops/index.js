console.log("Loops");

let a = 1;

// For loop
for (let i = 0; a <= 10; a++) {
    console.log(a + i);
}

// Object iteration using for...in
let obj = {
    "name": "ri",
    "age": 21
};
//for in
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

//for of
for (const iterator of "RIRI") {
    console.log(iterator);
    
}

// While loop
while (a <= 10) {
    console.log(a);
    a++;
}
//do while
let b=6;
do{
    console.log(b);
    b++;
}while(b<=10);