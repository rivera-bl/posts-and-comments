const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());
const port = 4000;

const posts = {};

// list all posts
app.get('/posts', (req, res) => {
    res.send(posts);
});

// create a post
app.post('/posts', (req, res) => {
    // create random id
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
