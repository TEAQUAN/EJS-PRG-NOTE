import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3001;

app.set('view engine', 'ejs'); // view engine trys to look at the views folder created and checks if there are any ejs files if there are it accesses them 
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

let plNames = ["c", "c++","javascript","python","c#"]
    const d = new Date();
    let year = d.getFullYear();

app.get("/", (req, res) => {
    res.status(200).render("index",{pageTitle: "HomePage", plNames: plNames, year: year});
})

app.post("/", (req, res) => {
    const plName = req.body.plName;
    plNames.push(req.body.plName)
   res.redirect("/") //once data is pushed to array this would redirect user to home route
})

app.get("/contact", (req, res) => {
    res.status(200).render("contact",{pageTitle: "Contact", year: year});
})

app.listen(port, ()=> {
    console.log(`server is running at http://localhost:${port}`);
})