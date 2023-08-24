// const http = require("http");
// const fs = require("fs");
// let data = fs.readFileSync("data.json", "utf-8");

// const server = http.createServer((req, res) => {
// res.setHeader("Content-Type", "application/json"); //? front end ma json mokalvamate
// res.end(data);
// });
// server.listen(3000);
// const auth = (req, res, next) => {
// if (req.body.password == "romen123") {
// // if (req.query.password == "romen123") {
// next();
// } else {
// res.sendStatus(401);
// }
// };
