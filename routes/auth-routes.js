
  const router = require('express').Router();
  const passport = require('passport');

 

  // auth login
   router.get('/login', (req, res) => {
 
         res.render("login",{ user: req.user })
       
   });

   // auth logout

   router.get('/logout', (req, res) => {

     // handel with passport 
        
      res.send('logiing out! ')

   });

   // auth with google
     const userData = [];
   router.get('/google', passport.authenticate('google', {
      scope: ['profile', 'email'] 

   }),);


    // callback for redirect

     router.get('/google/redirect',passport.authenticate('google'),(req,res) => {

          res.send('you reached the redirect URI')
     })

     module.exports = router;