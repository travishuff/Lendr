const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');



/////////////////////////////////////////
// Import middleware here



/////////////////////////////////////////
// Initialize your express server
const app = express();

app.get('/login', verifyUser)