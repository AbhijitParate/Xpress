import {Xpress} from "./xpress/src/Xpress.js";
import {XpressConfig} from "./xpress/src/config/Config.js";
import {Xpression} from "./xpress/src/Xpression.js";


// const xpression = new Xpression("null")
// console.log(xpression.evaluate(null))

// const config = XpressConfig.from(`
//     // test comment
//     fun test(a) {
//         return [123]
//     }
// `);
// console.log(config)

console.log("Result: ", Xpression.evaluate(Xpression.from("42 + 42")))
console.log("Result: ", Xpression.evaluate(Xpression.from("\"aa\" + \"bb\"")))
console.log("Result: ", Xpression.evaluate(Xpression.from("true && true")))
console.log("Result: ", Xpression.evaluate(Xpression.from("true || false")))
