import express from "express";
const app = express();
const port = 3000;

// Middleware yay!
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index", { posts: posts });

});

// // Bringing the homepage up 
// app.get("/", (req, res) => {
//     res.send("Homepage is now functioning properly");
// });


let posts = [];

// for creating new post 



app.post("/create-post", (req, res) => {
    const { creator, title, content, tags} = req.body;


    let newPost = {
        id: Date.now(),
        creator: creator,
        title: title,
        content: content,
        tags: tags,
    
        createdAt: new Date().toLocaleString()
    };

    posts.push(newPost); //should add the post then return back home
   
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`The Server is running on port ${port}!!`);
})