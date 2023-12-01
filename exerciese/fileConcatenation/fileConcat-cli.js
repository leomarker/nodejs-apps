import { fileConcat } from "./fileConcat.js";

console.log(process.argv.slice(2));

fileConcat(process.argv[2], ...process.argv.slice(3));
