import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Bringing the homepage up 
app.get("/", (req, res) => {
    res.send("Homepage is now functioning properly");
});


let posts = [];

// for creating new post 

app.post("/create-post", (req, res) => {
    const { creator} = req.body;


    let newPost = {
        id: Date.now(),
        creator: creator,
        createdAt: new Date().toLocaleString()
    };

    posts.push(newPost); //should add the post then return back home
   
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`The Server is running on port ${port}!!`);
})