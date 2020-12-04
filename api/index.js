// index api
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

conn.sync({force: false}).then(() => {
  server.listen(5000, () => {
    console.log("%s listening at 5000");
  })
})
