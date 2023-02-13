   
  // const declaration
  const express = require('express');
  const app = express();
  const authRoutes = require('./routes/auth-routes');
  const passportSetup = require('./config/passport-setup');
  const session = require('express-session');
  const cookiesParser = require('cookie-parser');

  const port = process.env.PORT || 3050 ;
 // seting session && coockies
    app.use(cookiesParser())
    app.use(session({secret:'%ency6fYN4Z#5Pt&', cookie:{maxAge:6000}}))
    // app.use(session({secret:'%ency6fYN4Z#5Pt&', cookie: {maxAge:60000}}))


  // Seting  view engine

   app.set('view engine', 'ejs')


   // Set up routes

    app.use('/auth',authRoutes)

// creating Route

 app.get('/' , (req, res) =>{

      res.render('index')
 });


 app.get('/login' , (req, res) =>{

    res.render('login')

});


// session get 

app.get('/session', (req, res) => {

       if(req.session.count){

           req.session.count++;
           res.send(
             "count" + req.session.count
           )
       }else{

                req.session.count = 1;
                res.send("welcome to first time"+  "count" + req.session.count)
       }
})


app.get('*' , (req, res) => {

      res.send("<h1> 404 Error page not found <a href ='/'> Home </a> </h1>")
})

   // creating port 

    app.listen(port, () => {

         console.log(`Port  is listening ${port}`);
    })