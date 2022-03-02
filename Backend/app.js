const express = require("express");
const app = express();
const cors = require("cors");
const postRoute = require("./router/calculateprice");
const auth = require("./router/auth");
app.use(cors());

require("./db/conn");
app.use(express.json());
app.use(auth);
app.use("/api", postRoute);

const PORT = 4040;
app.listen(PORT, () => console.log(`listening to port ${PORT}!`));
