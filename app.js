"use strict";
const express = require('express'),
app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {

	res.send("Hello world");
})

app.listen(app.get("port"), () => {

	console.log(`server started on port http://localhost:${app.get("port")}.`);
})




console.log("doing something basic")

//http://localhost:3000/