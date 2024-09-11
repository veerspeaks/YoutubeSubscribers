const Subscriber = require('./models/subscribers');
const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Render the index page
app.get('/', (req, res) => {
    res.render('index');
});

// Render the API page
app.get('/api', (req, res) => {
    res.render('api');
});

// Get all subscribers
app.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (error) {
        console.error(error);  // Log the actual error for debugging
        res.status(500).json({ error: "Failed to retrieve subscribers" });
    }
});

// Get subscribers with only name and subscribedChannel
app.get('/subscribers/names', async (req, res) => {
    try {
        const nameAndChannel = await Subscriber.find().select('name subscribedChannel -_id');
        res.status(200).json(nameAndChannel);
    } catch (error) {
        console.error(error);  // Log the actual error for debugging
        res.status(500).json({ error: "Failed to retrieve subscribers' names and channels" });
    }
});

// Get a subscriber by ID
app.get('/subscribers/:id', async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id);
        if (!subscriber) {
            return res.status(404).json({ message: "Subscriber not found" });  // Use 404 for "not found"
        }
        res.status(200).json(subscriber);
    } catch (error) {
        console.error(error);  // Log the actual error for debugging
        res.status(400).json({ message: "Invalid subscriber ID format" });  // More descriptive error message
    }
});

module.exports = app;
