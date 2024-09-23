import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
//console.log(__dirname);
app.use(express.static(__dirname + '/public'));

console.log(__dirname);
var year = new Date().getFullYear();
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.render('index.ejs', {year:year});
  console.log(req.body.title);

});

app.post("/submit", (req, res) => {
 
  var story = req.body.story;
  var title = req.body.title;

  res.render('index.ejs', 
    {title:title, 
    story:story,
    year:year});
 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
