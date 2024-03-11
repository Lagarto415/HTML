const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Configure the PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'words_html', // Change this to your database name
  password: 'otto1.', // Change this to your password
  port: 5050, // Default PostgreSQL port
});

// Define an API endpoint to fetch data from the database
fetch('http://localhost:5050/')
.then(response => {
    if (!response.ok) {
        throw new Error(`Failed to fetch words.json: ${response.status} ${response.statusText}`);
    }
    return response.json(); // Parses the JSON response into a JavaScript object
})
.then(data => {
    // Extract Abk and Ausg arrays from the fetched data
    Abk = data.words.map(entry => entry.Abk);
    Ausg = data.words.map(entry => entry.Ausg);
})
.catch(error => {
    console.error('Error fetching or parsing words.json:', error);
});
