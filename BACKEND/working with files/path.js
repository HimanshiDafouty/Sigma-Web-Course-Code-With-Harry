import path from "path"
console.log(path);
let myPath="D:\\Web Development\\Sigma Web Development Course\\working with files\\ri3.txt"
console.log(
    path.dirname(myPath),
    path.extname(myPath),
    path.basename(myPath),
    path.parse(myPath)
);
