
const passport = require('passport');
const GoogleStrategies = require('passport-google-oauth20');
require('dotenv').config();


passport.use(
   
     new GoogleStrategies( {
        // option for the google strategies
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: 'http://localhost:3050/auth/google/redirect' },

        (accessToken, refreshToken, profile, done)  => {
            console.log("profile::::>",profile);
            done(profile);
        // passport callback function

     }) 

     );




