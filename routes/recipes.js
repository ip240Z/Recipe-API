const express = require('express');
const router = express.Router();
const fs = require('fs');

let RECIPE_FILE = `./data/recipe.json`

router.get('/', (req, res) => {
    fs.readFile(RECIPE_FILE, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500)
                .send("Error reading the recipe file");
            return;
        } else {
            res.json(JSON.parse(data));
        }
    })
});

router.get(`/random/`, (req, res) => {
    fs.readFile(RECIPE_FILE, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.status(500)
                .send("Error getting random recipe");
            return;
        } else {
            data = JSON.parse(data)
            let randRecipe = data[Math.round(Math.random() * data.length -1)]
            console.log(randRecipe)
            res.json(randRecipe);
        }
    })
});
router.get('/:id', (req, res) => {
    const {id} = req.params;

    fs.readFile(RECIPE_FILE, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Error reading the file")
            return;
        } else {
            data = JSON.parse(data);
            let targetRecipe = data.find(recipe => recipe.id.toString() === id);
            if(targetRecipe) {
                res.json(targetRecipe);
            } else {
                res.status(404)
                .send(`<h1>Error, Unknown recipe id...</h1>`);
            };
        }
    })
});



router.post(`/`, (req, res) => {
    fs.readFile(RECIPE_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).send('Error reading the file');
            return;
        };
        console.log(req.body)
        let recipes = JSON.parse(data);

        const newRecipe = {id: (recipes.length + 1), name: req.body.name, style: req.body.style, prep_time: req.body.prep_time, cook_time: req.body.cook_time, instructions: req.body.instructions};
        recipes.push(newRecipe);
        console.log(newRecipe);

        fs.writeFile(RECIPE_FILE, JSON.stringify(recipes), err => {
            if (err) {
                console.error(err)
                res.status(500).send('Error writing the file');
                return;
            } 
        });
        res.json(newRecipe);
    })
})

module.exports = router