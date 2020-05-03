const express = require('express')
const app = express()

app.get("/:name", (req, res) => {
    console.log(req.params);
    console.log(req.route);
    console.log(req.query);
    // parameter is name, query parameter is first_name
    res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name}.`);
  });


//middleware



//parse body of HTTP requests from a URL encoded string
app.use(express.urlencoded({
    extended: true
}
))
//parse body of HTTP requests from a JSON String
app.use(express.json())


// directory to host static content
app.use(express.static(`${__dirname}/client/build`))


//

port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log('app is running ' + port)
})