const Subscriber = require('./models/subscribers');
const express = require('express');
const app = express()
const path = require('path');

// Your code goes here

//setting the view engine to ejs
app.set('view engine', 'ejs');

 // Set the views directory
 app.set('views', path.join(__dirname, 'views'));


 //using ejs to render the index page

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api', (req, res) => {
    res.render('api');
});

//getting all the subscribers
app.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find(); 
        res.status(200).json(subscribers)
    } catch {
        res.status(500).json({error: "Failed to get the subscribers"})
    }
});

//getting all the subscribers with name and subscribedChannel
app.get('/subscribers/names', async (req,res) => {
    try{
        const nameAndChannel = await Subscriber.find().select('name subscribedChannel')
        res.status(200).json(nameAndChannel)
    }
    catch{
        res.status(500).json({error: "Failed to get the subscribers"})
    }
})

//getting the subscriber by id
app.get('/subscribers/:id', async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id); // Find by ID
        if (!subscriber) {
            return res.status(400).json({ message: "Subscriber not found" });
        }
        res.status(200).json(subscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = app;
