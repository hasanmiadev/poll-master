const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const pollController = require("./controller/pollController.js")
const app = express();

app.set('view engine', 'ejs')

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render('home')
});
app.get("/create", pollController.createPollGetController);
app.post("/create", pollController.createPollPostController);
app.get("/polls", pollController.getAllPolls)
app.get('/polls/:id', pollController.viewPollGetController)
app.post('/polls/:id', pollController.viewPollPostController)
app.get('/polls', pollController.getAllPolls)
mongoose
  .connect("mongodb://127.0.0.1:27017/poll-master", { useNewUrlParser: true })
  .then(() => {
    app.listen(4000, () => {
      console.log("SERVER IS READY");
    });
  })
  .catch((e) => {
    console.log(e);
  });
