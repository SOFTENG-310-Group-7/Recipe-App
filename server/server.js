const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const recipeRoutes = require('../routes/recipes');
const serverRoutes = require('../routes/server');
const connectDB = require('./db');

const app = express();
dotenv.config({ path: './config.env' });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/recipes', recipeRoutes);
app.use('/api/server', serverRoutes);

// Maximum number of ports to try
const MAX_PORT_TRIES = 10;

// Connect to the database and start the server
const startServer = async (port = 5000, retries = 0) => {
    try {
        const db = await connectDB();
        app.locals.db = db;

        const server = app.listen(port, () => {
            console.log(`Server is running on port ${port}.`);
        });

        server.on('error', async (error) => {
            if (error.code === 'EADDRINUSE') {
                if (retries < MAX_PORT_TRIES) {
                    console.log(`Port ${port} is in use, trying port ${port + 1}...`);
                    await startServer(port + 1, retries + 1);
                } else {
                    console.error(`All ports from ${port - retries} to ${port} are in use.`);
                    process.exit(1);
                }
            } else {
                console.error('Failed to start the server', error);
                process.exit(1);
            }
        });

    } catch (error) {
        console.error('Failed to connect to the database', error);
        process.exit(1);
    }
};

startServer();

module.exports = app;
