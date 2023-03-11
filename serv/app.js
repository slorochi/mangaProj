const express = require('express')
const app = express();
const port = 3001;
const cors = require('cors');
const db = require('./models')

app.use(express.json());
app.use(cors());

// Routers
const mangasRouter = require("./routes/Mangas");
const chaptersRouter = require("./routes/Chapters");
const pagesRouter = require("./routes/Pages");
const usersRouter = require("./routes/Users");

app.use("/mangas",mangasRouter);
app.use("/chapters",chaptersRouter);
app.use("/pages",pagesRouter);
app.use("/users",usersRouter);


db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{console.log("Server listening on " + port)})
})
