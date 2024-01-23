import fs from "fs/promises"

let a =await fs.readFile("ri2.txt");
let b = await fs.writeFile("ri3.txt","It is a new day so let us just say it is a good day");
console.log(a.toString());
